const menu = document.querySelector('nav');
const adressBook = document.querySelector('#adress');
const allMenuItem = document.querySelectorAll('li');
const exitAdressBook = adressBook.firstElementChild;

const downloadDoc = document.querySelector('#document');
const exitDownloadDoc = downloadDoc.firstElementChild;
const page = document.querySelectorAll('body');
const navItem = document.querySelectorAll('.linkItem');

const hoverLink = document.querySelectorAll('.hoverEffect');

let changeColorBorderScroll = function(distance){

    for(let i=0;i<hoverLink.length;i++){
        if(distance >560){
            hoverLink[i].classList.add('invisible');
        }
        else{
            hoverLink[i].classList.remove('invisible'); 
        }
    }
}

let changeBackgroundColor = function(color,item) {
    let distance = window.scrollY - menu.clientHeight;

    if( distance > 560){
        changeColorBorderScroll(distance);
        item.style.backgroundColor = color;
        
    }
    else{
        changeColorBorderScroll(distance);
        item.style.backgroundColor = 'white';
        
    }
}

//                                 Function for event 2 last icon menu
let exitEventMenu = function(item,element){

    item.addEventListener('click',function(){ //Event pour quitter.
        animationExit.restart();
        element.classList.remove('active');
        element.classList.add('inactive');
    
    });
}

let preventClickMenu = function(element){

    if(element.className == "active"){
        element.classList.remove('active');     // permet d'enlever les document a DL si active
        element.classList.add('inactive');
        
    }
}
let eventClickMenu = function(item,element,prevent){

    item.firstElementChild.addEventListener('click',function(e){  //event pour l'apparition des coordonnée de contact.
    
    e.preventDefault();
    preventClickMenu(prevent);
   
    if(element.className =='inactive'){
        element.classList.remove('inactive');
        element.classList.add('active');
    }
    else{
        element.classList.remove('active');
        element.classList.add('inactive');
    }
    });

}
exitEventMenu(exitAdressBook,adressBook);
eventClickMenu(allMenuItem[7],adressBook,downloadDoc);

exitEventMenu(exitDownloadDoc,downloadDoc);
eventClickMenu(allMenuItem[8],downloadDoc,adressBook);

document.addEventListener('mouseover',function(e){      //change le background color de la navBar

    if(e.clientY <= menu.clientHeight){

        changeBackgroundColor('white',menu);
    }
    else if(e.clientY >menu.clientHeight){

        changeBackgroundColor('transparent',menu);
    } 
})

window.addEventListener('scroll',function(e){
    
    changeBackgroundColor('transparent',menu); //Permet de changer le background color de la navbar au scroll
});

const menuMobile = menu.firstElementChild.nextElementSibling;
const btnMobile = document.querySelector('#menu-mobile');
btnMobile.addEventListener('click',function(){

menuMobile.classList.toggle('active');
btnMobile.classList.toggle('active');
exitEventMenu(btnMobile,adressBook);
exitEventMenu(btnMobile,downloadDoc);
})


