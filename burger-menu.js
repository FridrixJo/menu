let btn = document.querySelector('.menu-btn');
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.classList.toggle('menu-btn_active');
    })