const BTN_HAPINESS = document.getElementById("btn-hapiness");
const BTN_SADNESS = document.getElementById("btn-sadness");
const IMG = document.querySelector(".img");


// 1. Подія для кнопки "Позбутися депресії" (btn-hapiness)
document.getElementById("btn-hapiness").addEventListener("click", function () {
    // Показуємо картинку (змінюємо CSS display з none на inline)
    IMG.style.display = "block";

    // Вимикаємо цю кнопку (щоб не можна було натиснути ще раз)
    BTN_HAPINESS.disabled = true;

    // Вмикаємо кнопку "Поринути в депресію"
    BTN_SADNESS.disabled = false;
});

// 2. Подія для кнопки "Поринути в депресію" (btn-sadness)
document.getElementById("btn-sadness").addEventListener("click", function () {
    // Ховаємо картинку
    IMG.style.display = "none";

    // Вмикаємо кнопку щастя
    BTN_HAPINESS.disabled = false;

    // Вимикаємо цю кнопку
    BTN_SADNESS.disabled = true;
});