function factorialPrime() {
    let arr = [];

    for (let i = 2; i <= 37; i++) {
        let ehprimo = true;

        for (let d = 2; d < i; d++) {
            if (i % d === 0) {
                ehprimo = false;
            }
        };

        if (ehprimo) {
            arr.push(i);
        }

    }
    arr.slice(2);

    // console.log(vezes);
    console.log(arr);
}

factorialPrime();