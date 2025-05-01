
let homeCount =0 ;
let awayCount = 0;

function add1(){
    homeCount +=1;
    updateDisplay();

}

function add2(){
    homeCount +=2;
    updateDisplay();

}

function add3(){
    homeCount += 3;
    updateDisplay();
}


function awayAdd1(){
    awayCount +=1;
    updateDisplay2();

}

function awayAdd2(){
   awayCount +=2;
    updateDisplay2();

}

function awayAdd3(){
    awayCount += 3;
    updateDisplay2();
}

function updateDisplay (){
   document.getElementById("score").textContent=homeCount;
}

function updateDisplay2 (){
    document.getElementById("score2").textContent=awayCount;
}