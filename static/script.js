

const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    let dts = elem.getAttribute('data-dots');
    let mrk = elem.getAttribute('data-percent');
    let prt = Math.floor(dts * mrk / 100);
    let points = "";
    let rotate = 360 / dts;

    for (let i = 0; i < dts; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;
    const pointMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < prt; i++) {
        pointMarked[i].classList.add('mrk');
    }
})


let menult = document.querySelectorAll('header nav a');
let section = document.querySelectorAll('section');

// function activeMenu() {
//     let len = section.length;
//     while (--len && window.scrollY + 97 < section[len].offsetTop) {}
//     menult.forEach(sec => sec.classList.remove('active'));
//     menult[len].classList.add('active');
// }
// activeMenu();
// window.addEventListener('DOMContentLoaded', activeMenu);
function activeMenu() {
    path = location.pathname
     menult.forEach(sec => {
        sec.classList.remove('active')
        if("/"+sec.innerHTML.toLowerCase()== path){
            sec.classList.add('active')
        }
    });
    if(path=='/')menult[0].classList.add('active')
}
activeMenu();
window.addEventListener('DOMContentLoaded', activeMenu)
// toggle Menu Icon navbar------------------------------
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let menu = menuIcon.getElementsByTagName('i');
menuIcon.onclick = () => {
    menu[0].classList.toggle("fa-x");
    menu[0].classList.toggle("fa-bars");
    navbar.classList.toggle("open");
};

function toggle_nav() {
    if (window.innerWidth < 768) {
        let navbar = document.querySelector(".navbar");
        menu[0].classList.toggle("fa-x");
        menu[0].classList.toggle("fa-bars");
        navbar.classList.toggle("open");
    }
}





var mixer = mixitup('.port-gallery');
