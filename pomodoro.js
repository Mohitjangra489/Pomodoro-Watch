var start = document.getElementById("start");
var reset = document.getElementById("reset");
var left = document.getElementById("left");
var right = document.getElementById("right");
var sbtn1 = document.getElementById("sbtn1");
var sbtn2 = document.getElementById("sbtn2");
var bbtn1 = document.getElementById("bbtn1");
var bbtn2 = document.getElementById("bbtn2");
var time = document.getElementById("time");
var outercolour = document.getElementById("outerring");
var wm = document.getElementById("wm");
var ws = document.getElementById("ws");
var sbtn1 = document.getElementById("sbtn1");
var sbtn2 = document.getElementById("sbtn2");
var bbtn1 = document.getElementById("bbtn1");
var bbtn2 = document.getElementById("bbtn2");
console.log(ws.innerText);
console.log(wm.innerText);

let pause = false;
let index = 0;
let index2 = 0;
let starter = 1;
let workmin = index;
let breakmin = index2;
let starttimer = undefined;


start.addEventListener("click", function () {


    if (starttimer === undefined && index != 0 && index2 != 0) {
        sbtn1.disabled = true;
        sbtn2.disabled = true;
        bbtn1.disabled = true;
        bbtn2.disabled = true;
        start.innerText = "pause";
        pause = true;
        starttimer = setInterval(timer, 1000);
    }
    else if (index == 0 || index2 == 0) {
        alert("set both session time and break time");
    }
    else {
        alert("paused");
false

}
});


sbtn1.addEventListener("click", function () {
    if (index === 0) {
        return;
    }
    else if (index > 0 && index <= 10) {
        left.innerText = `0${--index}: min`;
    }
    else {
        left.innerText = `${--index}: min`;
    }
    workmin = index;
    console.log(workmin);

});

sbtn2.addEventListener("click", function () {
    if (index < 9 && index >= 0) {
        left.innerHTML = `0${++index}: min`;
    }
    else {
        left.innerHTML = `${++index}: min`;
    }

    workmin = index;
    console.log(workmin);

});

bbtn1.addEventListener("click", function () {
    if (index2 === 0) {
        return;
    }
    if (index2 > 0 && index2 <= 10) {
        right.innerText = `0${--index2}: min`;
    }
    else {
        right.innerText = `${--index2}: min`;
    }
    // console.log(index2);
    breakmin = index2;
    console.log(breakmin);

});

bbtn2.addEventListener("click", function () {
    if (index2 < 9 && index2 >= 0) {
        right.innerHTML = `0${++index2}: min`;
    }
    else {
        right.innerHTML = `${++index2}: min`;
    }
    breakmin = index2;
    console.log(breakmin);

});


reset.addEventListener("click", function () {

    clearInterval(starttimer);
    start.innerText = "start";
    left.innerText = "00:min";
    right.innerText = "00:min";
    index = 0;
    index2 = 0;
    wm.innerText = "00";
    ws.innerText = "00";
    workmin = 0;
    breakmin = 0;
    pause = false;
    sbtn1.disabled = false;
    sbtn2.disabled = false;
    bbtn1.disabled = false;
    bbtn2.disabled = false;


    starttimer = undefined;
    document.location.reload();
});

// stop.addEventListener("click", function () {
//     stopInterval();
//     starttimer = undefined;
// })

function timer() {    //session timer condition.
    if (pause) {
        if (starter == 1) {
            outercolour.style.backgroundColor = "#02a1b0";
            console.log("inside session");
            wm.innerText = workmin;
            console.log(wm.innerText, ws.innerText);
            //    console.log(workmin);

            if (ws.innerText != 0) {
                ws.innerText--;
                // console.log(ws.innerText);
            }
            else if (wm.innerText != 0 && ws.innerText == 0) {
                //  console.log("in");
                ws.innerText = 59;
                wm.innerText--;
                workmin--;
            }
            else if (wm.innerText == 0 && ws.innerText == 0) {
                workmin = index;
                starter = 2;
                time.style.color = "#a9573b";
                outercolour.style.backgroundColor = "#a9573b";

            }
        }
        // break timer condition.
        else if (starter == 2) {
            console.log("inside break");
            wm.innerText = breakmin;
            console.log(wm.innerText, ws.innerText);

            if (ws.innerText != 0) {
                ws.innerText--;
            }
            else if (wm.innerText != 0 && ws.innerText == 0) {
                ws.innerText = 59;
                wm.innerText--;
                breakmin--;
            }
            else if (wm.innerText == 0 && ws.innerText == 0) {
                breakmin = index2;
                starter = 1;
                time.style.color = "#02a1b0";
                outercolour.style.backgroundColor = "#02a1b0";
            }
        }
    }
}


