document.addEventListener("DOMContentLoaded", function () {
  // Получаем элементы DOM
  var modal = document.getElementById("notificationModal");
  var btn = document.getElementById("notificationBtn");
  var closeBtn = document.querySelector(".close");

  // При клике на кнопку или изображение, открываем модульное окно
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // При клике на крестик, закрываем модульное окно
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // При клике вне модульного окна, закрываем его
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});
