console.log("This is the practice on the loops");



// let a = 1;
// console.log(a);
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

for (let i = 0; i <= 100; i++) {
  console.log(i);
}


let o = {
  name: "Aadil",
  role: "programmer and ui/ux designer",
  company: "Awesome Intelligence",
};


for (const key in o) {
  const element = o[key];
  console.log(key, element);
}
// this upper one is the forin loop




for (const a of "Awesome Intelligence") {
  console.log(a);
}
// this upper one is the foroff loop used for iterations




// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }




let b = 11;
do {
  console.log(b);
} while (b < 10);
