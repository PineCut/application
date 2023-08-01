

 function chooseNumber() {
    let random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
     let number = random(1, 200);

    return number;

}

module.exports = chooseNumber;