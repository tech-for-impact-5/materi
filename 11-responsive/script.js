let logoMenu = document.getElementById("logo-menu")
let nav = document.getElementById("nav")

logoMenu.addEventListener('click', () => {
  nav.classList.toggle("hidden")
})