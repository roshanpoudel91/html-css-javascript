
let mybutton = document.getElementById("myBtn");
console.log(window);
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton[0].style.display = "block";
//   } else {
//     mybutton[0].style.display = "none";
//   }

  // The button
        var btnTop = document.querySelector('#myBtn');
        // Reveal the button
        var btnReveal = function () { 
            var position = document.querySelector('#position');
                position.innerHTML = window.scrollY + 'px';
            if (window.scrollY >= 300) {
            btnTop.classList.add('is-visible');
            } else {
            btnTop.classList.remove('is-visible');
            }    
        }  
        // Smooth scroll top
        // Thanks to => http://stackoverflow.com/a/22610562
        var TopscrollTo = function () {
            if(window.scrollY!=0) {
            setTimeout(function() {
                window.scrollTo(0,window.scrollY-30);
                TopscrollTo();
            }, 5);
            }
        }
        // Listeners
        window.addEventListener('scroll', btnReveal);
        btnTop.addEventListener('click', TopscrollTo);  

}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

