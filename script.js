const btnMenu = document.getElementById("btn-menu");
const nav = document.getElementById("nav");
const overlay = document.getElementById("menu-overlay");
const closeBtn = document.getElementById("close-menu");

function openMenu() {
    nav.classList.add("show");
    overlay.classList.add("show");
}

function closeMenu() {
    nav.classList.remove("show");
    overlay.classList.remove("show");
}
const submenuBtns = document.querySelectorAll(".submenu-btn");

submenuBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const submenu = btn.nextElementSibling;
        submenu.classList.toggle("open");
    });
});

btnMenu.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

    document.querySelectorAll('a[hrefˆ="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const el= document.querySelector(link.getAttribute('href'));
            if(el) {
                window.scrollTo({
                    top: el.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
            nav.classList.remove('open');
        });
    });