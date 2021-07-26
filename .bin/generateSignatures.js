import fs from 'fs'
import resolve from 'resolve';
import path from 'path';
import juice from 'juice'
import { strict as assert } from "assert";
import { crush, defaults } from "html-crush";

import { signatureTemplate } from '../src/template.js';
import { signatureConfig } from '../src/config.js';

const OUTPUT_DIR = path.join(process.cwd(), '/output');

if (!fs.existsSync(OUTPUT_DIR)){
    fs.mkdirSync(OUTPUT_DIR);
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
        console.log(`Signature generated at: ${path}`);
      })
}

const hydratedSignatures = signatureConfig.people.map( person => {
    const hydratedTemplate = signatureTemplate({...person})
    const signature = juice(hydratedTemplate, juiceOptions);
    return {
        name: person.firstName.toLowerCase(),
        html: signature
    }
})

console.log(hydratedSignatures);

const minifiedSignatures = hydratedSignatures.map( ({name, html}) => {
    const signature = crush( html, defaults ).result
    return {
        name,
        html: signature
    };
})

minifiedSignatures.forEach( ({name, html}) => writeSignatureFile(name, html))
