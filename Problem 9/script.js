const p9 = document.querySelector(".problem9");
const r9 = document.querySelector(".r9");

p9.addEventListener("click", () => {
    r9.innerHTML = `<div class='result2'>31875000</div>`;
    setTimeout(() => {
        r9.innerHTML = ``;
    }, 10000)
})

let sum = 1000;

for (let i = 1; i <= sum / 3; i++) {
    for (let b = i + 1; b <= sum / 2; b++) {
        let c = sum - i - b;
        if (i * i + b * b == c * c) {
            console.log(i * b * c);
        }
    }
}