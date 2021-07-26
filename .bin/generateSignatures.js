import juice from 'juice'
import { strict as assert } from "assert";
import { crush, defaults } from "html-crush";

import { signatureTemplate } from '../src/template.js';
import { signatureConfig } from '../src/config.js';

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

const hydratedSignatures = signatureConfig.people.map( person => {
    const hydratedTemplate = signatureTemplate({...person})
    const signature = juice(hydratedTemplate, juiceOptions);
    return signature;
})

console.log(hydratedSignatures);

const minifiedSignatures = hydratedSignatures.map( signatureHTML => {
    const signature = crush( signatureHTML, defaults ).result
    return signature;
})

console.log(minifiedSignatures)
