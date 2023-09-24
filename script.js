const colorBox = document.getElementById("colorBox");
const generateButton = document.getElementById("generateButton");
const colorCodeInput = document.getElementById("colorCode");
const copyButton = document.getElementById("copyButton");

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateBackgroundColor() {
    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
    colorCodeInput.value = randomColor;
}

generateButton.addEventListener("click", updateBackgroundColor);

copyButton.addEventListener("click", () => {
    colorCodeInput.select();
    document.execCommand("copy");
    alert("Color code copied to clipboard: " + colorCodeInput.value);
});

colorBox.addEventListener("click", updateBackgroundColor);

// Initial color generation
updateBackgroundColor();
