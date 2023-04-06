// window.onscroll = function() {
//   var scrolled = window.pageYOffset || document.documentElement.scrollTop; // Получаем положение скролла
//   if(scrolled !== 0){
//     // Если прокрутка есть, то делаем блок прозрачным
//     document.querySelector('.header').style.opacity = '0.9';
//   }else{
//     // Если нет, то делаем его полностью видимым
//     document.querySelector('.header').style.opacity = '1';
    
//   };
// };

 window.onscroll = () => {
  

const header = document.querySelector('header');
const Y = window.scrollY;

if (Y > 100) {
  header.classList.add('header-opacity');
}
else if (Y < 100) {
    header.classList.remove('header-opacity');

  }
}