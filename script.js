// Menu lateral
const btnMenu = document.getElementById("btn-menu");
const menuLateral = document.querySelector(".menu-lateral");
const overlay = document.getElementById("menu-overlay");
const btnClose = document.getElementById("btnClose");

function openMenu() {
    menuLateral.classList.add("active");
    overlay.classList.add("active");
}

function closeMenu() {
    menuLateral.classList.remove("active");
    overlay.classList.remove("active");
}

btnMenu.addEventListener("click", openMenu);
btnClose.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// Submenus
const submenuBtns = document.querySelectorAll(".submenu-btn");

submenuBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const menuItem = btn.parentElement;
        menuItem.classList.toggle("active");
    });
});

// Header sticky com mudança de cor
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

// Scroll suave para links âncora
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = link.getAttribute('href');
        if (href === '#') return;
        
        const el = document.querySelector(href);
        if(el) {
            const offsetTop = el.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        
        // Fecha o menu lateral se estiver aberto
        closeMenu();
    });
});