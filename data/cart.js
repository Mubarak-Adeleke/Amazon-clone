import { updateTotalQuantity } from "../scripts/amazon.js";

export let cart = JSON.parse(localStorage.getItem('cart')) || [];


export function addToCart() {

  const addToCart = document.querySelectorAll('.js-add-to-cart-button');

  addToCart.forEach((button) => {
 
      button.addEventListener('click', () => {

        
       

  

     const selectElement = button.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
     const selectedOption = parseInt(selectElement.value);
     selectedElement();



    /*--------Update opacity on the page----------*/

    function generateOpacity() {
              
      const productAdd = button.previousElementSibling;
      console.log(productAdd);
  
      productAdd.classList.add('opacity')
  
      setTimeout(() => {
          productAdd.classList.remove('opacity');
      }, 2000);
    }

    generateOpacity();

  
    /*-------End of opacity Section----------*/


  
    let productId = button.id;

    const search = cart.find((product) => product.id === productId);

    if(search) {  
      search.quantity += selectedOption;        

    } else {
      cart.push({
        id: productId,
        quantity: selectedOption
    });                    
    }
    

    localStorage.setItem('cart', JSON.stringify(cart));


    console.log(cart);
    updateTotalQuantity();


   
  });
  });

}


 
function selectedElement() { 
  const selectElements = document.querySelectorAll('select');

       let totalSelectedOption = 0;
   
  selectElements.forEach((selectElement) => {
     const selectedOption = selectElement.value;

     totalSelectedOption += parseInt(selectedOption);

     //console.log(totalSelectedOption);

  });      
 };



