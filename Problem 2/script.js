const p2 = document.querySelector(".problem2");
const r2 = document.querySelector(".r2");

p2.addEventListener("click", () => {
    r2.innerHTML = `<div class='result2'>${fibo()}</div>`;
    setTimeout(() => {
        r2.innerHTML = ``;
    }, 10000)
})


function fibo(){
    let prox = 1;
    let ant = 0;
    let sum = 0;
    let arr = [];


    for (let i = 0; i <= 32; i++) {
        sum = ant + prox;
        ant = prox;
        prox = sum;

        if (ant % 2 === 0) {
            arr.push(ant);
        }
    }

    let soma = arr.reduce((value, total) => {
        return value + total;
    })

    return soma;

}
