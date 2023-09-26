// ========= Loop ==========
// for
// while
// do while

// when?
// ingin melakukan perulangan

// for (start; stop; step) {
// }

// 1 2 3 4 5 6 7 8 9 10
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(10);

for (let i = 1; i <= 5; i++) {
  if (i % 2 == 0) {
    console.log(i, "genap");
  } else {
    console.log(i, "ganjil");
  }
}

let deret = [2,3,4,6,10,15,28,54,76,98]
// loop
//  conditional
//    tampilkan hasilnya
let input = Number(prompt())
for(let i = 0; i < deret.length; i++) {
  // console.log(deret[i]);
  if (deret[i] == input){
    console.log("data ditemukan");
  }
}




// for (let i = 10; i >= 1; i-=3) {
//   console.log(i);
// }

// let angka = 1
// while (angka <= 5){
//   console.log(angka);
//   angka++
// }

// let number = 1
// do {
//   console.log(number);
//   number++
// } while (number <= 5)

// mesin ATM, 
// sistem akan terus berjalan
// selama user tidak menekan
// berhenti transaksi || 0

// let input = prompt()

// while (input != 0){
//   console.log("sistem terus berjalan");
//   input = prompt()
// }

// let input
// console.log("input kartu dan pin");
// do {
//   input = prompt()
//   input = Number(input)

//   switch(input) {
//     case 1:
//       console.log("cek saldo");
//       break
//     case 2:
//       console.log("tarik tunai");
//       break
//     case 3: 
//       console.log("transfer");
//       break
//   }

// } while (input != 0)