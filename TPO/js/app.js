window.addEventListener('DOMContentLoaded',()=> {
    const btn_menu = document.querySelector('.btn-menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const nav_items = document.querySelector('.nav-items')
            nav_items.classList.toggle('show')
        })
    }
})