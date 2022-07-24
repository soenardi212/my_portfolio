//ucapan selamat
//alert('Selamat datang bos qu');

// navigasi
const menuToggle = document.querySelector('.menu-toggle input');

const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
  nav.classList.toggle('slide');
});

// project
let elemen = 
document.getElementsByTagName('h3');
document.getElementById('demo1').innerHTML= elemen[7].innerHTML;
document.getElementById('demo2').innerHTML= elemen[7].innerHTML;
document.getElementById('demo3').innerHTML= elemen[7].innerHTML;
document.getElementById('demo4').innerHTML= elemen[7].innerHTML;
document.getElementById('demo5').innerHTML= elemen[7].innerHTML;
