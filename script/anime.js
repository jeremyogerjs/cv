const prenom = document.querySelector('#prenom');

const letterPrenom = document.querySelectorAll('.letterName');



anime({
    targets: '.letterName',
    opacity: 1,
    translateX: anime.stagger(5, {grid: [10, 1], from: 'start', axis: 'x'}),
    delay: anime.stagger(100,{start:700}) // increase delay by 100ms for each elements.
});


const animationClick = 

    anime({
        targets: '.letterName',
        rotate: "1turn",
        autoplay:false,
        delay: anime.stagger(50),// increase delay by 50ms for each elements.
    });

    const animationExit = 

    anime({
        targets: '.exit',
        rotate: '1turn',
        autoplay: false,
    })
prenom.addEventListener('click',(e)=>{
     
    animationClick.restart();
})


