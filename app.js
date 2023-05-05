const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
// function checkClass() {
//     var bar = document.getElementById("navbar");
//     const close = document.getElementById('close');
//     if (bar.classList.add("active")) {

//     } else {
        
//     }
//   }
if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        console.log(nav);
  
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
  
    })
}