// Получаем все чекбоксы из карточек
const cardCheckboxes = document.querySelectorAll('.sizes__checkbox');
// Получаем все блоки с радиокнопками из карточек
const cardRadioBlocks = document.querySelectorAll('.sizes__options');
// Получаем все чекбоксы из нижнего блока
const bottomCheckboxes = document.querySelectorAll('.box__checkbox');

// Добавляем обработчики событий для чекбоксов из карточек
cardCheckboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
        // Отобразить блок с радиокнопками в соответствующей карточке
        cardRadioBlocks[index].classList.toggle('options--active', checkbox.checked);
        
        // Найти и отметить чекбокс из нижнего блока с соответствующим data-атрибутом
        const matchingBottomCheckbox = document.querySelector(`.box__checkbox[data-length="${checkbox.dataset.length}"][data-width="${checkbox.dataset.width}"]`);
        if (matchingBottomCheckbox) {
            matchingBottomCheckbox.checked = checkbox.checked;
        }
    });
});

// Добавляем обработчики событий для чекбоксов из нижнего блока
bottomCheckboxes.forEach(bottomCheckbox => {
    bottomCheckbox.addEventListener('change', () => {
        // Найти и отметить чекбокс из карточки с соответствующим data-атрибутом
        const matchingCardCheckbox = document.querySelector(`.sizes__checkbox[data-length="${bottomCheckbox.dataset.length}"][data-width="${bottomCheckbox.dataset.width}"]`);
        if (matchingCardCheckbox) {
            matchingCardCheckbox.checked = bottomCheckbox.checked;
            
            // Отобразить блок с радиокнопками в соответствующей карточке
            const index = Array.from(cardCheckboxes).indexOf(matchingCardCheckbox);
            cardRadioBlocks[index].classList.toggle('options--active', bottomCheckbox.checked);
        }
    });
});

// Добавляем обработчики событий для радиокнопок в sizes__options
const cardRadioOptions = document.querySelectorAll('.sizes__option input[type="radio"]');
cardRadioOptions.forEach(radio => {
    radio.addEventListener('change', () => {
        const selectedValue = radio.dataset.value;
        const parent = radio.closest('.sizes__wrapper');
        const parentCard = parent.querySelector('.sizes__checkbox');
        const cardWidth = parseInt(parentCard.dataset.width);
        const cardLength = parseInt(parentCard.dataset.length);
        const totalWidth = parseInt(selectedValue) + cardWidth;
        const totalLength = parseInt(selectedValue) + cardLength;

        // Найти и отобразить активный чекбокс из нижнего блока
        const matchingBottomCheckbox = document.querySelector(`.box__checkbox[data-width="${totalWidth}"][data-length="${totalLength}"]`);
        if (matchingBottomCheckbox) {
            matchingBottomCheckbox.checked = true;
        }
    });
});