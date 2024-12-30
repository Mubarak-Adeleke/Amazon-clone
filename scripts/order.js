import { products } from "../data/products.js";



const cart = JSON.parse(localStorage.getItem('cart')) || [];

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



const orderGrid = document.querySelector('.js-order-grid');
const price = document.querySelector('.price');


let shoppingHTML = '';
let totalPrice = 0;
let totalQuantity = 0;

productsOrdered.forEach((item) => {

  totalQuantity += item.quantity;


  document.querySelector('.js-cart').innerHTML = totalQuantity;

function generatePrice() {

  shoppingHTML += `
 
  <div class="product-image-container">
  <img src= ${item.image}>
</div>

<div class="product-details">
  <div class="product-name">
    ${item.name}
  </div>
  <div class="product-delivery-date">
    Arriving on: August 19
  </div>
  <div class="product-quantity">
    Quantity: ${item.quantity}
  </div>
  <button class="buy-again-button button-primary">
    <img class="buy-again-icon" src="images/icons/buy-again.png">
    <a href="checkout.html" style="text-decoration: none;color: black"><span class="buy-again-message">Buy it again</span></a>
  </button>
</div>

<div class="product-actions">
  <a href="tracking.html">
    <button class="track-package-button button-secondary" id=${item.id}>
      Track package
    </button>
  </a>
</div>
  `

  totalPrice += parseInt(item.totalPrice);

  const shippingPrice = 4.99;
  const totalBeforeTax = shippingPrice + totalPrice;

  const taxRate = 0.10;
  const taxAmount = (totalPrice + shippingPrice) * taxRate;
  const totalAmount = totalPrice + shippingPrice + taxAmount;

   
    orderGrid.innerHTML = shoppingHTML;
    price.innerHTML = `$${totalAmount.toFixed(2)}`;

}
generatePrice();
});




const trackPackageBtns = document.querySelectorAll('.track-package-button');



 trackPackageBtns.forEach((button) => {
     button.addEventListener('click', (e) => {

      e.preventDefault();
       let productId = button.id;


      let productSearch = () => {
        cart.find((cartItem) => {

          let search = products.find((product) => product.id === productId);

          let trackedPackage;

          if(search) {
            trackedPackage = {
            id: search.id,
            name: search.name,
            image: search.image,
            price: ((search.priceCents) / 100).toFixed(2),
            quantity: cartItem.quantity,
            totalPrice: (cartItem.quantity * (search.priceCents) / 100).toFixed(2)
          }    

            return localStorage.setItem('cartItem',JSON.stringify(trackedPackage));

          }
        });
      };
      productSearch();

      window.location.href = 'tracking.html';
  
     });
  });





//let productSearch = () => {
 // cart.find((cartItem) => {
 
   // let search = products.find((product) => product.id = )

 // });
//};
