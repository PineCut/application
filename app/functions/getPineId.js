
function getPineId() {
    let random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    let pineId = random(1, 9e+9);

    return pineId;
}
module.exports = getPineId;