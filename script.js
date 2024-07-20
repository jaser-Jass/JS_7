// 1. Сообщение при прогрузке всех тегов
document.addEventListener("DOMContentLoaded", function() {
    console.log("все теги прогрузились");
});

// 2. Сообщение при загрузке всех ресурсов страницы
window.addEventListener("load", function() {
    console.log("страница загрузилась");
});

// 3. Делегирование кликов на весь документ
document.addEventListener("click", function(event) {
    const element = event.target;
    const tagName = element.tagName.toLowerCase();
    if (element.classList.contains("super_element")) {
        console.log(`Класс "super_element" присутствует в элементе "${tagName}".`);
    } else {
        console.log(`Класс "super_element" отсутствует в элементе "${tagName}".`);
    }
});

// 4. Наведение на textarea
const textarea = document.querySelector("textarea");
textarea.addEventListener("mouseenter", function() {
    console.log("Вы навели на textarea.");
});

// 5. Обработчик клика на ul
const ul = document.querySelector("ul");
ul.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        console.log(event.target.innerText);
    }
});

// 6. Объяснение порядка вывода сообщений
// При клике на кнопку в ul, срабатывает сначала обработчик события на ul, который выводит текст кнопки,
// затем срабатывает обработчик клика на document, который определяет класс элемента. 
// Это происходит потому, что сначала событие будет передано вниз (всплытие события) от кнопки к ul,
// а затем будет проверяться, были ли еще обработчики на родительских элементах.
