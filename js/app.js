const open = document.getElementById('open')
const close = document.getElementById('close')
const conteiner = document.querySelector(".container")

open.addEventListener('click', () => {
    conteiner.classList.add('show-nav')
})

close.addEventListener('click', () => {
    conteiner.classList.remove('show-nav')
})