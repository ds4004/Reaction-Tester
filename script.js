var maxVal = 0xFFFFFF, back, posTop, posLeft, wid, start, end, TimeTaken, AvgTime = 0, n = 0, time = 1000;

function changeBackground() {
    back = Math.floor(Math.random() * maxVal).toString(16);
    document.getElementById('shape').style.backgroundColor = "#" + back;
}

function changeShape() {
    posTop = (Math.random() * 155) + 5;
    posLeft = (Math.random() * 935) + 5;
    wid = (Math.random() * 200) + 100;
    
    if (Math.random() > 0.5)
        document.getElementById('shape').style.borderRadius = "50%";

    else
        document.getElementById('shape').style.borderRadius = "0%";

    document.getElementById('shape').style.top = posTop + "px";
    document.getElementById('shape').style.left = posLeft + "px";
    document.getElementById('shape').style.width = wid + "px";
    document.getElementById('shape').style.height = wid + "px";
}

function visible() {
    changeBackground();
    changeShape();
    document.getElementById("shape").style.display = "block";

    start = new Date().getTime();
}

function newObject() {
    document.getElementById("shape").style.display = "none";
    n++;
    end = new Date().getTime();
    TimeTaken = (end - start) / 1000;
    document.getElementsByTagName('span')[0].innerText = TimeTaken.toFixed(2);
    AvgTime = (TimeTaken + (AvgTime * (n - 1))) / n;
    document.getElementsByTagName('span')[1].innerText = AvgTime.toFixed(2);

    setTimeout(visible, Math.floor(Math.random() * time));
}

changeBackground();
start = new Date().getTime();

document.getElementById("shape").onclick = function () { newObject() };

document.getElementById('restart').onclick = function () {
    location.reload();
}

document.getElementById("up").onclick = function () {
    if (time > 100)
        time -= 50;
    console.log(time);
}

document.getElementById("down").onclick = function () {
    if (time < 10000)
        time += 50;
    console.log(time);
}