const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const images = Array.from(document.querySelectorAll(".carousel_Image"));
let counter = 0;
console.log(images[counter])



nextBtn.addEventListener("click", function() {
  if(counter < images.length) {
    images.forEach(image => {
      image.classList.add("hide");
    })
    if(counter === -1) {
      counter = counter + 1;
      images[counter].classList.remove("hide");
    } else {
      images[counter].classList.remove("hide");
    }
    counter++;
    counter -1
    console.log(counter)
  }
})

prevBtn.addEventListener("click", function() {
  if(counter < 0) return
  images.forEach(image => {
    image.classList.add("hide");

    if(counter === 3) {
      counter = counter -1
      images[counter].classList.remove("hide")
    } else {
      images[counter].classList.remove("hide");
    }
  })
})
