// массив вкладок
const tabs = Array.from(document.querySelectorAll('.tab'));
// console.log(tabs);

// находим индекс активной вкладки
function indexActiveTab() {
  return tabs.findIndex(tab => tab.classList.contains('tab_active'));
}
// console.log(indexActiveTab());

// массив контента
const content = Array.from(document.querySelectorAll('.tab__content'));
console.log(content);

// активация вкладки по индексу вкладки
function tabActivate(index) {
    tabs[index].classList.add('tab_active');
}

// деактивация всех вкладки
function tabDeactivate() {
    tabs.forEach(element => {
        element.classList.remove('tab_active');

    })
    
}


// активация контента по индексу вкладки
function contentActivate(index) {
    content[index].classList.add('tab__content_active');
}

// деактивация контента по индексу вкладки
function contentDeactivate() {
    content.forEach(element => {
        element.classList.remove('tab__content_active');

    })
    
}


// обработка события
tabs.forEach(element => {
    element.addEventListener('click', () => {
        // console.log("active before " & indexActiveTab());

        tabDeactivate();
        contentDeactivate();
        const indexClicked = tabs.indexOf(element);

        console.log(indexClicked);
        
        tabActivate(indexClicked);
        contentActivate(indexClicked);

    })
});