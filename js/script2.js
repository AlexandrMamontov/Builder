document.addEventListener("DOMContentLoaded", function () {
    // const cards = document.querySelectorAll(".sizes__item");
    const btnNext = document.querySelector(".builder__next");
    const btnPrev = document.querySelector(".builder__prev");
    const sizeCounts = document.querySelector(".sizes__count");
    const checkboxes = document.querySelectorAll('.builder__sizes input[type="checkbox"]');

    checkboxes.forEach((checkbox) => {
        const options = document.querySelector(".options");
        const optionsSizes = options.querySelectorAll(".sizes__option input");
        checkbox.addEventListener('change', () => {
            options.classList.toggle("options--active");
            const atLeastOneChecked = Array.from(checkboxes).some((checkbox) => checkbox.checked);
            if (atLeastOneChecked) {
                btnNext.classList.remove('builder__next--default');
            } else {
                btnNext.classList.add('builder__next--default');
            }
        });
        if (!checkbox.checked) {
            optionsSizes.forEach((optionsSize) => {
                optionsSize.checked = false;
            });
        }
    });




    btnNext.addEventListener("click", function () {
        sizeCounts.style.display = "none";
        btnPrev.classList.remove("builder__prev--default");
    });
})