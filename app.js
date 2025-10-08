let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let level = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

btn1.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Начать тест начального уровня");
        level = "beginner";
        tg.MainButton.show();
    }
});

btn2.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Начать тест среднего уровня");
        level = "intermediate";
        tg.MainButton.show();
    }
});

btn3.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Начать тест продвинутого уровня");
        level = "advanced";
        tg.MainButton.show();
    }
});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(level);
});
