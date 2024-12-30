import { products } from "../data/products.js";
let cart = JSON.parse(localStorage.getItem('cart'));

let trackedProduct = JSON.parse(localStorage.getItem('cartItem'));


console.log(trackedProduct);

let productsOrdered = cart.map((cartItem) => {

  const search =  products.find((product) => product.id === cartItem.id);
  if(search){
   return {
   
       id: search.id,
       name: search.name,
       image: search.image,
       price: ((search.priceCents) / 100).toFixed(2),
       quantity: cartItem.quantity,
       totalPrice: (cartItem.quantity * (search.priceCents) / 100).toFixed(2)
   }
  }
});

let totalQuantity = 0;

productsOrdered.forEach((item) => {

  totalQuantity += item.quantity;


  document.querySelector('.js-cart').innerHTML = totalQuantity;
 
});


function generateTrackedProduct() {
  const productInfo = document.querySelector('.product-info');

  productInfo.innerHTML = `${trackedProduct.name}`

  const productImage = document.querySelector('.product-image');

  productImage.src = `${trackedProduct.image}`

  const productQuantity = document.querySelector('.product-quantity');

  productQuantity.innerHTML = `Quantity: ${trackedProduct.quantity}`
}

generateTrackedProduct();

