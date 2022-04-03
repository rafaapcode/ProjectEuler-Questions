function primeNum() {

    let arr = [];
    let pos = 100000;

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
    }

    let sum = arr.reduce((acc, value) => {
        return acc + value;
    })

    console.log(sum);

}

primeNum();