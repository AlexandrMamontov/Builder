document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".sizes__item");
    const btnNext = document.querySelector(".builder__next");
    const btnPrev = document.querySelector(".builder__prev");
    const sizeCounts = document.querySelector(".sizes__count");

    cards.forEach((card) => {
        const checkBox = card.querySelector(".sizes__checkbox");
        const options = card.querySelector(".sizes__options");
        const optionsSizes = options.querySelectorAll(".sizes__option input");

        checkBox.addEventListener("click", function () {
            options.classList.toggle("active");

            const anyBlockActive = Array.from(cards).some((card) =>
                card.querySelector(".sizes__checkbox").checked
            );

            if (anyBlockActive) {
                btnNext.classList.remove("builder__next--default");
            } else {
                btnNext.classList.add("builder__next--default");
            }

            if (!checkBox.checked) {
                optionsSizes.forEach((optionsSize) => {
                    optionsSize.checked = false;
                });
            }
        });
    });

    btnNext.addEventListener("click", function () {
        sizeCounts.style.display = "none";
        btnPrev.classList.remove("builder__prev--default");
    });


    const checkboxesBlock1 = document.querySelectorAll('.sizes__wrapper input[type="checkbox"]');
    const checkboxesBlock2 = document.querySelectorAll('.sizes__box input[type="checkbox"]');

    checkboxesBlock1.forEach(checkbox1 => {
        checkbox1.addEventListener('change', () => {
            const selectedValue = checkbox1.value;

            const matchingCheckbox = Array.from(checkboxesBlock2).find(checkbox2 => checkbox2.value === selectedValue);

            if (matchingCheckbox) {
                matchingCheckbox.checked = checkbox1.checked;
            }
        });
    });

    
    const checkboxes = document.querySelectorAll('.box__checkbox');
    const countSpan = document.querySelector('.sizes__count span');
    let checkedCount = 0;

    function updateCheckedCount() {
        checkedCount = 0;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                checkedCount++;
            }
        });
        countSpan.textContent = checkedCount;
    }

    updateCheckedCount();

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateCheckedCount);
    });
});
