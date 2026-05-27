const grid = document.querySelector(".especialidades-grid");
const btnNext = document.querySelector(".slide-next");
const btnPrev = document.querySelector(".slide-prev");

btnNext.addEventListener("click", () => {
    grid.scrollBy({left: 304, behavior: 'smooth'});
})

btnPrev.addEventListener("click", () => {
    grid.scrollBy({left: -304, behavior: 'smooth'});
})

console.log(grid)
console.log(btnNext)
console.log(btnPrev)