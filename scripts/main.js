let mattiaImg = document.querySelector('img')

mattiaImg.onclick = function() {
    let mattiaSrc = mattiaImg.getAttribute('src');
    if(mattiaSrc == 'images/mattia_papa-profilo.jpeg') {
        mattiaImg.setAttribute('src','images/mattia_papa-black_tshirt.jpg');
    } else {
        mattiaImg.setAttribute('src','images/mattia_papa-profilo.jpeg');
    }
}
