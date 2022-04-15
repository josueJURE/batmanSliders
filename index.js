const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const images = Array.from(document.querySelectorAll(".carousel_Image"));
let counter = 0;

nextBtn.addEventListener("click", moveNext);
prevBtn.addEventListener("click", moveToPrevious);

function moveNext() {
  if(counter === images.length -1) {
    counter = 0;
  } else {
    counter++
  }
  update()
}



function moveToPrevious() {
  if(counter === 0) {
    counter = images.length -1
  } else {
    counter--;
  }
  update()
}

function update() {
  images.forEach(image => {
    image.classList.add("hide");
  })
  images[counter].classList.add("show")
}

update()
