const image = document.getElementById('image');
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

image.addEventListener('click', (e) => {
  if(clickTime === 0) {
    clickTime = new Date().getTime()
  } else {
    if((new Date().getTime() - clickTime < 800)) {
      createHeart(e)
      clickTime = 0
    } else {
      clickTime = new Date().getTime()
    }
  }
})

const createHeart = (e) => {
  const heart = document.createElement('i')
  heart.classList.add('bi')
  heart.classList.add('bi-heart-fill')

  const x = e.clientX
  const y = e.clientY

  const xInside = x - e.target.offsetLeft
  const yInside = y - e.target.offsetTop

  

  heart.style.top = `${yInside}px`
  heart.style.left = `${xInside}px`

  image.appendChild(heart)
  times.innerHTML = ++timesClicked

  setTimeout(() => heart.remove(), 5000)
}