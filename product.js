const buttons = document.querySelectorAll('.add-to-cart');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Add the product to the cart or perform other actions here
    console.log('Product added to cart!');
  });
});
const button = document.querySelector('.add-to-cart');

button.addEventListener('click', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the cart data from localStorage, or initialize an empty cart
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Add the current product to the cart
  const product = {
    name: 'Product Name',
    price: 20,
    image: 'product.jpg',
    quantity: 1
  };
  
  // Check if the product is already in the cart
  const existingProduct = cart.find(item => item.name === product.name);
  
  if (existingProduct) {
    // Increment the quantity of the existing product
    existingProduct.quantity++;
  } else {
    // Add the new product to the cart
    cart.push(product);
  }
  
  // Save the updated cart data to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  
  // Alert the user that the product was added to the cart
  alert('Product added to cart!');
});