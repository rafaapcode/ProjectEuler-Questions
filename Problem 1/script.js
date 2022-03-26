module.exports.t = () => {
    let arr = [];
    for (let i = 0; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            arr.push(i);
            
        }
    }
    let sum = arr.reduce((total, value) => {
        return total + value;
    })

    console.log(sum);
}
