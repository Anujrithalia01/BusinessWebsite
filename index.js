let splash = document.querySelector('.splash');
let header = document.querySelector('.splash-header');
let logo = document.querySelectorAll('.logo');
let ScrollTo;

window.addEventListener('DOMContentLoaded', ()=>{

setTimeout(()=>{

  
    logo.forEach((span , idx)=>{

        setTimeout(()=>{

            span.classList.add('active');

        },(idx + 1)*400)

    });

    setTimeout(()=>{

        logo.forEach((span , idx)=>{

            setTimeout(()=>{
    
                span.classList.remove('active');
                span.classList.add('fade');
    
            }, (idx + 1)*50)
        });    

    }, 2000)
    
    setTimeout(()=>{
        splash.style.top = '-100vh';
    },2900)

})

})

// function scrollToSection(ScrollTo) {
//     document.getElementById(ScrollTo).scrollIntoView({ behavior: 'smooth' });
// }

function scrollToSection(ScrollTo) {

    const element = document.getElementById(ScrollTo);

    const navbarHeight = window.innerHeight * 0.15; // Assuming your navbar height is 15vh

    // Calculate the position to scroll to, accounting for the navbar height
    //window.scrollY is the length how much the document is already scrolled and element.getBoundingClientRect().top is the distance from the top of the element to the top of the viewport 
    const offsetPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;

    // Smooth scroll to the adjusted position
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}