import { products} from "../data/products.js";

import { addToCart } from "../data/cart.js";



import { cart } from "../data/cart.js";

   function generateProductOnHtml(){
       
   let pageProduct = '';

   products.forEach((product) => {

    let html = `
    <div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
    ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars * 10}.png">
      <div class="product-rating-count link-primary">
       ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      $${((product.priceCents) / 100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select class="select-element" id="select-${product.id}">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-to-cart-button" id="${product.id}">
      Add to Cart
    </button>
  </div>
   `   
   pageProduct += html;

   });
  
   document.querySelector('.products-grid').innerHTML = pageProduct;

   //console.log(pageProduct);
   
   }

   generateProductOnHtml();
   addToCart();


  
  /*--------Function to update the total Quantity-------*/

  export function updateTotalQuantity() {

    let totalQuantity = 0;
    
    cart.forEach((cartItem) => {
      totalQuantity += cartItem.quantity; 
    });

      document.querySelector('.js-cart-quantity').innerHTML = totalQuantity;
  }
      updateTotalQuantity();