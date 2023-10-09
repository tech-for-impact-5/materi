console.log("A");
console.log("B");
console.log("C");


// =================== Callback ===============
// console.log("============ callback ===========");

// console.log("A");

// setTimeout(() => {
//   console.log("B1");
// }, 2000)

// setTimeout(() => {
//   console.log("B2");
// }, 1000)


// console.log("C");

// =================== promise ===============
console.log("============ promise ===========");

// function nonton(condition) {
//   return new Promise((resolve, reject) => {
//     if (condition) {
//       setTimeout(() => {
//         resolve("terpenuhi")
//       }, 1000)
//     } else {
//       reject("dibatalkan")
//     }
//   })
// }

// console.log("A");
// console.log("B");

console.log(nonton(true));
nonton(false)
.then((result) => {
  console.log(result);
  return result + "👍"
})
.then((result) => {
  console.log(result);
})
.catch((err) => {
  console.log(err);
})

// console.log("C");



// =================== async await ===============
console.log("============ async await ===========");

function nonton(condition) {
  return new Promise((resolve, reject) => {
    if (condition) {
      setTimeout(() => {
        resolve("terpenuhi")
      }, 1000)
    } else {
      reject("dibatalkan")
    }
  })
}

console.log("A");
console.log("B");

async function belajarAsyncAwait() {
  try {
    let result = await nonton(true)
    console.log(result);
    return result
  } catch (error) {
    console.log(error);
  }
}

belajarAsyncAwait()

console.log("C");
