const p4 = document.querySelector(".problem4");
const r4 = document.querySelector(".r4");

p4.addEventListener("click", () => {
    r4.innerHTML = `<div class='result4'>${largestPalindrome(3)}</div>`;
    setTimeout(() => {
        r4.innerHTML = ``;
    }, 10000)
})


function isPalindrome(n) {

    // Pegando o número ao contrário
    let reversed = String(n).split("").reverse().join("");
    let normal = n;

    return Number(reversed) === n;
}

function largestPalindrome(num) {
    let highest = 0;

    // Encontrando o maior número
    let largestNum = "9";
    largestNum += Number(largestNum.repeat(num - 1));
    largestNum = Number(largestNum);
    for (let i = largestNum; i > 0; i--) {
        for (let j = largestNum; j > 0; j--) {
            let product = i * j;
            if (isPalindrome(product)) {
                if (product > highest) {
                    highest = product;
                    break;
                }
            }
        }
    }
    return highest;
}

