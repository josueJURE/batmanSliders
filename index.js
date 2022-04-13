const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const images = Array.from(document.querySelectorAll(".carousel_Image"));
let counter = 0;
console.log(images[counter])



nextBtn.addEventListener("click", function() {
  if(counter <= images.length -1) {
    images.forEach(image => {
      image.classList.add("hide");
    })
    images[counter].classList.remove("hide");
    counter++;
    console.log(counter)
  }
})

prevBtn.addEventListener("click", function() {
  if(counter < 0) return
  images.forEach(image => {
    image.classList.add("hide");
    console.log(counter)
    images[counter].classList.remove("hide");
  })
  counter--;
})
