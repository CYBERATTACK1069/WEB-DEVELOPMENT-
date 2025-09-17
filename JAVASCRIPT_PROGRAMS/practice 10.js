// console.log(
//   "This is the practice no 10 programme based upon the certain codes\n"
// );
console.log(
  "This is the program based upon the topic Shopping Cart Total Calculator"
);

{
  function ShoppingCart(price, items) {
    let subtotal = 0;
    let tax_rate = 0.07;
    for (let i = 0; i < Cart.length; i++) {
      subtotal += Cart[i].price * Cart[i].items;
      // let Name = Cart[i].P_name;
    }
    let tax = subtotal * tax_rate;
    let final_total = subtotal + tax;

    return {
      Name: Cart.P_name,
      subtotal: subtotal.toFixed(2),
      // tax: tax.toFixed(2),
      tax_rate: tax_rate.toFixed(2),
      //   final_total: final_total.toFixed(2),
      T_Price: final_total.toFixed(2),
      // items: items,
      Cart: Cart,
      // price: price.toFixed(2),
    };
  } 
  
  let Cart = [
    { P_name: "Face Wash", price: 13.85, items: 4 },
    { P_name: "Soap", price: 4.8545, items: 2 },
  ];

  let receipt = ShoppingCart(Cart);

  for (let i = 0; i < receipt.Cart.length; i++) {
    console.log("\nItem", i + 1, "#");

    console.log("The name of the item is:", receipt.Cart[i].P_name);
    console.log("The quantity of the item is:", receipt.Cart[i].items);
    console.log(
      "The total tax for the",
      receipt.Cart[i].items,
      "item(s) is:",
      receipt.Cart[i].tax
    );
    console.log(
      "The price of this 1 item is:",
      receipt.Cart[i].price.toFixed(2)
    );
    console.log(
      "The price for the",
      receipt.Cart[i].items,
      "item(s)",
      "without the tax is:",
      receipt.Cart[i].price.toFixed(2)
    );
    console.log(
      "The price for the",
      receipt.Cart[i].items,
      "item(s)",
      "including the tax is:",
      receipt.Cart[i].price.toFixed(2)
    );
    // subtotal = receipt.Cart[i].price * receipt.Cart[i].items;
  }
  console.log("The Sub-Total is:", receipt.subtotal);
}
