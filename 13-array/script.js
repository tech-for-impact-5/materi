let orang = ["Jalil", "Ariel", "Virna", "Alex"];

console.log(orang[2]);

orang.push("Alzi");
console.log(orang);

orang.pop();
console.log(orang);

orang.shift();
console.log(orang);

orang.unshift("Adam");
console.log(orang);

orang.splice(2, 0, "hery", "ihsan");
console.log(orang);

// ===================== Loop ======================
for (let i = 0; i < orang.length; i++) {
  console.log(orang[i]);
}

console.log("============for of==========");
for (item of orang) {
  console.log(item);
}

console.log("============for in==========");
for (i in orang) {
  console.log(orang[i]);
}

console.log("======== forEach ========");
// orang.forEach(function () {})
orang.forEach((item, index) => {
  console.log(index, item);
});

let newOrangFE = [];
orang.forEach((item) => {
  let text = "FS KM5 - " + item;
  newOrangFE.push(text);
});
console.log(newOrangFE);

console.log("======== map ========");
orang.map((item, index) => {
  console.log(index, item);
});

// melakukan loop pada array
// ada return data array dgn jlh data yg sama
// utk manipulasi tiap item pada array
let newOrang = orang.map((item) => {
  return "FS KM5 - " + item;
});

console.log(newOrang);

let orangImpostor = orang.map((item) => {
  if (item == "Adam") {
    return item + " - Impostor";
  }
  return item;
});

console.log(orangImpostor);

// ==================== filter ==============
console.log("=========== fiter ===========");
let orangWithA = orang.filter((item) => {
  if (item[0] == "A") {
    return item;
  }
});

// short syntax
// let OrangWithA = orang.filter(orang => orang[0] === "A");

console.log(orangWithA);

// ================ multi dimension array ================
let matrix = [
  ["Willy", "Rangga", 89],
  ["Bagas", "Viki"],
  [true, false],
  [["hallo", "tes"]],
  [{ nama: "Terra" }, { nama: "Alpha" }],
];

console.log(matrix[0][1]);
console.log(matrix[3][0][1]);
console.log(matrix[4][1].nama);

let matrix2 = [
  [2, 5],
  [6, 4],
];

console.log(matrix2[0][1]);

let person = {
  name: "Adam",
  makanan: ["ayam", "mie"],
};

let buah = ["Semangka", "Jeruk", "Lemon", "Nanas", "Apel"];
let duaD = [
  ["kalimantan"],
  ["padang"], 
  [1],
  [true], 
  ["pintu"],
  ["rumah"], 
  [buah],
];

console.log(duaD[6][0][1]);