

function checkPineHeight(pineHeight) {

    if (pineHeight > "50") {
        return console.log("Le sapin est coupé.")
    } else {
        return console.log("Le sapin est trop petit")
    }
}
module.exports = checkPineHeight;