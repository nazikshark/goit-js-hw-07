function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector('.js-body')
const btnEl = document.querySelector('.js-btn')
const spanEl = document.querySelector('.js-span')
btnEl.addEventListener('click',() => {
  let color = getRandomHexColor()
  bodyEl.style.backgroundColor=color
  spanEl.textContent= color
})