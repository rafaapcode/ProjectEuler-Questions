module.exports.factorialPrime = (number) => {
    let maxPrime = -1;

    while (number % 2 == 0) {
        maxPrime = 2;
        number /= 2;
    }

    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        while (number % i == 0) {
            maxPrime = i;
            number /= i;
        }
    }

    if (number > 2) {
        maxPrime = number;
    }

    console.log(maxPrime);

}
