// ======================= function ========================

// ## say hello ---------
sayHello("Auzan", 17)

function sayHello(nama, umur) {
  console.log(`Hallooo.. Selamat datang ${nama}`);
  console.log(`umur : ${umur}`);
}

let nama = prompt()
sayHello("Bradley", 20)
sayHello("Fahki", 19)
sayHello(nama)

// ## cekLampuLantas ---------
function cekLampuLantas(lampu) {
  switch (lampu) {
    case "hijau":
      console.log("jalan");
      break;
    case "kuning":
      console.log("hati-hati");
      break;
    case "merah":
      console.log("berhenti");
      break;
    default:
      console.log("lampu rusak");
  }
}

cekLampuLantas("hijau")
cekLampuLantas("kuning")
cekLampuLantas("merah")
cekLampuLantas("kelap-kelip")

// ## luasPersegi ---------
function lPersegiPanjang(p, l) {
  let hasil = p*l
  console.log(hasil);
}
lPersegiPanjang(p,l)

// ================== dengan return =======================
// ## luasPersegi ---------
function luasPersegiPanjang(p, l) {
  let hasil = p*l
  return hasil
}

console.log(luasPersegiPanjang(3, 2));

// ## volume balok ---------
function volumeBalok(p,l,t){
  let LPersegiPanjang = luasPersegiPanjang(p,l)
  return LPersegiPanjang * t
}

console.log(volumeBalok(3,2,4));


// ## first char capital ---------
// hallo -> Hallo
// auzan -> Auzan
// tas -> Tas

function firstTextCapital(text) {
  let result = text[0].toLocaleUpperCase() + text.slice(1,text.length)
  return result
}

console.log("tes", firstTextCapital("tes"));
console.log("sepatu", firstTextCapital("sepatu"));
console.log("uang", firstTextCapital("uang"));



// =============== bentuk function ==================
// bentuk 1 --------
function namaFunction() {
  // isi function
}
// punya fitur hoisting



// bentuk 2 --------
let funcVariabel = function () {
  // isi function
}

// bisa utk callback
// pembuatan method
let kucing = {
  nama: "TOM",
  warna: "biru",
  tidur: () => {},
  makan: function() {}
}


// bentuk 3 --------
let arrowFunction = () => {

}
// bisa utk callback
// pembuatan method
// return short syntax 
let luasLingkaran = (r) => (3.14 * r * r)
let luasLingkaran2 = (r) => {
  return 3.14 * r * r
}



// =================== cek bil prima =====================
// bil yg bisa di bagi dgn 1 dan bil itu sendiri

// sebelum function
let bil = 4
let counter = 0
for (let i = 2; i <= bil; i++) {
  if (bil % i == 0) {
    counter++
  }
}

if (counter == 1) {
  console.log("prima");
} else {
  console.log("bukan prima");
}


// sesudah function
let cekPrima = (bil) => {
  let counter = 0
  for (let i = 2; i <= bil; i++) {
    if (bil % i == 0) {
      counter++
    }
  }

  if (counter == 1) {
    return true
  } else {
    return false
  }
}

console.log(2, cekPrima(2));
console.log(5, cekPrima(5));
console.log(10, cekPrima(10));

