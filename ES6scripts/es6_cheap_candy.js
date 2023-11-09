let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Sour Patch Kids", price: 3.00},
    {product: "Hershey's Bar", price: 2.75},
    {product: "Jolly Rancher", price: 2.59},
    {product: "Twizzlers", price: 1.49},
    {product: "Heath", price: 2.79},
    {product: "Gummy Bears", price: 5.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
   ];

   //Which candies cost less than $4.00?
  products = products.filter((product) => product.price < 4);
  
  console.log("products lower than $4.00:");
  products.forEach(product => {
    console.log(`${product.product}: $${product.price.toFixed(2)}`); 
  });
   
   //Which candies has "M&M" in its name?
   let mmCandies = products.filter(product => product.product.includes("M&M"));

   console.log("Candies with 'M&M' in the name:");
   mmCandies.forEach(candy => {
       console.log(`${candy.product}: $${candy.price.toFixed(2)}`);
   });


   //Do we carry "Swedish Fish"?