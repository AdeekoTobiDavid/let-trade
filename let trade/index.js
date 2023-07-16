
     
const sideMenu = document.querySelector("aside");
const menuBtc =document.querySelector("#menu-btn");
const closeBtc =document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");


//show sidebar
menuBtc.addEventListener('click', () => {
     sideMenu.style.display ='block';
})
//close sidebar 
closeBtc.addEventListener('click', () => {
     sideMenu.style.display ='none';
}) 
//change theme 
themeToggler.addEventListener('click', () => {
     document.body.classList.toggle('dark-theme-variable');

      themeToggler.querySelector('span:nth-toggler-child(1)').classList.toggle('active');
      themeToggler.querySelector('span:nth-toggler-child(2)').classList.toggle('active');

}) 

//fill orders in table
Orders.forEach(order => {
     const tr = document.createElement('tr');
     const trContent = ` 
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping ===
                       'Declined' ? 'danger' : order.
                       shipping === 'pending' ? 'warning'
                       : 'primary'}">${order.shipping}</td>
                       <td class="primary">Details</td> 
                       ` ;
tr.innerHTML = trContent;
document.querySelector('table tbody').appendChild(tr);
                           


})


 