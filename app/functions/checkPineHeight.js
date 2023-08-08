const { writeFileSync, readFileSync } = require('fs');
const path = require('path');
const getPineId = require('../functions/getPineId');


function checkPineHeight(pineHeight) {
    let exploitation;

    try {
        let rawData = readFileSync(path.join(__dirname, "../database/pine-data.json"), "utf-8")
        exploitation  = JSON.parse(rawData);
    } catch (e) {
        console.error(e)
    }

    if (pineHeight > "50") {

        let pine = {
            pineId: getPineId(),
            pineHeight: pineHeight,
            cut: true
        }
        let mergedData = {exploitation, pine}
        return writeFileSync(path.join(__dirname, '../database/pine-data.json'), JSON.stringify(mergedData, null, 2))
    } else {

        let pine = {
            pineId: getPineId(),
            pineHeight: pineHeight,
            cut: false,
        }
        let mergedData = {exploitation, pine}
        return writeFileSync(path.join(__dirname, '../database/pine-data.json'), JSON.stringify(mergedData, null, 2))
    }
}
module.exports = checkPineHeight;