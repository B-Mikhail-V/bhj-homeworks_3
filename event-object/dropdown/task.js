const btn1 = Array.from(document.querySelectorAll('.dropdown__value'))
const lst1 = document.querySelector('.dropdown__list')
const items = Array.from(document.querySelectorAll('.dropdown__item'))

console.log(btn1);

function onClick1() {
    lst1.classList.toggle('dropdown__list_active');
    // console.log('OK');
}
    

for(let i = 0; i < btn1.length; i++) {
    btn1[i].addEventListener('click', onClick1)
    console.log(btn1[i].textContent);
}




// function onClick2(i) {
//     btn1.textContent = item[i].textContent;

// }


// for(let i = 0; i < items.length; i++) {

//     items[i].addEventListener("click", onClick2);
//     }


