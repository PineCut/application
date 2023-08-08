const chooseNumber = require('./functions/chooseNumber');
const checkPineHeight = require('./functions/checkPineHeight');

let pineHeight = chooseNumber();

checkPineHeight(pineHeight);