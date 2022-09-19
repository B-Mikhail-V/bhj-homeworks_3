const btn1 = Array.from(document.querySelectorAll('.dropdown__value'))
const lst1 = Array.from(document.querySelectorAll('.dropdown__list'))
const items = Array.from(document.querySelectorAll('.dropdown__item'))


function onClick1(e) {
    e.target.nextElementSibling.classList.toggle('dropdown__list_active');
}

function onClick2(e2) {
    let el2 = e2.target
    console.log(el2);
}

btn1.forEach(element => {
    element.addEventListener('click', onClick1)
});

items.forEach(element => {
    console.log(element);
    element.addEventListener('click', onClick2)
})

