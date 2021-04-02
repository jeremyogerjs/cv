const differentPage = document.querySelectorAll('.page');
const transition = document.querySelector('.transition');


window.onload = ()=>{

    transition.classList.remove('is-active');

    for(let i=0;i<differentPage.length;i++){

        let allPage = differentPage[i]; 

        allPage.addEventListener('click',function(e){

            e.preventDefault();
            let target = e.target.href;
            
            transition.classList.add('is-active');

            setTimeout(() => {
                window.location.href = target;
                transition.classList.remove('is-active')
            }, 500);
        })
    }
}


