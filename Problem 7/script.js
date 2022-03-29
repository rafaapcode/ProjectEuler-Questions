const p7 = document.querySelector(".problem7");
const r7 = document.querySelector(".r7");

p7.addEventListener("click", () => {
    r7.innerHTML = `<div class='result2'>104743</div>`;
    setTimeout(() => {
        r7.innerHTML = ``;
    }, 10000)
})

function primeNum() {

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
            return arr[10000];
        }

    }

}

