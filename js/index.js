'use-strict';

// navbar toggle 클릭하면 메뉴오픈
const navbarToggleBtn = document.querySelector('.navbar_toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// 메뉴클릭 스크롤처리
const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove('open');

  // console.log(event.target.dataset.link);
  scrollIntoView(link);
});
// $('.navbar_menu_item').click(function(){
//   $('html, body').animate({
//     scrollTop: $( $(this).attr('href')).offset().top
//   }, 500);
// });


// contact me 클릭하면 contact 섹션 이동
const homeContactBtn = document.querySelector('.home_contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

// arrow-up 나오는 시점
const arrowUp = document.querySelector('.arrow-up');
const home = document.querySelector('.home_container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

// 슬라이드 해서 skill section 도달했을때 animation 실행
const skillSet = document.querySelector('.skillset');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    skillSet.classList.add('slide');
  }
})

// arrow-up 클릭하면 위로
arrowUp.addEventListener('click', () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
});


// 공통 스크롤 함수
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}



