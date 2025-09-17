console.log("\n>>>>>>|| Shopping Cart Calculator ||<<<<<<");

{
  function shopping_Cart(price, quantity) {
    // let quantity = 0;
    // let Sub_total = 0;
    const tax_rate = 0.05; //this is in the %

    let process_items = [];

    for (let i = 0; i < Cart.length; i++) {
      let Sub_total = Cart[i].price * Cart[i].quantity;
      let tax = Sub_total * tax_rate;
      let final_total = Sub_total + tax;

      process_items.push({
        Cart,
        Price: Cart[i].price,
        Quantity: Cart[i].quantity,
        Sub_total: Sub_total,
        tax_rate: tax_rate,
        Tax: tax,
        Final_total: final_total,
      });
    }
    return process_items;
  }

  let Cart = [
    { price: 23.5569, quantity: 5 },
    { price: 19.3354, quantity: 3 },
  ];

  let output = shopping_Cart(Cart);

  for (let j = 0; j < output.length; j++) {
    let Output = output[j];

    console.log(`\nThe item # ${j + 1} is`);

    console.log(`The price of the item is: $${Output.Price.toFixed(2)}`);

    console.log(`The quantity for the product is: ${Output.Quantity}`);

    console.log(`The tax rate is: $${Output.tax_rate}`);

    console.log(
      `The total tax on the ${Output.Quantity} items is: $${Output.Tax.toFixed(
        2
      )}`
    );

    console.log(
      `The price of this product excluding the tax is: $${Output.Sub_total.toFixed(
        2
      )}`
    );

    console.log(
      `The price of the product including the tax is: $${Output.Final_total.toFixed(
        2
      )}`
    );
  }
}
