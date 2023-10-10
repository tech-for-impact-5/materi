let btnLocal = document.getElementById("btn-local")
let btnSession = document.getElementById("btn-session")
let btnCookie = document.getElementById("btn-cookie")

// buat tombol get data local
// ambil kucing dari localstorage
// munculin di console.log
// JSON.parse() -> convert string ke obj

btnLocal.addEventListener("click", () => {
  let buah = ["jambu", 'melon', 'salak']
  let kucing = {
    nama: "TOM",
    warna: "biru"
  }

  localStorage.setItem('buah', JSON.stringify(buah) )
  localStorage.setItem('kucing', JSON.stringify(kucing) )

  localStorage.setItem("name", "Alpha")
})

btnSession.addEventListener("click", () => {
  sessionStorage.setItem("name", "Alpha")
})

btnCookie.addEventListener("click", () => {
  document.cookie = "name=Alpha"
})



