const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const content = document.querySelector(".content");
const images = Array.from(document.querySelectorAll(".carousel_Image"));
let counter = 0;

let batman = [
  {
    name: "affleck",
    year: 2013,
    boxOffice: "$738.4 million"
  },
  {
    name: "keaton",
    year: 1989,
    boxOffice: "$266.9 million"
  },
  {
    name: "pattinson",
    year: 2022,
    boxOffice: "$238.5 million"
  }
]

console.log(batman[counter].name)

nextBtn.addEventListener("click", moveNext);
prevBtn.addEventListener("click", moveToPrevious);

function moveNext() {
  if(counter === images.length -1) {
    counter = 0;
    counter++;
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
    image.classList.remove("show")
    image.classList.add("hide");
  })
  images[counter].classList.add("show");
  updateContent();
}


function updateContent() {
  content.innerHTML = batman[counter].name;
}

// update()
