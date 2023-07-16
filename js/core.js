/** Преобразование по клику на телефонах: scale(0.9); статус использования; */

window.onload = function() {
  if(/iP(hone|ad)/.test(window.navigator.userAgent)) {
    document.body.addEventListener('touchstart', function() {}, false);
  }
}
