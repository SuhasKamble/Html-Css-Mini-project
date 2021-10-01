const open = document.getElementById('open');
const close = document.getElementById('close');
const modalContainer = document.querySelector('.modal-container');

open.addEventListener("click",()=>{
    modalContainer.style.display = 'flex'
})

close.addEventListener("click",()=>{
    modalContainer.style.display = 'none'
})

