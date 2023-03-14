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
const journalCont = document.getElementById('journal-cont')

//** Render pictures and captions**//

function displayJournal() {
  let journalEntry = ""
  for(let i = 0; i < journals.length; i++) {
    journalEntry += `
    <div class="blog">
        <img class="blog-image" src=${journals[i].image}>
        <p class="date">${journals[i].date}</p>
        <h3 class="blog-title">${journals[i].name}</h3>
        <p class="body">${journals[i].intro}</p>
    </div>
`
  }
 
  journalCont.innerHTML = journalEntry
}

displayJournal()


// **automatically updates year in footer (based on user's computer)**
  let date = (new Date()).getFullYear()
  document.getElementById('year').innerHTML = date
