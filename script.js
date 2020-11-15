function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  })
}
var PopUp = document.getElementsByClassName('popup');
var PopUpAct = document.getElementById('popUpper');
var MainBut = document.getElementById('MainBut');
var ProductBut = document.getElementById('ProductBut');
var AboutBut = document.getElementById('AboutBut');
var ContactBut = document.getElementById('ContactBut');
var Main = document.querySelector('#Main');
var Product = document.querySelector('#products');
var About = document.querySelector('#About');
var Contact = document.querySelector('#footer');

MainBut.addEventListener('click', () => {
  scrollTo(Main);
})
ProductBut.addEventListener('click', () => {
  scrollTo(Product);
})

AboutBut.addEventListener('click', () => {
  scrollTo(About);
})

ContactBut.addEventListener('click', () => {
  scrollTo(Contact);
})
PopUpAct.addEventListener('click', () => {
  PopUp.classList.add("active");
})
