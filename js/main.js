let fullScreenButton = document.querySelector(".btn");
let imageContainer = document.querySelector(".image-container");
// console.log(imageContainer);
fullScreenButton.addEventListener("click", () => {
  imageContainer.classList.toggle("container");
});

let listItems = document.querySelectorAll(".information ul li");
let contentDivs = document.querySelectorAll(".info-content div");
// console.log(contentDivs);
listItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".selected").forEach((el) => {
      el.classList.remove("selected");
    });
    e.target.classList.add("selected");
    contentDivs.forEach((el) => {
      el.style.display = "none";
    });
    let className = e.target.dataset.name;
    contentDivs.forEach((div) => {
      if (div.classList.contains(className)) {
        div.style.display = "block";
      }
    });
  });
});
