const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnIcon = document.querySelector('.mnav__close-btn-icon')

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click', ()=> {
  const isNavClosed = mobileNav.classList.contains(navClosedClass);
  // if (mobileNav.classList.contains(navClosedClass)) {
    // mobileNav.classList.toggle(navOpenedClass);
    
    // closeBtnIcon.classList.toggle(arrowLeftClass);
    // closeBtnIcon.classList.toggle(arrowRightClass);
    mobileNav.classList.toggle(navClosedClass, !isNavClosed);
    mobileNav.classList.toggle(navOpenedClass, isNavClosed);
  
    closeBtnIcon.classList.toggle(arrowRightClass, isNavClosed);
    closeBtnIcon.classList.toggle(arrowLeftClass, !isNavClosed);

});