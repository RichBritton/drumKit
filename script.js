






const main = document.getElementById("main");
main.addEventListener("click",test);

function test(b)
{
    let keyCode = "";
    if (b.target.textContent == "W") keyCode="KeyW";
    if (b.target.textContent == "A") keyCode="KeyA";
    if (b.target.textContent == "S") keyCode="KeyS";
    if (b.target.textContent == "D") keyCode="KeyD";

    if (b.target.textContent == "Space") keyCode="Space";

    if (b.target.textContent == "↑") keyCode="ArrowUp";
    if (b.target.textContent == "←") keyCode="ArrowLeft";
    if (b.target.textContent == "↓") keyCode="ArrowDown";
    if (b.target.textContent == "→") keyCode="ArrowRight";

    playSound(keyCode);
}


document.addEventListener("keydown", getKeyPress);

function getKeyPress(k)
{
    let keyCode="";

    keyCode = k.code;

    playSound(keyCode);
}



function playSound(keyCode)
{
    let audio;

    if (keyCode == "KeyS") audio = new Audio("sounds/tom.wav");
    if (keyCode == "KeyD") audio = new Audio("sounds/snare.wav");
    if (keyCode == "KeyA") audio = new Audio("sounds/hihat.wav");
    if (keyCode == "KeyW") audio = new Audio("sounds/clap.wav");

    if (keyCode == "Space") audio = new Audio("sounds/boom.wav");

    if (keyCode == "ArrowRight") audio = new Audio("sounds/ride.wav");
    if (keyCode == "ArrowLeft") audio = new Audio("sounds/tink.wav");
    if (keyCode == "ArrowUp") audio = new Audio("sounds/openhat.wav");
    if (keyCode == "ArrowDown") audio = new Audio("sounds/kick.wav");


    const vol = document.getElementById("slider");
    audio.volume= vol.value/100;

    audio.play();
}