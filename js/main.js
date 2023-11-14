// Получаем нужный элемент
var elementImg = document.querySelector('.site-header__img img');
var elementBlq = document.querySelector('.site-header__img blockquote');

var Visible = function (target) {
  // Все позиции элемента
  var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if ((targetPosition.bottom - windowPosition.bottom < 250) && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    // targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    // targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    // Если элемент полностью видно, то запускаем следующий код
    elementImg.classList.remove('blind-img')
    elementBlq.classList.remove('blink-blockquote')
    elementImg.classList.add('blind-img')
    elementBlq.classList.add('blink-blockquote')
  } else {
    // Если элемент не видно, то запускаем этот код
    console.clear();
  };
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
  Visible (elementImg);
//   Visible (elementBlq);
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible (elementImg);
// Visible (elementBlq);