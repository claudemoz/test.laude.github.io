let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

if(toggle){
    toggle.addEventListener('click', ()=>{
        body.classList.toggle("active")
    })
}
