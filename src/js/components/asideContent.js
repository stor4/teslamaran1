const content = document.querySelector('.content');
const titles = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
const asideMenu = document.querySelector('.aside__menu');

let i = 0;

titles.forEach(title => {
    title.id = `id_${i}`;
    asideMenu.innerHTML +=  `<li class="aside__item"><a href="#id_${i}" class="aside__item-link">${title.innerText}</a></li>`
    i++
})



