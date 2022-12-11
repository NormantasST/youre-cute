function check_mouse_position(e)
{
    let button = document.getElementById("no-button");
    let top = button.offsetTop
    let left = button.offsetLeft;
    let right = left + button.offsetWidth;
    let bottom = top + button.offsetHeight;
    let mX = e.clientX;
    let mY = e.clientY;
    console.log(`Button position: ${top} ${right} ${bottom} ${left}`)
    console.log(`mouse position: ${mX} ${mY}`)
    if(mY >= top - 100 &&
       mY <= bottom + 100 &&
       mX >= left - 100 &&
       mX <= right + 100)
       change_button_position(button);

}

function change_button_position(button)
{
    button.style.position = "relative";
    
    let newTop = Math.floor(Math.random() * 500);
    let newLeft = Math.floor(Math.random() * 500);
    console.log(`New positionsd: ${newTop} ${newLeft}`)
    button.style.top = newTop;
    button.style.left = newLeft;
    console.log("Changed button position");
}

function lies(){
    let button = document.getElementById("no-button");
    if (button.innerHTML.trim() == "NO I AM NOT!")
        button.innerHTML = "click me if u disagree, cuz fr u are!!!";
    else
        button.innerHTML += "!".repeat(Math.floor(Math.random() * 10) + 1);
}