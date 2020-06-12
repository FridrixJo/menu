let btn = document.querySelector('.menu-btn');
    block = document.querySelector('.menu-nav');
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.classList.toggle('menu-btn_active');
        block.classList.toggle('menu-nav__active');
    });