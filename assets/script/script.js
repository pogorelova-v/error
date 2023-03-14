let titleP = Array.from(document.querySelectorAll('.title_page'));
let errorP = Array.from(document.querySelectorAll('.error_page'));

titleP.forEach(el => {
    let ind = titleP.indexOf(el);
    el.addEventListener('click', () => {
        errorP[ind].classList.toggle('error_page-open');
    })
});