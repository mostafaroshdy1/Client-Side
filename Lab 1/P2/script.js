const text = document.querySelector("h1");
const colorInput = document.querySelectorAll("input");
let r = Math.random() * 255, g = Math.random() * 255, b = Math.random() * 255, alpha = Math.random();
setColor();
colorInput[0].value = r;
colorInput[1].value = g;
colorInput[2].value = b;
colorInput[3].value = scaleValue(alpha, 0, 1, 0, 10000);


colorInput[0].addEventListener("input", () => {
    r = colorInput[0].value
    console.log(r);
    setColor();
})
colorInput[1].addEventListener("input", () => {
    g = colorInput[1].value
    console.log(g);
    setColor();

})
colorInput[2].addEventListener("input", () => {
    b = colorInput[2].value;
    console.log(b);
    setColor();

})
colorInput[3].addEventListener("input", () => {
    alpha = scaleValue(colorInput[3].value, 0, 10000, 0, 1)
    console.log(alpha);
    setColor();

})
function setColor() {
    text.style.color = `rgb(${r},${g},${b},${alpha})`
}

function scaleValue(value, fromMin, fromMax, toMin, toMax) {
    const ratio = (toMax - toMin) / (fromMax - fromMin);
    return (value - fromMin) * ratio + toMin;
}