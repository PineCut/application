const { writeFileSync, readFileSync } = require('fs');
const path = require('path');


function checkPineHeight(pineHeight) {
    let existingData = {};

    try {
        let rawData = readFileSync(path.join(__dirname, '../database/pine-data.json'), "utf-8")
        existingData = JSON.parse(rawData);
    } catch (e) {
        console.error(e)
    }
    if (pineHeight > "50") {

        let pine = {
            pineHeight: pineHeight,
            cut: true
        }
        let mergedData = {...existingData, pine}
        return writeFileSync(path.join(__dirname, '../database/pine-data.json'), JSON.stringify(mergedData, null, 2))
    } else {

        let pine = {
            pineHeight: pineHeight,
            cut: false
        }
        let mergedData = {...existingData, pine}
        return writeFileSync(path.join(__dirname, '../database/pine-data.json'), JSON.stringify(mergedData, null, 2))
    }
}
module.exports = checkPineHeight;