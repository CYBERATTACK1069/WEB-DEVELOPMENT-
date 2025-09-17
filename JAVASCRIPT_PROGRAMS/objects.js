let product = {
  _name: "t-shirt",
  brand: "J.",
  "shirt-size": "XXl", //if there is a middle slsh(hiphen) in the name it must be written in the double quotes

  size: "l",
};
// console.log(` ${typeof product}`);
// console.log(product);
// console.log(product._name);
// console.log(product.brand);
// console.log(product["shirt-size"]);
// product["shirt-size"] = "banana";
// console.log(product["shirt-size"]);
// console.log(product);

// console.log(product["_name"]);
// console.log(product._name);

// let pro_name = product.brand;
let prop_name = "brand";

console.log(product.pro_name); //it is searching if any pro name exist in the object product or not
// the correct method is given below
console.log(product[prop_name]);

//we can also delete an entity.
// we can delete anything in the product by dot notation or bracket notation
delete product["shirt-size"];
console.log(product);
