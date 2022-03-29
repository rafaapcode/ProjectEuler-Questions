const p6 = document.querySelector(".problem6");
const r6 = document.querySelector(".r6");

p6.addEventListener("click", () => {
    r6.innerHTML = `<div class='result2'>${sumSquare()}</div>`;
    setTimeout(() => {
        r6.innerHTML = ``;
    }, 10000)
})


function sumSquare() {

    // Soma dos Quadrados de 1 a 100
    let arr = [];
    let arrs = [];
    for (let i = 0; i <= 100; i++) {
        arr.push(Math.pow(i, 2));
        arrs.push(i);
    }

    let squareSoma = arrs.reduce((acc, value) => {
        return acc + value;
    })

    let sumQuadrado = Math.pow(squareSoma, 2);

    let somaSquare = arr.reduce((acc, value) => {
        return acc + value;
    })

    let sum = somaSquare;

    return sumQuadrado - sum;

}

console.log(sumSquare());