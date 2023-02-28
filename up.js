var images = ['images/img.png','images/img1.png','images/img2.png','images/img3.png','images/img4.png'];
var i = 0;
function slideshow(){
    document.getElementById("image").src=images[i];

    if(i<images.length-1){
        i++;
    }
    else{
        i=0;
    }
setTimeout("slideshow()", 2000);

}


var images1 = ['images/dictionary.png','images/dictionary1.png','images/dictionary2.png','images/dictionary3.png','images/dictionary4.png'];
var j = 0;
function slideshow1(){
    document.getElementById("image1").src=images1[j];

    if(j<images1.length-1){
        j++;
    }
    else{
        j=0;
    }
setTimeout("slideshow1()", 2000);

}

var images2 = ['images/cricket (1).png','images/cricket (2).png','images/cricket (3).png','images/cricket (4).png','images/cricket (5).png'];
var k = 0;
function slideshow2(){
    document.getElementById("image2").src=images2[k];

    if(k<images2.length-1){
        k++;
    }
    else{
        k=0;
    }
setTimeout("slideshow2()", 2000);

}

var images3 = ['images/farm (1).png','images/farm (2).png','images/farm (3).png','images/farm (4).png','images/farm (5).png'];
var l = 0;
function slideshow3(){
    document.getElementById("image3").src=images3[l];

    if(l<images3.length-1){
        l++;
    }
    else{
        l=0;
    }
setTimeout("slideshow3()", 2000);

}


window.onload = function () {
    slideshow();
    slideshow1();
    slideshow2();
    slideshow3();
};

