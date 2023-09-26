// ========= Condional ============
// if
// switch
// ternary operator

// when?
// ketika kita ketemu dgn sebuah pilihan

// jika saya lapar, maka saya makan

// if (condition) {
//   // eksekusi
// }

let lapar = true;

if (lapar) {
  console.log("makan");
} else {
  console.log("jgn makan");
}

// jika hijau, maka jalan
// jika kuning, maka hati2
// jika merah, maka berhenti

let lampu = prompt();
lampu = lampu.toLowerCase();

let jalananSepi = true;

if (lampu == "hijau") {
  console.log("gassss");
} else if (lampu == "kuning") {
  console.log("hati-hati");
} else if (lampu == "merah") {
  console.log("berhenti");

  if (jalananSepi) {
    console.log("cek jalan dulu \ngas pollll");
  }
} else {
  console.log("lampu rusak bos");
  console.log("jalan pelan-pelan");
}

// switch
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



