const chooseNumber = require('./functions/chooseNumber');
const checkPineHeight = require('./functions/checkPineHeight');
//const mailer = require('./mail/mailer')

let pineHeight = chooseNumber();

checkPineHeight(pineHeight);

//mailer();