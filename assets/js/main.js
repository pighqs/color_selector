/*global console*/

function log(chose) {
    "use strict";
    window.console.log(chose);
}

var main = (function main() {
    "use strict";
    console.log("welcome in colorZ");

    var i, observe, newPaletteItem, setNewColor, setNewRandomColor, setNewEditColor, setActiveBGColor, getActiveBGColor, modifyActiveBGColor, shadeActiveBGColor, checkKey, randomColors, changeLockState, setDisplayTestRGB, setDisplayTestHEX, rgbTestInputs, hexTest, 
        btnRandomize, lockItem, enterValue, eventContainer, btnRandom, btnGetColor, canal, darkness, panelColors, palette, color, newColor, newColorName, newColorHexName, setRGBranges;


    window.onload = function start() {

        btnGetColor = document.querySelector('.getColor');
        panelColors = document.querySelectorAll('.col_view');
        canal = document.querySelectorAll('.canal');
        darkness = document.getElementById('darkness');
        eventContainer = document.getElementById("choix_couleur");
        btnRandomize = document.querySelector('.randomize');
        lockItem = document.querySelectorAll('.fa');
        enterValue = document.querySelectorAll('.enterValueInput');



        hexTest = document.getElementById('hexTest'); 
        rgbTestInputs = document.querySelectorAll('.rgb-input');
        //////////

        observe();
    };

    observe = function observe() {

        btnRandomize.onclick = randomColors;
        document.onkeydown = checkKey;
        btnGetColor.onclick = getActiveBGColor;
        canal.oninput = modifyActiveBGColor;
        darkness.oninput = shadeActiveBGColor;
        darkness.onblur = setRGBranges;

        for (i = 0; i < lockItem.length; i++) {
            lockItem[i].onclick = changeLockState;
        }

        for (i = 0; i < panelColors.length; i++) {
            panelColors[i].onclick = setActiveBGColor;
        }

        for (i = 0; i < canal.length; i++) {
            canal[i].oninput = modifyActiveBGColor;
        }

        for (i = 0; i < rgbTestInputs.length; i++) {
            rgbTestInputs[i].onchange = setDisplayTestRGB;
        }

        hexTest.onchange = setDisplayTestHEX;


    };

    setDisplayTestRGB = function setDisplayTestRGB() {
        var redTest, greenTest, blueTest, display, color, colorHex;
        redTest = document.getElementById('redTest');
        greenTest = document.getElementById('greenTest');
        blueTest = document.getElementById('blueTest');

        color = "rgb(" + redTest.value + ", " + greenTest.value + ", " + blueTest.value + ")";
        display = document.getElementById('rgbDisplayTest');
        display.style.background = color;
        display.style.borderStyle = "none";
        colorHex = colorcolor(color, "hex");
        hexTest.value = colorHex;
    };

    setDisplayTestHEX = function setDisplayTestHEX() {
        var redTest, greenTest, blueTest, display, colorHex, colorRGB, colorRGBarray;
        redTest = document.getElementById('redTest');
        greenTest = document.getElementById('greenTest');
        blueTest = document.getElementById('blueTest');

        colorHex = hexTest.value;
        display = document.getElementById('rgbDisplayTest');
        display.style.background = colorHex;
        display.style.borderStyle = "none";
        colorRGB = colorcolor(colorHex, "rgb");
        colorRGBarray = display.style.background.split("(")[1].split(")")[0].split(", ");
        redTest.value = Number(colorRGBarray[0]);
        greenTest.value = Number(colorRGBarray[1]);
        blueTest.value = Number(colorRGBarray[2]);
    };

    checkKey = function checkKey(e) {
        e = e || window.event;
        if (e.keyCode === 32) {
            e.preventDefault();
            randomColors();
        }
    };

    // créée couleurs random sur div avec class 'unlocked'
    randomColors = function randomColors() {
        var unlockedColors, colorName, colorNameHex, colorDisplay, randomColor, randomColorName;

        unlockedColors = document.querySelectorAll('.unlocked');

        for (i = 0; i < unlockedColors.length; i++) {
            colorName = unlockedColors[i].children[0];
            colorNameHex = unlockedColors[i].children[1];
            colorDisplay = unlockedColors[i].children[2];

            randomColor = $c.rand('rgb').a;
            randomColorName = "rgb(" + randomColor + ")";

            colorName.textContent = randomColorName;
            colorNameHex.textContent = colorcolor(randomColorName, "hex");
            colorDisplay.style.background = randomColorName;
            colorDisplay.style.borderStyle = "none";
        }

    };

    changeLockState = function changeLockState() {
        var parentDivCliquee;
        parentDivCliquee = this.parentNode.parentElement;

        if (this.classList.contains("fa-unlock")) {
            this.classList.remove("fa-unlock");
            this.classList.add("fa-lock");
            parentDivCliquee.classList.toggle('unlocked');
        }
        else {
            this.classList.remove("fa-lock");
            this.classList.add("fa-unlock");
            parentDivCliquee.classList.toggle('unlocked');
        }

    };


    // affiche couleur cliquée dans display et permet de la modifier :
    setActiveBGColor = function setActiveBGColor() {
        var i, style, BGColor, display, thisColorRGBvalues, darkness, darknessCanal, canals, textValues;

        //affiche couleur cliquée dans pastille :
        style = window.getComputedStyle(this, "");
        BGColor = style.getPropertyValue("background-color");
        display = document.getElementById("display");
        display.style.background = BGColor;
        display.style.borderStyle = "none";

        //récupère infos sur la couleur pour mettre à jour les curseurs :
        thisColorRGBvalues = display.style.background.split("(")[1].split(")")[0].split(", ");

        textValues = document.querySelectorAll('.inputTextColorValue');
        canals = document.querySelectorAll('.canal');
        darknessCanal = document.getElementById('darkness');

        //met à jour positions curseurs des inputs et valeurs affichées
        for (i = 0; i < 3 ; i++ ) {
            canals[i].value = Number(thisColorRGBvalues[i]);
            textValues[i].value = Number(thisColorRGBvalues[i]);
        }

        darknessCanal.value = 0;
        textValues[3].value = darknessCanal.value;
    };

    // recupère valeurs couleur background display
    getActiveBGColor = function getActiveBGColor() {
        var display, displayBackground;

        display = document.getElementById("display");
        displayBackground = display.style.background;
        // envoie valeurs rgb vers fonction
        newPaletteItem(displayBackground);
    };


    // modifie couleur background div "display" quand les jauges sont bougées
    modifyActiveBGColor = function modifyActiveBGColor() {

        var red, green, blue, rgbValues, display;

        red = document.getElementById("red").value;
        green = document.getElementById("green").value;
        blue = document.getElementById("blue").value;
        display = document.getElementById("display");
        rgbValues = "rgb(" + red + ", " + green + ", " + blue + ")";
        display.style.background = rgbValues;

    };

    shadeActiveBGColor = function shadeActiveBGColor() {

        var i, red, green, blue, redShade, greenShade, blueShade, redRange, greenRange, blueRange, display, color, percent, increase_decrease, shadeRGB, shadeRGBarray, canals, textValues;

        redRange = document.getElementById("red");
        greenRange = document.getElementById("green");
        blueRange = document.getElementById("blue");

        red = Number(redRange.value);
        green = Number(greenRange.value);
        blue = Number(blueRange.value);

        display = document.getElementById("display");
        color = display.style.background;
        percent = Number(darkness.value);

        increase_decrease = Math.round(percent * 2.55);

        // CE QUI SUIT  EST UN BLOCATOR !!! 
        if (red + increase_decrease < 0) {
            redShade = 0;
        } else if (red + increase_decrease > 255) {
            redShade = 255;
        } else {
            redShade = red + increase_decrease;
        }

        if (green + increase_decrease < 0) {
            greenShade = 0;
        } else if (green + increase_decrease > 255) {
            greenShade = 255;
        } else {
            greenShade = green + increase_decrease;
        }

        if (blue + increase_decrease < 0) {
            blueShade = 0;
        } else if (blue + increase_decrease > 255) {
            blueShade = 255;
        } else {
            blueShade = blue + increase_decrease;
        }

        shadeRGB = "rgb(" + redShade + ", " + greenShade + ", " + blueShade + ")";
        display.style.background = shadeRGB;
        shadeRGBarray = [redShade, greenShade, blueShade];


        canals = document.querySelectorAll('.canal');
        textValues = document.querySelectorAll('.inputTextColorValue');

        for (i = 0; i < 3; i++) {
            textValues[i].value = shadeRGBarray[i];
        }


    };


    // génère nouvelle "pastille" de couleur ds la palette
    newPaletteItem = function newPaletteItem(sendColor) {

        palette = document.querySelector('.palette');
        color = document.createElement('div');
        color.className = 'color';
        newColor = document.createElement('div');
        newColor.className = 'col_view';
        newColorName = document.createElement('p');
        newColorName.className = 'col_name';
        newColorHexName = document.createElement('p');
        newColorHexName.className = 'col_name_hex';

        palette.appendChild(color);
        color.appendChild(newColorName);
        color.appendChild(newColorHexName);
        color.appendChild(newColor);

        newColor.style.background = sendColor;
        newColorName.textContent = sendColor;
        newColorHexName.textContent = colorcolor(sendColor, "hex");

        panelColors = document.querySelectorAll('.col_view');
        for (i = 0; i < panelColors.length; i++) {
            panelColors[i].onclick = setActiveBGColor;
        }

    };

    setRGBranges = function setRGBranges() {
        var display, rgbColor, red, green, blue;
        console.log("onblur");
//        display = document.getElementById("display");
//        rgbColor = display.style.background.split("(")[1].split(")")[0].split(", ");
//        red = document.getElementById("red");
//        green = document.getElementById("green");
//        blue = document.getElementById("blue");
//        red.value = Number(rgbColor[0]);
//        green.value = Number(rgbColor[1]);
//        blue.value = Number(rgbColor[2]);
    }

}());

// libs
//conversion : //github.com/metaloha/color2color
//random : //http://honyovk.com/Colors/

