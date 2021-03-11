const menu = document.querySelector('nav');
const adressBook = document.querySelector('#adress');
const allMenuItem = document.querySelectorAll('li');
const exitAdressBook = adressBook.firstElementChild;
const page = document.querySelectorAll('body')
const navItem = document.querySelectorAll('.linkItem');



navItem.forEach((link) =>{
    link.addEventListener('click',(e) => {
        e.preventDefault();

        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        const navHeight = menu.getBoundingClientRect().height;
        let position = element.offsetTop - navHeight;
        
        element.classList.add('visible');
        
        
        window.scrollTo({
            left:0,
            top:position,
            
        })
    })
});

let changeBackgroundColor = function(color,item) {
    let distance = window.scrollY - menu.clientHeight;
    if( distance > 560){

        item.style.backgroundColor = color;
        
    }
    else{
        item.style.backgroundColor = 'white';
    }

}

exitAdressBook.addEventListener('click',function(){ //Event pour quitter les coordonnée de contact.
    
    adressBook.classList.remove('active');
    adressBook.classList.add('inactive');
});

allMenuItem[7].firstElementChild.addEventListener('click',function(e){  //event pour l'apparition des coordonnée de contact.
    
    e.preventDefault();
    

    if(adressBook.className =='inactive'){
        adressBook.classList.remove('inactive');
        adressBook.classList.add('active');
    }
    else{
        adressBook.classList.remove('active');
        adressBook.classList.add('inactive');
    }
});


document.addEventListener('mouseover',function(e){      //change le background color de la navBar

    if(e.clientY <= menu.clientHeight){
        changeBackgroundColor('white',menu);
    }
    else if(e.clientY >menu.clientHeight){
        changeBackgroundColor('transparent',menu);
    } 
})


window.addEventListener('scroll',function(e){
    
    
    changeBackgroundColor('transparent',menu);      //Permet de cchanger le background color de la navbar au scroll

   
   
});


    /*
    let distance = window.scrollY - menu.clientHeight;
    if(distance >558){
        for(let i=0;i<allMenuItem.length;i++){
            allMenuItem[i].style.margin = '0 11px';  
        }
        if(distance >883){
            for(let i=0;i<allMenuItem.length;i++){
                allMenuItem[i].style.margin = '0 15px';  
            }
            if(distance>1057){
                
                for(let i=2;i<allMenuItem.length;i++){
                    allMenuItem[i].style.margin = '0 6px';
                }
                if(distance>1120){
                    allMenuItem[1].style.marginRight = '220px';
                }
                
                if(distance>1522){
                    allMenuItem[1].style.marginRight = '13px'; 
                    for(let i=2;i<allMenuItem.length;i++){
                        allMenuItem[i].style.margin = '0 13px';
                    }
                    
                }
                if(distance >1751){
                    for(let i=4;i<allMenuItem.length;i++){
                        allMenuItem[i].style.margin = '0 8px';
                    }
                }
                if(distance >1851){
                    allMenuItem[3].style.marginRight = '40em';
                }
                if(distance >2350){

                    allMenuItem[3].style.marginRight = '15px';
                    for(let i=4;i<allMenuItem.length;i++){
                        allMenuItem[i].style.margin = '0 15px';
                    }
                }
                if(distance>2570){
                    
                    for(let i=4;i<allMenuItem.length;i++){
                        allMenuItem[i].style.margin = '0 8px';
                    }
                    allMenuItem[3].style.marginRight = '40em';
                }
                if(distance>2956){
                    allMenuItem[3].style.marginRight = '15px';

                    for(let i=4;i<allMenuItem.length;i++){
                        allMenuItem[i].style.margin = '0 15px';
                    }
                }
                
            }
        }
    }
    
    
    else{
        for(let i=0;i<allMenuItem.length;i++){
            allMenuItem[i].style.margin = '0 15px';
        }
    }
})
*/

