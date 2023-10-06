let kucing = {
  nama: "TOM",
  warna: "biru"
}

console.log(kucing.nama);
console.log(kucing['warna']);

kucing.kaki = 4
kucing['ekor'] = true

kucing.warna = "oren"

console.log(kucing);

let x = 'nama'

let tikus = {
  [x]: "Jerry",
  warna: "coklat"
}

console.log(tikus);

for (x in tikus) {
  console.log(x, tikus[x]);
}


let hantu = {
  nama: "pocong",
  warna: "merah",
  loncat: () => {
    console.log("pocong loncat");
  },
  sleding: () => {
    console.log("pocong sleding");
  },
  jumpscare: () => {
    console.log("cilukbaaaa");
  }
}

let namaHantu = hantu.nama
// let {nama, sleding} = hantu

let {sleding, ...pocongPutih} = hantu
console.log(pocongPutih);

function skillHantu ({loncat, sleding, jumpscare}) {
  // console.log(hantu);
  loncat()
  sleding()
  jumpscare()
}

skillHantu(hantu)

let angka = [1,2,3,4,5,6,7,8,9]

let [satu, dua, tiga, ...restAngka] = angka
console.log(satu);
console.log(dua);
console.log(tiga);
console.log(restAngka);

let angkaTerakhir = angka[angka.length-1]
console.log(angkaTerakhir);




let number = 10
let num = number

num = 15
console.log(number);
console.log(num);








let mobil = {
  nama: "ferrari",
  warna: "merah",
  ngebut: () => {
    console.log("mobil ngebut");
  },
  ngerem: () => {
    console.log("mobil ngerem");
  },
}

// let car = mobil // cara salah

let car = {...mobil}
car.warna = "biru"

console.log(car);
car.ngebut()
console.log(mobil);
