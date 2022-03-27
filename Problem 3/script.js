const p3 = document.querySelector(".problem3");
const r3 = document.querySelector(".r3");

p3.addEventListener("click", () => {
    r3.innerHTML = `<div class='result3'>${factorialPrime(600851475143)}</div>`;
    setTimeout(() => {
        r3.innerHTML = ``;
    }, 10000)
})

function factorialPrime(number) {
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

    return maxPrime;

}
