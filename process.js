var i = 0;
var images = [
    'img18.PNG', 'img19.PNG', 'img20.PNG', 'img21.PNG',
    'img22.PNG', 'img23.PNG', 'img24.PNG', 'img25.PNG',
    'img26.PNG', 'img27.PNG', 'img28.PNG', 'img29.PNG',
    'img30.PNG', 'img31.PNG', 'img32.PNG', 'img33.PNG',
    'img34.PNG'
];
var time = 3000;

function changeImg() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg;