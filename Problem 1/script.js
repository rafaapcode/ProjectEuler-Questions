const p1 = document.querySelector(".problem1");
const r1 = document.querySelector(".r1");

p1.addEventListener("click", () => {
    r1.innerHTML = `<div class='result1'>${t()}</div>`;
    setTimeout(() => {
        r1.innerHTML = ``;
    }, 10000)
})


function t() {
    let arr = [];
    for (let i = 0; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            arr.push(i);

        }
    }
    let sum = arr.reduce((total, value) => {
        return total + value;
    })

    return sum;
}
