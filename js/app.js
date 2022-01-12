/*Selection de la fleche du carousel*/
var fleche1 = document.getElementById('arrowl');

if(fleche1){
    fleche1.addEventListener('mouseover', pointer1);
}

function pointer1() { 
    fleche1.src = "../image/arrow_left.png";
}

var fleche2 = document.getElementById('arrowr');

if(fleche2){
    fleche2.addEventListener('mouseover', pointer2);
}


function pointer2() {
    
    fleche2.src = "../image/arrow_right.png";
}

/*Deselection de la fleche du carousel*/

var fleche_out1 = document.getElementById('arrowl');

if(fleche_out1){
    fleche_out1.addEventListener('mouseout', pointer_out1);
}

function pointer_out1() {
        fleche_out1.src = "../image/arrow_left_black.png";
}

var fleche_out2 = document.getElementById('arrowr');

if(fleche_out2){
    fleche_out2.addEventListener('mouseout', pointer_out2);
}


function pointer_out2() {
        fleche_out2.src = "../image/arrow_right_black.png";
}

/* Next or previous */

var movie = document.getElementsByTagName('video')[0];

if(fleche1){
    fleche1.addEventListener('click', previous);
}

var state = 0;

function previous() {
    
    if(state == 0){
        state = 3;
        movie.src = "../image/video-fnatic3.mp4";
    }
    
    else if(state == 3){
        state -=1;
        movie.src = "../image/video-fnatic4.mp4";  
    }
    else if(state == 2){
        state -=1;
        movie.src = "../image/video-fnatic2.mp4";  
    }
    
    else if(state == 1){
        state -= 1;
        movie.src = "../image/video-fnatic.mp4";     
    }
}

var movie = document.getElementsByTagName('video')[0];

if(fleche2){
    fleche2.addEventListener('click', next);
}

function next() {    
    if(state == 0){
        state += 1;
        movie.src = "../image/video-fnatic2.mp4";   
    }     
    else if(state == 1){
        state +=1;
        movie.src = "../image/video-fnatic4.mp4";   
    }
    else if(state == 2){
        state +=1;
        movie.src = "../image/video-fnatic3.mp4"
    }    
    else if(state == 3){
        state = 0;
        movie.src = "../image/video-fnatic.mp4";   
    }     
}

    


    /* Animation square, image & line1 */

    var square = document.querySelectorAll('.square');
    var line1 = document.querySelector('.line-square1');
    var line2 = document.querySelector('.line-square2');
    var line3 = document.querySelector('.line-square3');
    var line4 = document.querySelector('.line-square4');

    var rightLine = document.querySelector('.right-line');
    var leftLine = document.querySelector('.left-line');
    var images = document.querySelectorAll('.image');


    function image_appeared(){
        
            for (i = 0; i < square.length; ++i) {
                if (square[i].classList.contains("rotate")){
                images[i].style.backgroundColor = "#79A7B9";
                images[i].style.color = "white";
                }
                else {
                    images[i].style.backgroundColor = "#8fbacc30"
                    images[i].style.color = "#8fbacc30";
                }
            }  

    }


    square[0].addEventListener("click", () => {

        square[0].classList.add("rotate");
        for (i = 1; i < 5; ++i) {
            square[i].classList.remove("rotate");
            }

        line1.style.width = "0%";
        image_appeared();

    });

    square[1].addEventListener("click", () => {
        
        square[1].classList.add("rotate");
        square[0].classList.add("rotate");
        for (i = 2; i < 5; ++i) {
        square[i].classList.remove("rotate");
        }
        line1.style.width = "20%";
        image_appeared();


    });

    square[2].addEventListener("click", () => {
        
        for (i = 0; i < 3; ++i) {
            square[i].classList.add("rotate");
            }
        for (i = 3; i < 5; ++i) {
            square[i].classList.remove("rotate");
            }

        line1.style.width = "40%";
        image_appeared();

    });

    square[3].addEventListener("click", () => {
     
        for (i = 0; i < 4; ++i) {
            square[i].classList.add("rotate");
            }
        for (i = 4; i < 5; ++i) {
            square[i].classList.remove("rotate");
            }

        line1.style.width = "60%";
        image_appeared();
        
    });

    square[4].addEventListener("click", () => {
     
        for (i = 0; i < 5; ++i) {
            square[i].classList.add("rotate");
            }

        line1.style.width = "80%";
        image_appeared();
        
    });


    /* Section 2*/

    square[5].addEventListener("click", () => {
        
        square[5].classList.add("rotate");

        for (i = 6; i < 9; ++i) {
            square[i].classList.remove("rotate");
            }

        line2.style.width = "0%";
        image_appeared();
        
    });

    square[6].addEventListener("click", () => {
        
        for (i = 5; i < 8; ++i) {
            square[i].classList.add("rotate");
            }
        for (i = 7; i < 9; ++i) {
            square[i].classList.remove("rotate");
            }
        line2.style.width = "25%";
        image_appeared();
        
    });

    square[7].addEventListener("click", () => {
        
        for (i = 6; i < 8; ++i) {
            square[i].classList.add("rotate");
            }
            square[8].classList.remove("rotate");

        line2.style.width = "50%";
        image_appeared();
        
    });

    square[8].addEventListener("click", () => {
        
        for (i = 6; i < 9; ++i) {
            square[i].classList.add("rotate");
            }
        line2.style.width = "75%";
        image_appeared();
        
    });

    /* Section 3 */

    square[9].addEventListener("click", () => {
        
        square[9].classList.add("rotate");

        for (i = 10; i < 13; ++i) {
            square[i].classList.remove("rotate");
            }

        line3.style.width = "0%";
        image_appeared();
        
    });
    square[10].addEventListener("click", () => {
        
        for (i = 9; i < 11; ++i) {
            square[i].classList.add("rotate");
            }
        for (i = 11; i < 13; ++i) {
            square[i].classList.remove("rotate");
            }
        line3.style.width = "25%";
        image_appeared();
        
    });
    square[11].addEventListener("click", () => {
        
        for (i = 9; i < 12; ++i) {
            square[i].classList.add("rotate");
            }
        for (i = 12; i < 13; ++i) {
            square[i].classList.remove("rotate");
            }
        line3.style.width = "50%";
        image_appeared();
        
    });
    square[12].addEventListener("click", () => {
        
        for (i = 9; i < 13; ++i) {
            square[i].classList.add("rotate");
            }
        line3.style.width = "75%";
        image_appeared();
        
    });

    /* Section 4 */

    square[13].addEventListener("click", () => {
        
        square[13].classList.add("rotate");

        for (i = 14; i < square.length; ++i) {
            square[i].classList.remove("rotate");
            }

        line4.style.width = "0%";
        image_appeared();
        
    });
    square[14].addEventListener("click", () => {
        
        for (i = 13; i < 15; ++i) {
            square[i].classList.add("rotate");
            }
        for (i = 15; i < square.length; ++i) {
            square[i].classList.remove("rotate");
            }
        line4.style.width = "25%";
        image_appeared();
        
    });
    square[15].addEventListener("click", () => {
        
        for (i = 13; i < 16; ++i) {
            square[i].classList.add("rotate");
            }
        for (i = 16; i < square.length; ++i) {
            square[i].classList.remove("rotate");
            }
        line4.style.width = "50%";
        image_appeared();
        
    });
    square[16].addEventListener("click", () => {
        
        for (i = 13; i < square.length; ++i) {
            square[i].classList.add("rotate");
            }
        line4.style.width = "75%";
        image_appeared();
        
    });