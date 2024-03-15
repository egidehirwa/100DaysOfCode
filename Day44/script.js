
const scrollContainer = document.querySelector(".slider");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

/* scrollContainer.addEventListener("wheel", (evt) => {
    e.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
}) */

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 150;
})

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 150;
})