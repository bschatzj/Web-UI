let i = 0;
let imageSlide2 = [];
const time = 4000;

imageSlide2[0] = "";
imageSlide2[1] = "";
imageSlide2[2] = "";

function changeImgTwo(){
    document.slideTwo.src = image[i];

    if(i < image.length - 1) {
        i++
    }
    else {
        i=0
    }
    setTimeout("changeImgTwo()", time);
}

window.onload = changeImgTwo;