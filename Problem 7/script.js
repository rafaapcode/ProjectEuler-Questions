module.exports.primeNum = () => {

    let arr = [];
    let pos = 2000000;

    for (let i = 2; i <= pos; i++) {
        let ehprimo = true;
        for (let d = 2; d < i; d++) {
            if (i % d === 0) {
                ehprimo = false;
            }
        };

        if (ehprimo) {
            arr.push(i);
        };
        if (arr.length === 10001) {
            console.log(arr[10000]);
        }

    }

}
