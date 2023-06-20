var i = 0;
var images = [
    'img1.PNG', 'img2.PNG', 'img3.PNG', 'img4.JPG',
    'img5.JPG', 'img6.JPG', 'img7.JPG', 'img8.JPG',
    'img9.JPG', 'img10.JPG', 'img11.JPG', 'img12.JPG',
    'img13.JPG', 'img14.JPG', 'img15.JPG', 'img16.JPG',
    'img17.JPG'
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