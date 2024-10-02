const inp = document.getElementsByName("color-input")[0];
const errText = document.getElementById("invalid-text");

function isValidHexColor(hexColor) {
    return /^(?:[0-9A-F]{3}){1,2}$/i.test(hexColor);
}

function showcase(hexColor) {
    const rootcss = document.documentElement.style;
    if (!hexColor) {
        rootcss.setProperty("--selected-color", "black");
        errText.style.display = "none";
        return;
    }
    if (!isValidHexColor(hexColor)) {
        rootcss.setProperty("--selected-color", "black");
        errText.style.display = "block";
        return;
    }
    errText.style.display = "none";
    if (hexColor[0] != '#') {
        hexColor = `#${hexColor}`;
    }
    rootcss.setProperty("--selected-color", hexColor);
}

inp.addEventListener("input", event => showcase(inp.value));
