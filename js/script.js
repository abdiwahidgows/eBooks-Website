// Add custom JavaScript here
function userscroll(){
    const navbar = document.querySelector('.navbar');


    // windows 
    // makr aa dhaqaad oo xoogaa aad scroll yara samamyso , inaad ku xaka mayso inuu soobaxo
    window.addEventListener('scroll',()=>{
    
        if(window.scrollY > 50){
            navbar.classList.add('bg-dark');
            navbar.classList.add('navbar-sticky');
            
        }
        else{
            
            navbar.classList.remove('bg-dark');
            navbar.classList.remove('navbar-sticky');
        }
    })
}
document.addEventListener('DOMContentLoaded',userscroll);