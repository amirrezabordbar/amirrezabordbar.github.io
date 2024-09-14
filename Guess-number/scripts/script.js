"use strict";
let secretNumber = Number((Math.random() * 19 + 1).toFixed(0));
let score = 20;
let highscore = 0;

// این فانکشن برای جلوگیری از تکرار بین از حد کد است(صرفا جهت تست و یادگیری!)

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message
}

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value)

    // وقتی عددی وارد نمی‌شود
    if (guess < 1 || guess > 20) {

        // document.querySelector(".message").textContent = "⛔ Between 1 and 20";
        displayMessage("⛔ Between 1 and 20");

        // وقتی عدد حدس زده شده درست است
    } else if (guess === secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "🎉 Correct Number!"
            document.querySelector("body").style.backgroundColor = "#60b347"
            document.querySelector(".number").style.width = "100%"
            document.querySelector(".number").textContent = secretNumber
        }

        // برای ثبت بالاترین امتیاز
        if (highscore < score) {
            highscore = score
            document.querySelector(".highscore").textContent = score
        }
        // وقتی که عدد حدس زده شده با عدد مقصود برابر نیست
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = guess > secretNumber ? "📈 Too high!" : "📉 Too low!"
            score--
            document.querySelector(".score").textContent = score

            // وقتی که باختی
        } else {
            document.querySelector(".message").textContent = "💥 You lost the game"
            document.querySelector(".score").textContent = 0
            document.querySelector("body").style.backgroundColor = "#840d0d"
        }
    }

})

// برای ایجاد بازی جدید(بازی مجدد)
document.querySelector(".again").addEventListener("click", function () {
    secretNumber = Number((Math.random() * 19 + 1).toFixed(0));
    score = 20
    document.querySelector(".score").textContent = score
    document.querySelector(".message").textContent = "Start guessing..."
    document.querySelector(".number").textContent = "?"
    document.querySelector("body").style.backgroundColor = "#222"
    document.querySelector(".number").style.width = "15rem"
    document.querySelector(".guess").value = ""

})