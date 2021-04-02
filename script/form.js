const menu = document.querySelector('nav');
const menuMobile = menu.firstElementChild.nextElementSibling;
const btnMobile = document.querySelector('#menu-mobile');
const input = document.getElementsByTagName('input');
    console.log(input)
document.getElementById('submit').addEventListener('click',(e)=>{
    e.preventDefault();
    alert("Le formulaire est en cours de développement \nMerci de votre comprehension");
    document.getElementById('message').value = '';
    
    for(let i =0;i<input.length-1;i++){
        
        input[i].value = "";
    }
    
})
btnMobile.addEventListener('click',function(){

    menuMobile.classList.toggle('active');
    btnMobile.classList.toggle('active');
})