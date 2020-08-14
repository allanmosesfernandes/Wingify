const closeBtn = document.querySelector('.close-button');
const modal = document.querySelector('.modal');
const form = document.querySelector('#form');
const modalShow = document.querySelector('.modal.show-modal')

console.log(modalShow);
////======Modal Click Handlers=======/////
closeBtn.addEventListener('click', () => {
   modal.classList.remove('show-modal');
   document.cookie= 'modal-closed';

})

////=====Form Submission======////
form.addEventListener('submit', (e) => {
   e.preventDefault();
   const emailid = document.querySelector('#email').value;
   document.cookie= `${emailid}`;
   modal.classList.remove('show-modal');
})


/////=====Cookie BUsiness====///
if(document.cookie) {
   modal.style.display = 'none';
}

var today = new Date();
var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000);

function setCookie(name, id) {
   var element = document.getElementById(id);
   var elementValue = escape(element.value);

   document.cookie = name + "=" + elementValue + "; path=/; expires=" + expiry.toGMTString();
   console.log(document.cookie);
}


///=====Mobile Script for modal====///
function myFunction(x) {
   if (x.matches) { // If media query matches
      setTimeout(() => {
         modalShow.style.opacity = '1';
      }, 5000);
   }
 }
 
 var x = window.matchMedia("(max-width: 500px)")
 myFunction(x) // Call listener function at run time
 x.addListener(myFunction) // Attach listener function on state changes