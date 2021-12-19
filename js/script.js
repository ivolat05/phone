
function recipe() {
    let recipe = document.querySelector('.recipe');
    recipe.style.opacity = '1';
    recipe.style.zIndex = '3';
    let recipeContainerBottom = document.querySelector('.recipe__container-bottom');
    recipeContainerBottom.classList.add('recipe__container-bottom-active')
}


setTimeout(recipe, 100);
function recipeNoneActive() {
    let recipeNone = document.querySelectorAll('.recipe__none');
    let recipeContainer = document.querySelectorAll('.recipe__container');
    for (let i = 0; i < recipeContainer.length; i++) {
        recipeContainer[i].style.background = '#337993';

    }

    for (let i = 0; i < recipeNone.length; i++) {
        recipeNone[i].classList.add('recipe-active');

    }

    function recipeNoneActive() {
        let recipeNone = document.querySelectorAll('.recipe__none');
        for (let i = 0; i < recipeNone.length; i++) {
            recipeNone[i].style.zIndex = '1';

        }
    }


    setTimeout(recipeNoneActive, 2000);
}



setTimeout(recipeNoneActive, 2000);
let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelectorAll('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.recipe__container'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup');

openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона


        let recipeInner = document.querySelector('.recipe__inner');
        recipeInner.style.opacity = '0';
        let activeBtn = button;
        let activeId = activeBtn.getAttribute('data-tab');
        let activeTab = document.querySelector(activeId);

        activeTab.classList.add('actives');
        document.querySelector('.actives .video__block').classList.add('video__block-active');
        document.querySelector('.actives .video___inner-vidio').classList.add('video__play');

        function playBlock() {

            document.querySelector('.video__block-active').style.opacity = '0';
            document.querySelector('.video__play').play();
            document.querySelector('.video__play').muted = false;
            this.muted = false;

        }




        setTimeout(playBlock, 1500);

    })
});

closePopupButton.addEventListener('click', () => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона

    let recipeInner = document.querySelector('.recipe__inner');
    recipeInner.style.opacity = '1';

    document.querySelector('.video__play').pause();



    document.querySelector('.video__play').currentTime = 0;
    document.querySelector('.actives .video___inner-vidio').classList.remove('video__play');
    document.querySelector('.video__block-active').style.opacity = '1';
    document.querySelector('.actives .video__block').classList.remove('video__block-active');
    for (let i = 0; i < popup.length; i++) {
        popup[i].classList.remove('actives'); // И с окна

    }





});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if (e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона

        let recipeInner = document.querySelector('.recipe__inner');
        recipeInner.style.opacity = '1';
        document.querySelector('.video__play').pause();
        document.querySelector('.video__play').currentTime = 100;
        document.querySelector('.actives .video___inner-vidio').classList.remove('video__play');
        document.querySelector('.video__block-active').style.opacity = '1';
        document.querySelector('.actives .video__block').classList.remove('video__block-active');
        for (let i = 0; i < popup.length; i++) {
            popup[i].classList.remove('actives'); // И с окна // И с окна

        }





    }
});