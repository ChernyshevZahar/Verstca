import vars from '../_vars';

if(document.querySelector('.catalog')){
    vars.$freeDeliveryBtn.addEventListener('click',(e)=>{
   
        e.currentTarget.closest('.free-delivery').style.display = 'none';
    })
}
