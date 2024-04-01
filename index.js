// Your code here
function moveDodgerLeft() {
    const left = dodger.style.left.replace("px", "");
    const leftNum = parseInt(left, 10);
    if (leftNum > 0) {
        dodger.style.left = `${leftNum - 1}px`;
    }
}

function moveDodgerRight() {
    const left = dodger.style.left.replace("px", "");
    const leftNum = parseInt(left, 10);
    if (leftNum < gameWidth - dodgerWidth) {
        dodger.style.left = `${leftNum + 1}px`;
    }
}



