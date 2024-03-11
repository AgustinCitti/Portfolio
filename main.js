








document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

var swiper = new Swiper(".swiper", {
effect: "cards",
grabCursor: true,
initialSlide: 2,
speed: 500,
loop: true,
rotate: true,
mousewheel: {
invert: false,
},
});




document.addEventListener("DOMContentLoaded", function() {
const elements = document.querySelectorAll('.slide-up-animation');

const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('active');
  } else {
    entry.target.classList.remove('active');
  }
});
}, {
threshold: 0.5
});

elements.forEach(element => {
observer.observe(element);
});
});





document.getElementById("btn1").addEventListener("click", function() {
    openImage("./assets/CERTIFICADOS/Certificado Desarrollo Web (Inglés).png");
});

document.getElementById("btn2").addEventListener("click", function() {
    openImage("./assets/CERTIFICADOS/Certificado Javascript (inglés).png");
});

document.getElementById("btn3").addEventListener("click", function() {
    openImage("./assets/CERTIFICADOS/Certificado React (inglés).png");
});

document.getElementById("btn4").addEventListener("click", function() {
    openImage("./assets/CERTIFICADOS/Certificado Backend (espanol).png");
});

function openImage(imageSrc) {
    var overlay = document.getElementById("overlay");
    var popupImg = document.getElementById("popupImg");
    popupImg.src = imageSrc;
    overlay.style.display = "block";
}

document.getElementById("overlay").addEventListener("click", function() {
    this.style.display = "none";
});
