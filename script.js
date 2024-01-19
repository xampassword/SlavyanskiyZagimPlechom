// Получаем элементы кнопки и модального окна
var loginButton = document.getElementById("loginButton");
var loginModal = document.getElementById("loginModal");
var closeButton = document.getElementById("closeButton");
var loginForm = document.getElementById("loginForm");
var registerForm = document.getElementById("registerForm");
var toggleFormButton = document.getElementById("toggleForm");

// При нажатии на кнопку "ВОЙТИ", открываем модальное окно
loginButton.addEventListener("click", function () {
  loginModal.style.display = "block";
});

// При нажатии на кнопку закрытия, скрываем модальное окно
closeButton.addEventListener("click", function () {
  loginModal.style.display = "none";
});

// Закрытие модального окна при клике вне его области
window.addEventListener("click", function (event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
});

// При нажатии на кнопку "Регистрация", переключаем формы
toggleFormButton.addEventListener("click", function () {
  if (registerForm.style.display === "none") {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    toggleFormButton.textContent = "Вход";
  } else {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    toggleFormButton.textContent = "Регистрация";
  }
});
