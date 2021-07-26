import {signatureConfig, colors} from './config.js';
import {signatureTemplate} from './template.js';

export const signatures =  signatureConfig.people.map( person => signatureTemplate({...person}))