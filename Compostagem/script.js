const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 60)
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

let mais = document.querySelectorAll('.mais');
for (let i = 0; i<mais.length; i++){
   mais[i].addEventListener('click', function(){
      mais[i].parentNode.classList.toggle('active')
   })
}

const btn = document.querySelector('.btn-mais');

const text = document.querySelector('.card_readmore');

const cardInfo = document.querySelector('.card-info');

cardInfo
    .addEventListener('click', e => {

        const current = e.target;

        const isReadMoreBtn = current.calssName.includes('btn-mais');

        if (!isReadMoreBtn)
            return;

        const currentText = e.target.parentNode.querySelector('.card_readmore');

        currentText.classList.toggle('card_readmore--open');

        current.textContent = current.textContent.includes('Leia Mais...') ? 'Leia Menos...' : 'Leia mais...';

    });