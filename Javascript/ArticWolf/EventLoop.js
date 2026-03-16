console.log(1);
const promise = new Promise((resolve) => {
  console.log(2);
  resolve();
  console.log(3);
});
console.log(4);
promise.then(() => console.log(5)).then(() => console.log(6));
console.log(7);
setTimeout(() => console.log(8), 10);
setTimeout(() => console.log(9), 0);

// output
// 1
// 2
// 3
// 4
// 7
// 5
// 6
// 9
// 8

// var vs let in loops

for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0);
}

for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0);
}

// output
// 5
// 5
// 5
// 5
// 5

// 0
// 1
// 2
// 3
// 4
