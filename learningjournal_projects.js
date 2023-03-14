import { journals } from './data.js'

// **runs header animation**

anime.timeline({})
  .add({
    targets: '.animation .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.animation .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.animation .icon',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.animation .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.animation .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  })


// **dropdown**
let hamburger = document.getElementById('hamburger')

hamburger.addEventListener('click', dropDown)

function dropDown() {
  const x = document.getElementById("nav-links");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

const projectsGallery = document.querySelector('.projects-gallery')



function displayProjects() {
    let projectImg = ""
    for(let i = 0; i < journals.length; i++) {
        projectImg += `
        <div class="gallery-cont">
        <img class="blog-img" src=${journals[i].image}>
        <button class="read-more">Read more</button>
        <div class="project-el">
        <div class="project-inner">
        <p class="date">${journals[i].date}</P>
        <h2 class="blog-title">${journals[i].name}</h2>
        <p class="description">${journals[i].description}</p>
        <p class="change"><span class="bold">Things I would change:</span> ${journals[i].change}</p>
        <a href=${journals[i].scrim} target="blank">See the Scrim</a>
        <a href=${journals[i].netlify} target="blank">See the Website</a>
        <button class="close-btn">Close</btn>
        </div>
        </div>
        </div>
        `
        
}
projectsGallery.innerHTML = projectImg

const readMoreButtons = document.querySelectorAll('.read-more');
const closeButtons = document.querySelectorAll(".close-btn");


function disableOtherButtons() {
  for (let i = 0; i < readMoreButtons.length; i++) {
    if (readMoreButtons[i] !== this) {
      readMoreButtons[i].disabled = true;
    }
  }
}

function enableAllButtons() {
  for (let i = 0; i < readMoreButtons.length; i++) {
    readMoreButtons[i].disabled = false;
  }
}

for (let i = 0; i < readMoreButtons.length; i++) {
  readMoreButtons[i].addEventListener('click', function() {
    const projectEl = this.nextElementSibling;
    if (projectEl.style.display === 'block') {
      projectEl.style.display = 'none';
      enableAllButtons();
    } else {
      projectEl.style.display = 'block';
      disableOtherButtons.call(this);
    }
  });
}
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", function () {
      const projectEl = this.closest(".project-el");
      projectEl.style.display = "none";
      enableAllButtons();
    });
  }
}

displayProjects()






// **automatically updates year in footer (based on user's computer)**
let date = (new Date()).getFullYear()
document.getElementById('year').innerHTML = date