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
