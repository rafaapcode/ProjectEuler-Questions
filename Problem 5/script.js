const p5 = document.querySelector(".problem5");
const r5 = document.querySelector(".r5");

p5.addEventListener("click", () => {
    r5.innerHTML = `<div class='result4'>${smallest(20)}</div>`;
    setTimeout(() => {
        r5.innerHTML = ``;
    }, 10000)
})



function smallest(n) {
    let inc = 2;
    let step = 2;
    let smallestNum = 2;

    while (smallestNum <= Number.MAX_SAFE_INTEGER) {
        for (let i = 2; i <= n; i++){
            const divisible = smallestNum % i === 0;

            if(!divisible){
                break;
            }
            if(i === inc){
                step = smallestNum;
                inc++
            }

            if(i === n){
                return smallestNum;
            }
        }
        
        smallestNum += step;
    
    }

    return true;
}
