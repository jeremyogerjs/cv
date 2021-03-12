const menu = document.querySelector('nav');
const adressBook = document.querySelector('#adress');
const allMenuItem = document.querySelectorAll('li');
const exitAdressBook = adressBook.firstElementChild;

const downloadDoc = document.querySelector('#document');
const exitDownloadDoc = downloadDoc.firstElementChild;
const page = document.querySelectorAll('body')
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

navItem.forEach((link) =>{
    link.addEventListener('click',(e) => {
        e.preventDefault();

        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        const navHeight = menu.getBoundingClientRect().height;
        let position = element.offsetTop - navHeight;
        
               //element.classList.add('visible');  manque fonctionnalité/animation pour faire disparaitre les autres sections.
        
        
        window.scrollTo({
            left:0,
            top:position,
            
        })
    })
});



exitAdressBook.addEventListener('click',function(){ //Event pour quitter les coordonnée de contact.
    
    adressBook.classList.remove('active');
    adressBook.classList.add('inactive');
});

exitDownloadDoc.addEventListener('click',function(){ //Event pour quitter les coordonnée de contact.
    
    downloadDoc.classList.remove('active');
    downloadDoc.classList.add('inactive');
});

allMenuItem[7].firstElementChild.addEventListener('click',function(e){  //event pour l'apparition des coordonnée de contact.
    
    e.preventDefault();
    if(downloadDoc.className == "active"){
        downloadDoc.classList.remove('active');     // permet d'enlever les document a DL si active
        downloadDoc.classList.add('inactive');
    }

    if(adressBook.className =='inactive'){
        adressBook.classList.remove('inactive');
        adressBook.classList.add('active');
    }
    else{
        adressBook.classList.remove('active');
        adressBook.classList.add('inactive');
    }
});

allMenuItem[8].firstElementChild.addEventListener('click',function(e){  //event pour l'apparition des document a télécharger
    
    e.preventDefault();
    if(adressBook.className == "active"){
        adressBook.classList.remove('active');          // permet d'enlever les coordonnée de contact si active
        adressBook.classList.add('inactive');
    }

    if(downloadDoc.className =='inactive'){
        downloadDoc.classList.remove('inactive');
        downloadDoc.classList.add('active');
    }
    else{
        downloadDoc.classList.remove('active');
        downloadDoc.classList.add('inactive');
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
    
    
    changeBackgroundColor('transparent',menu);      //Permet de changer le background color de la navbar au scroll

   
   
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

