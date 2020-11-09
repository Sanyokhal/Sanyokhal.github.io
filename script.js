window.onscroll = function showHeader() {
    var header = document.querySelector('.first-part__menu');
    var cont = document.querySelector('.first-part__content');
    if(window.pageYOffset > 400){
        header.classList.add('active');
        cont.classList.add('move');
    } else{
        header.classList.remove('active');
        cont.classList.remove('move');
    }
}
