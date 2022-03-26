function isPalindrome(n) {

    // Pegando o número ao contrário
    let reversed = String(n).split("").reverse().join("");
    let normal = n;

    return Number(reversed) === n;
}

module.exports.largestPalindrome = (num) => {
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
    console.log(highest);
}

