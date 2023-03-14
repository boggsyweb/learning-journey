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
    for (let journal of journals) {
      projectImg += `
      <div class="gallery-cont">
          <img class="blog-img" src=${journal.image}>
          <button class="open-project"><i class="fa-solid fa-arrow-down"></i></button>
          <div class="project-el">
              <div class="project-inner">
                  <p class="date">${journal.date}</P>
                  <h2 class="blog-title">${journal.name}</h2>
                  <p class="description">${journal.description}</p>
                  <p class="change"><span class="bold">Things to improve:</span> ${journal.change}</p>
                  <a id="scrimba" href=${journal.scrim} target="blank"><i class="fa-solid fa-code"></i> Scrimba</a>
                  <a id="netlify" href=${journal.netlify} target="blank"><i class="fa-solid fa-laptop"></i> Netlify</a>
              </div>
          </div>
      </div>
      `
    }
    
    projectsGallery.innerHTML = projectImg;
  
    const readMoreButtons = document.querySelectorAll('.open-project');
  
    function disableOtherButtons() {
      for (let button of readMoreButtons) {
        if (button !== this) {
          button.disabled = true;
        }
      }
    }
  
    function enableAllButtons() {
      for (let button of readMoreButtons) {
        button.disabled = false;
      }
    }
  
    for (let button of readMoreButtons) {
      button.addEventListener('click', function() {
        const projectEl = this.nextElementSibling;
        if (projectEl.classList.contains('show')) {
          projectEl.classList.remove('show')
          enableAllButtons();
        } else {
          projectEl.classList.add('show')
          disableOtherButtons.call(this);
        }
        this.classList.toggle('rotated');
      });
    }
  }
  
  displayProjects();






// **automatically updates year in footer (based on user's computer)**
let date = (new Date()).getFullYear()
document.getElementById('year').innerHTML = date