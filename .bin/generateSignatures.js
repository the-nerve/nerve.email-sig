import fs from 'fs'
import resolve from 'resolve';
import path from 'path';
import juice from 'juice'
import { strict as assert } from "assert";
import { crush, defaults } from "html-crush";

import { signatureTemplate } from '../src/template.js';
import { signatureConfig } from '../src/config.js';

const OUTPUT_DIR = path.join(process.cwd(), '/output');

const createOutputDir = async () => {
    try {
        if (!fs.existsSync(OUTPUT_DIR)){
            console.log(`Creating fresh output directory...`);
            fs.mkdirSync(OUTPUT_DIR);
            console.log(`Output directory created at: ${OUTPUT_DIR}`);
        }
    } catch (error) {
        console.error(`Error creating output directory at ${OUTPUT_DIR}`, error);
    }
}

const removeStaleOutputDir = async () => {
    try {
        console.log(`Deleting output directory...`);
        fs.rm(OUTPUT_DIR, { recursive: true, force: true }, error => {
            if(error){
                console.error(`Error while deleting output directory.`, error);
                return;
            }
            console.log(`Output directory was successfully deleted!`);
        });

    } catch (error) {

    }
}

// Juice Repo + Docs: https://github.com/Automattic/juice
const juiceOptions = {
    applyAttributesTableElements: false,
    applyHeightAttributes: false,
    applyStyleTags: true,
    applyWidthAttributes: false,
    inlinePseudoElements: true,
    preserveFontFaces: false,
    preserveImportant: true,
    preserveMediaQueries: false,
    preserveKeyFrames: false,
    preservePseudos: false,
    removeStyleTags: true,

}

const writeSignatureFile = (name, signatureHTML) => {

    const path = `${OUTPUT_DIR}/${name}.html`
    fs.writeFile( path, signatureHTML, err => {
        if (err) {
          console.error(err)
          return
        }
        console.log(`New signature generated at: ${path}`);
      })
}

const processedSignatures = signatureConfig.people.map( person => {
    const hydratedTemplate = signatureTemplate({...person})
    const juicedHTML = juice( hydratedTemplate, juiceOptions);
    const minfiedHTML = crush( juicedHTML, defaults ).result
    return {
        name: person.firstName.toLowerCase(),
        html: minfiedHTML
    }
})

;(async function generateSignatures(){
    await removeStaleOutputDir();
    await createOutputDir();
    processedSignatures.forEach( ({name, html}) => writeSignatureFile(name, html))
})();
