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

    var rightLine = document.querySelector('.right-line');
    var leftLine = document.querySelector('.left-line');
    var images = document.querySelectorAll('.image');


    function image_appeared(){
        
            for (i = 0; i < square.length; ++i) {
                if (square[i].classList.contains("rotate")){
                images[i].style.backgroundColor = "#79A7B9"
                }
                else {
                    images[i].style.backgroundColor = "#8fbacc30"
                }
            }  

    }



    square[0].addEventListener("click", () => {

        square[0].classList.add("rotate");
        for (i = 1; i < square.length; ++i) {
            square[i].classList.remove("rotate");
            }

        line1.style.width = "0%";
        line2.style.width = "0%";
        line3.style.width = "0%";
        image_appeared();

    });

    square[1].addEventListener("click", () => {
        
        square[1].classList.add("rotate");
        square[0].classList.add("rotate");
        for (i = 2; i < square.length; ++i) {
        square[i].classList.remove("rotate");
        }
        line1.style.width = "25%";
        line2.style.width = "0%";
        line3.style.width = "0%";
        image_appeared();


    });

    square[2].addEventListener("click", () => {
        
        for (i = 0; i < 3; ++i) {
            square[i].classList.add("rotate");
            }
        for (i = 3; i < square.length; ++i) {
            square[i].classList.remove("rotate");
            }

        line1.style.width = "50%";
        line2.style.width = "0%";
        line3.style.width = "0%";
        image_appeared();

    });

    square[3].addEventListener("click", () => {
     
        for (i = 0; i < 4; ++i) {
            square[i].classList.add("rotate");
            }
        for (i = 4; i < square.length; ++i) {
            square[i].classList.remove("rotate");
            }

        line1.style.width = "75%";
        line2.style.width = "0%";
        line3.style.width = "0%";
        image_appeared();
        
    });


    /* Section 2*/

    square[4].addEventListener("click", () => {
        
        for (i = 0; i < 5; ++i) {
            square[i].classList.add("rotate");
            }
        for (i = 5; i < square.length; ++i) {
            square[i].classList.remove("rotate");
            }

        line1.style.width = "75%";
        line2.style.width = "0%";
        line3.style.width = "0%";
        image_appeared();
        
    });

    square[5].addEventListener("click", () => {
        
        for (i = 0; i < 6; ++i) {
            square[i].classList.add("rotate");
            }
        for (i = 6; i < square.length; ++i) {
            square[i].classList.remove("rotate");
            }
        line1.style.width = "75%";
        line2.style.width = "25%";
        line3.style.width = "0%";
        image_appeared();
        
    });

    square[6].addEventListener("click", () => {
        
        for (i = 0; i < 7; ++i) {
            square[i].classList.add("rotate");
            }
        for (i = 7; i < square.length; ++i) {
            square[i].classList.remove("rotate");
            }
        line1.style.width = "75%";
        line2.style.width = "50%";
        line3.style.width = "0%";
        image_appeared();
        
    });

    square[7].addEventListener("click", () => {
        
        for (i = 0; i < 8; ++i) {
            square[i].classList.add("rotate");
            }
        for (i = 8; i < square.length; ++i) {
            square[i].classList.remove("rotate");
            }
        line1.style.width = "75%";
        line2.style.width = "75%";
        line3.style.width = "0%";
        image_appeared();
        
    });

    /* Section 3 */

    square[8].addEventListener("click", () => {
        
        for (i = 0; i < 9; ++i) {
            square[i].classList.add("rotate");
            }
        for (i = 9; i < square.length; ++i) {
            square[i].classList.remove("rotate");
            }

        line1.style.width = "75%";
        line2.style.width = "75%";
        line3.style.width = "0%";
        image_appeared();
        
    });
    square[9].addEventListener("click", () => {
        
        for (i = 0; i < 10; ++i) {
            square[i].classList.add("rotate");
            }
        for (i = 10; i < square.length; ++i) {
            square[i].classList.remove("rotate");
            }

        line1.style.width = "75%";
        line2.style.width = "75%";
        line3.style.width = "25%";
        image_appeared();
        
    });
    square[10].addEventListener("click", () => {
        
        for (i = 0; i < 11; ++i) {
            square[i].classList.add("rotate");
            }
        for (i = 11; i < square.length; ++i) {
            square[i].classList.remove("rotate");
            }

        line1.style.width = "75%";
        line2.style.width = "75%";
        line3.style.width = "50%";
        image_appeared();
        
    });
    square[11].addEventListener("click", () => {
        
        for (i = 0; i < 12; ++i) {
            square[i].classList.add("rotate");
            }
        for (i = 12; i < square.length; ++i) {
            square[i].classList.remove("rotate");
            }
        line1.style.width = "75%";
        line2.style.width = "75%";
        line3.style.width = "75%";
        image_appeared();
        
    });