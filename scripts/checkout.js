import { products } from "../data/products.js";

let shoppingCart = document.querySelector('.order-summary');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

 const cartItemWithDetail = cart.map((cartItem) => {
    const search = products.find((product) => product.id === cartItem.id)

    if(search) {
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


 cartItemWithDetail.forEach((item) => {

  //console.log(item);

  shoppingCart.innerHTML += `

    <div class="cart-item-container" id=${item.id}>
  <div class="delivery-date">
    Delivery date: Tuesday, June 21
  </div>

  <div class="cart-item-details-grid">
    <img class="product-image"
      src=${item.image}>

    <div class="cart-item-details">
      <div class="product-name">
        ${item.name}
      </div>
      <div class="product-price">
        $${item.price}
      </div>
      <div class="product-quantity">
        <span>
          Quantity: <span class="quantity-label">${item.quantity}</span>
        </span>

        <div class="price" style="padding: 4px 0 7px 0 ">Total price: $${item.totalPrice}</div>
         <span class="update-quantity-link link-primary update">
          Update
         </span>
        <span class="delete-quantity-link link-primary delete" id=${item.id}>
          Delete
        </span>
      </div>
    </div>
  </div>
</div>  
  `
 });


 const updateBtn = document.querySelectorAll('.update');
  updateBtn.forEach((button) => {
    button.addEventListener('click', () => {
     
      alert('Update from the home page by clicking ADD TO CART BUTTON-- THIS ADDS MORE PRODUCT TO THE CART');
      generatePrice(totalMoney);
  
    });
      
   });


  let totalMoney = 0;
  cartItemWithDetail.forEach((item) => {
  totalMoney += parseInt(item.totalPrice);

  
});



function generatePrice(totalMoney) {
  const totalPrice  = totalMoney;
  const shippingPrice = 4.99;
  const totalBeforeTax = shippingPrice + totalPrice;
  const taxRate = 0.10;
  const taxAmount = (totalPrice + shippingPrice) * taxRate;
  const totalAmount = totalPrice + shippingPrice + taxAmount;

  const priceSummary = `

  <div class="payment-summary-title">
  Order Summary
</div>

<div class="payment-summary-row">
  <div>Items:</div>
  <div class="payment-summary-money js-total-money">$${totalPrice.toFixed(2)}</div>
</div>

<div class="payment-summary-row">
  <div>Shipping &amp; handling:</div>
  <div class="payment-summary-money shipping">$${shippingPrice}</div>
</div>

<div class="payment-summary-row subtotal-row">
  <div>Total before tax:</div>
  <div class="payment-summary-money subtotal-price">$${totalBeforeTax.toFixed(2)}</div>
</div>

<div class="payment-summary-row">
  <div>Estimated tax (10%):</div>
  <div class="payment-summary-money tax">$${(taxAmount).toFixed(2)}</div>
</div>

<div class="payment-summary-row total-row">
  <div>Order total:</div>
  <div class="payment-summary-money total">$${totalAmount.toFixed(2)}</div>
</div>

<a href="orders.html"><button class="place-order-button button-primary">
 Place your order
</button></a>
</div>
    `

    document.querySelector('.payment-summary').innerHTML = priceSummary; 


}
generatePrice(totalMoney);


const deleteBtn = document.querySelectorAll('.delete');

deleteBtn.forEach((link) => {
  link.addEventListener('click', () => {
    let  productId = link.id;
      
    cart = cart.filter((cartItem) => cartItem.id !== productId);
    
    localStorage.setItem('cart', JSON.stringify(cart));

    generatePrice(totalMoney);
        
    document.getElementById(productId).remove();

    confirm(`Are you sure you want to remove product from the cart? if yes, 
Make your you refresh the page to view your new total expenses!!!`)
  });
   
});









