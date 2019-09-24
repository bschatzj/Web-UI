let i = 0;
let image = [];
const time = 4000;

image[0] = "jonatan-lewczuk-hN7jhC_YWk0-unsplash.jpg";
image[1] = "brian-mann-aXqlZFeVFrU-unsplash.jpg";
image[2] = "david-clode-cLxtrm17490-unsplash.jpg";

function changeImg(){
    document.slideThree.src = image[i];

    if(i < image.length - 1) {
        i++
    }
    else {
        i=0
    }
    setTimeout("changeImg()", time);
}




let imgCounterTwo = 0;
let imageTwo = [];
const timeTwo = 4000;

imageTwo[0] = "martin-jernberg-Kb3qUk64Y3I-unsplash.jpg";
imageTwo[1] = "luke-stackpoole-5Qqkjn4PFPA-unsplash.jpg";
imageTwo[2] = "jon-flobrant-ljKaPW3hFZA-unsplash.jpg"
 
function changeImgTwo(){
    document.slideTwo.src = imageTwo[imgCounterTwo]
    if(imgCounterTwo < imageTwo.length -1) {
        imgCounterTwo++;
    }
    else {
        imgCounterTwo = 0;
    }
    setTimeout("changeImgTwo()", timeTwo);
}

let imgCounterOne = 0;
let imageOne = [];
const timeOne = 4000;

imageOne[0] = "nick-dietrich-V_u_AcU1LnA-unsplash.jpg";
imageOne[1] = "quinn-nietfeld-JtLk5eVLuHE-unsplash.jpg";
imageOne[2] = "stephane-paul-jozhb0Pub98-unsplash.jpg";
 
function changeImgOne(){
    document.slideOne.src = imageOne[imgCounterTwo]
    
    imageCounterTwo = Math.random() * (2 - 0) + 0;
    
    
    // if(imgCounterOne < imageOne.length -1) {
    //     imgCounterOne++;
    // }
    // else {
    //     imgCounterOne = 0;
    // }
    setTimeout("changeImgOne()", timeOne);
}






function start() {
    changeImgTwo();
    changeImg();
    changeImgOne();
}
window.onload = start();

