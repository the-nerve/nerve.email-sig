import {signatures} from './src/signatures';

/*
  Print the responsive HTML generated and MJML errors if any
*/
console.log(signatures)
signatures.forEach(signature => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = signature
    document.body.innerHTML += signature;
})