const p10 = document.querySelector(".problem10");
const r10 = document.querySelector(".r10");

p10.addEventListener("click", () => {
    r10.innerHTML = `<div class='result2'>142913828922</div>`;
    setTimeout(() => {
        r10.innerHTML = ``;
    }, 10000)
})


