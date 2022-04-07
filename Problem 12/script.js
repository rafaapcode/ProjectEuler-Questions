const p12 = document.querySelector(".problem12");
const r12 = document.querySelector(".r12");

p12.addEventListener("click", () => {
    r12.innerHTML = `<div class='result2'>76576500</div>`;
    setTimeout(() => {
        r12.innerHTML = ``;
    }, 10000)
})

function main(number) {
    var num = number, i = 2, p = 1;
    if (number == 1) {
        return 1;
    }

    while (i * i <= num) {
        var x = 1;
        while (num % i == 0) {
            num /= i;
            x++;
        }
        i++;
        p *= 1 + 1;
    }

    if (num == number || num > 1) {
        p *= 1+1;
        return p;
    }
}

function sol(num){
    var x =1, y=1;
    while(main(y) <= num){
        x++;
        y += x;
    }
    console.log(y);
}

sol();
