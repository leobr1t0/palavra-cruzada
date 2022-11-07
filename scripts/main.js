const rFim = [
    "cpu",
    "ula",
    "registradores",
    "ram",
    "rom",
    "eprom",
    "flash",
    "memoria de massa",
    "dma",
    "cs",
    "adress bus",
    "data bus",
    "i5",
    "i7",
    "dual core",
    "quad core",
    "threads",
    "cache",
];


var indexLn8 = 1;
function criaInputs() {

    // 1° Linha
    // for (let i = 0; i < 1; i++) {
    for (var indexLn1 = 1; indexLn1 <= 15; indexLn1++) {
        if (indexLn1 == 11) {
            box_Cruz.innerHTML += `<div class="block_white" id="l1Block${indexLn1}"></div>`;
        }
        else {
            box_Cruz.innerHTML += `<div class="block_black"></div>`;
        }
    }
    // }

    // 2° Linha
    // for (let i = 0; i < 1; i++) {
    for (var indexLn2 = 1; indexLn2 <= 15; indexLn2++) {
        if (indexLn2 == 11) {
            box_Cruz2.innerHTML += `<div class="block_white" id="l2Block${indexLn2}"></div>`;
        }
        else {
            box_Cruz2.innerHTML += `<div class="block_black"></div>`;
        }
    }
    // }

    // 3° Linha
    // for (let i = 0; i < 1; i++) {
    for (var indexLn3 = 1; indexLn3 <= 15; indexLn3++) {
        if (indexLn3 == 1) {
            box_Cruz3.innerHTML += `<div class="block_white" id="l3Block${indexLn3}"><small>16</small</div>`;
        } else if (indexLn3 == 1 || indexLn3 == 2 || indexLn3 == 3 || indexLn3 == 4 || indexLn3 == 5 || indexLn3 == 6 || indexLn3 == 7 || indexLn3 == 8 || indexLn3 == 11) {
            box_Cruz3.innerHTML += `<div class="block_white" id="l3Block${indexLn3}"></div>`;
        }
        else {
            box_Cruz3.innerHTML += `<div class="block_black"></div>`;
        }
    }
    // }

    // 4° Linha
    // for (let i = 0; i < 1; i++) {
    for (var indexLn4 = 1; indexLn4 <= 15; indexLn4++) {
        if (indexLn4 == 4 || indexLn4 == 9 || indexLn4 == 11 || indexLn4 == 14) {
            box_Cruz4.innerHTML += `<div class="block_white" id="l4Block${indexLn4}"></div>`;
        }
        else {
            box_Cruz4.innerHTML += `<div class="block_black"></div>`;
        }
    }
    // }

    // 5° Linha
    // for (let i = 0; i < 1; i++) {
    for (var indexLn5 = 1; indexLn5 <= 15; indexLn5++) {
        if (indexLn5 == 7) {
            box_Cruz5.innerHTML += `<div class="block_white" id="l5Block${indexLn5}"><small>9, 12</small</div>`;
        } else if (indexLn5 == 2 || indexLn5 == 4 || indexLn5 == 8 || indexLn5 == 9 || indexLn5 == 11 || indexLn5 == 14) {
            box_Cruz5.innerHTML += `<div class="block_white" id="l5Block${indexLn5}"></div>`;
        }
        else {
            box_Cruz5.innerHTML += `<div class="block_black"></div>`;
        }
    }
    // }

    // 6° Linha
    // for (let i = 0; i < 1; i++) {
    for (var indexLn6 = 1; indexLn6 <= 15; indexLn6++) {
        if (indexLn6 == 2 || indexLn6 == 4 || indexLn6 == 5 || indexLn6 == 7 || indexLn6 == 9 || indexLn6 == 11 || indexLn6 == 14) {
            box_Cruz6.innerHTML += `<div class="block_white" id="l6Block${indexLn6}"></div>`;
        }
        else {
            box_Cruz6.innerHTML += `<div class="block_black"></div>`;
        }
    }
    // }

    // 7° Linha
    for (var indexLn7 = 1; indexLn7 <= 15; indexLn7++) {
        if (indexLn7 == 2 || indexLn7 == 4 || indexLn7 == 5 || indexLn7 == 6 || indexLn7 == 7 || indexLn7 == 9 || indexLn7 == 11 || indexLn7 == 14) {
            box_Cruz7.innerHTML += `<div class="block_white" id="l7Block${indexLn7}"></div>`;
        }
        else {
            box_Cruz7.innerHTML += `<div class="block_black"></div>`;
        }
    }

    // 8° Linha
    // for (let i = 0; i < 1; i++) {
    for (var indexLn8 = 1; indexLn8 <= 15; indexLn8++) {
        if (indexLn8 == 1) {
            box_Cruz8.innerHTML += `<div class="block_white" id="l8Block${indexLn8}"><small>8</small</div>`;
        } else if (indexLn8 == 9) {
            box_Cruz8.innerHTML += `<div class="block_white" id="l8Block${indexLn8}"><small>6</small></div>`;
        } else if (indexLn8 == 15) {
            box_Cruz8.innerHTML += `<div class="block_black"></div>`;
        } else {
            box_Cruz8.innerHTML += `<div class="block_white" id="l8Block${indexLn8}"></div>`;
        }
    }
    // }

    // 9° Linha
    // for (let i = 0; i < 1; i++) {
    for (var indexLn9 = 1; indexLn9 <= 15; indexLn9++) {
        if (indexLn9 == 2 || indexLn9 == 4 || indexLn9 == 5 || indexLn9 == 6 || indexLn9 == 7 || indexLn9 == 9 || indexLn9 == 11 || indexLn9 == 14) {
            box_Cruz9.innerHTML += `<div class="block_white" id="l9Block${indexLn9}"></div>`;
        }
        else {
            box_Cruz9.innerHTML += `<div class="block_black"></div>`;
        }
    }
    // }

    // 10° Linha
    // for (let i = 0; i < 1; i++) {
    for (var indexLn10 = 1; indexLn10 <= 15; indexLn10++) {
        if (indexLn10 == 13) {
            box_Cruz10.innerHTML += `<div class="block_white" id="l10Block${indexLn10}"><small>1</small</div>`;
        } else if (indexLn10 == 2 || indexLn10 == 4 || indexLn10 == 5 || indexLn10 == 7 || indexLn10 == 9 || indexLn10 == 11 || indexLn10 == 13 || indexLn10 == 14) {
            box_Cruz10.innerHTML += `<div class="block_white" id="l10Block${indexLn10}"></div>`;
        } else {
            box_Cruz10.innerHTML += `<div class="block_black"></div>`;
        }
    }
    // }

    // 11° Linha
    // for (let i = 0; i < 1; i++) {
    for (var indexLn11 = 1; indexLn11 <= 15; indexLn11++) {
        if (indexLn11 == 2 || indexLn11 == 9 || indexLn11 == 7 || indexLn11 == 11 || indexLn11 == 13) {
            box_Cruz11.innerHTML += `<div class="block_white" id="l11Block${indexLn11}"></div>`;
        } else {
            box_Cruz11.innerHTML += `<div class="block_black"></div>`;
        }
    }
    // }

    // 12° Linha
    // for (let i = 0; i < 1; i++) {
    for (var indexLn12 = 1; indexLn12 <= 15; indexLn12++) {
        if (indexLn12 == 2 || indexLn12 == 9 || indexLn12 == 11 || indexLn12 == 13 || indexLn12 == 14 || indexLn12 == 15) {
            box_Cruz12.innerHTML += `<div class="block_white" id="l12Block${indexLn12}"></div>`;
        } else {
            box_Cruz12.innerHTML += `<div class="block_black"></div>`;
        }
    }
    // }

    // 13° Linha
    // for (let i = 0; i < 1; i++) {
    for (var indexLn13 = 1; indexLn13 <= 15; indexLn13++) {
        if (indexLn13 == 2 || indexLn13 == 11) {
            box_Cruz13.innerHTML += `<div class="block_white" id="l13Block${indexLn13}"></div>`;
        } else {
            box_Cruz13.innerHTML += `<div class="block_black"></div>`;
        }
    }
    // }
}

function verificar() {
    var inputs = document.querySelectorAll("input");

    if (inputs[0].value.toLowerCase() == rFim[0]) {
        var palavraCruz = inputs[0].value.replace(/\s/g, '');
        palavraCruz = palavraCruz.split("");
        var a = 0;
        for (let i = 13; i == 13; i++) {
            document.querySelector(`div#l10Block${i}`).innerText = palavraCruz[a];
            document.querySelector(`div#l10Block${i}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++
        }
        for (let i2 = 13; i2 == 13; i2++) {
            document.querySelector(`div#l11Block${i2}`).innerText = palavraCruz[a];
            document.querySelector(`div#l11Block${i2}`).style.backgroundColor = "rgb(87, 255, 104)";
            a++
        }
        for (let i3 = 13; i3 == 13; i3++) {
            document.querySelector(`div#l12Block${i3}`).innerText = palavraCruz[a];
            document.querySelector(`div#l12Block${i3}`).style.backgroundColor = "rgb(87, 255, 104)";
            inputs[0].disabled = true;
            sum1.style.textDecoration = "line-through";
            det1.removeAttribute("open");
            a++;
        }
    }
    if (inputs[1].value.toLowerCase() == rFim[1]) {
        var palavraCruz = inputs[1].value.replace(/\s/g, '');
        console.log(palavraCruz);
        palavraCruz = palavraCruz.split("");
        console.log(palavraCruz);
        var a = 0;
        for (let i = 13; i <= 15; i++) {
            document.querySelector(`div#l12Block${i}`).innerText = palavraCruz[a];
            document.querySelector(`div#l12Block${i}`).style.backgroundColor = "rgb(87, 255, 104)";
            inputs[1].disabled = true;
            sum2.style.textDecoration = "line-through";
            det2.removeAttribute("open");
            a++;
        }
    }
    if (inputs[2].value.toLowerCase() == rFim[2]) {
        for (let i = 1; i < inputs[2].value.length; i++) {
            // document.querySelector(`div#l8Block${i}`).style.backgroundColor = "red";
        }
    }
    if (inputs[3].value.toLowerCase() == rFim[3]) {
        for (let i = 1; i < inputs[3].value.length; i++) {
            // document.querySelector(`div#l8Block${i}`).style.backgroundColor = "red";
        }
    }
    if (inputs[4].value.toLowerCase() == rFim[4]) {
        for (let i = 1; i < inputs[4].value.length; i++) {
            // document.querySelector(`div#l8Block${i}`).style.backgroundColor = "red";
        }
    }
    if (inputs[5].value.toLowerCase() == rFim[5]) {
        for (let i = 1; i < inputs[5].value.length; i++) {
            // document.querySelector(`div#l8Block${i}`).style.backgroundColor = "red";
        }
    }
    if (inputs[6].value.toLowerCase() == rFim[6]) {
        for (let i = 1; i < inputs[6].value.length; i++) {
            // document.querySelector(`div#l8Block${i}`).style.backgroundColor = "red";
        }
    }
    if (inputs[7].value.toLowerCase() == rFim[7]) {
        var palavraCruz = inputs[7].value.replace(/\s/g, '');
        palavraCruz = palavraCruz.split("");
        var a = 0;
        for (let i = 1; i < inputs[7].value.length; i++) {
            document.querySelector(`div#l8Block${i}`).innerText = palavraCruz[a];
            document.querySelector(`div#l8Block${i}`).style.backgroundColor = "rgb(87, 255, 104)";
            inputs[7].disabled = true;
            sum8.style.textDecoration = "line-through";
            det8.removeAttribute("open");
            a++;
        }
    }
    if (inputs[8].value.toLowerCase() == rFim[8]) {
        var palavraCruz = inputs[8].value.replace(/\s/g, '');
        palavraCruz = palavraCruz.split("");
        var a = 0;
        for (let i = 7; i <= 9; i++) {
            document.querySelector(`div#l5Block${i}`).innerText = palavraCruz[a];
            document.querySelector(`div#l5Block${i}`).style.backgroundColor = "rgb(87, 255, 104)";
            inputs[9].disabled = true;
            sum9.style.textDecoration = "line-through";
            det9.removeAttribute("open");
            a++;
        }
    }
    if (inputs[9].value.toLowerCase() == rFim[9]) {
        var palavraCruz = inputs[9].value.replace(/\s/g, '');
        palavraCruz = palavraCruz.split("");
        var a = 0;
        for (let i = 13; i <= 14; i++) {
            document.querySelector(`div#l10Block${i}`).innerText = palavraCruz[a];
            document.querySelector(`div#l10Block${i}`).style.backgroundColor = "rgb(87, 255, 104)";
            inputs[9].disabled = true;
            sum10.style.textDecoration = "line-through";
            det10.removeAttribute("open");
            a++;
        }
    }
    if (inputs[10].value.toLowerCase() == rFim[10]) {
        for (let i = 1; i < inputs[10].value.length; i++) {
            // document.querySelector(`div#l8Block${i}`).style.backgroundColor = "red";
        }
    }
    if (inputs[11].value.toLowerCase() == rFim[11]) {
        for (let i = 1; i < inputs[11].value.length; i++) {
            // document.querySelector(`div#l8Block${i}`).style.backgroundColor = "red";
        }
    }
    if (inputs[12].value.toLowerCase() == rFim[12]) {
        for (let i = 1; i < inputs[12].value.length; i++) {
            // document.querySelector(`div#l8Block${i}`).style.backgroundColor = "red";
        }
    }
    if (inputs[13].value.toLowerCase() == rFim[13]) {
        for (let i = 1; i < inputs[13].value.length; i++) {
            // document.querySelector(`div#l8Block${i}`).style.backgroundColor = "red";
        }
    }
    if (inputs[14].value.toLowerCase() == rFim[14]) {
        for (let i = 1; i < inputs[14].value.length; i++) {
            // document.querySelector(`div#l8Block${i}`).style.backgroundColor = "red";
        }
    }
    if (inputs[15].value.toLowerCase() == rFim[15]) {
        var palavraCruz = inputs[15].value.replace(/\s/g, '');
        console.log(palavraCruz);
        palavraCruz = palavraCruz.split("");
        console.log(palavraCruz);
        var a = 0;
        for (let i = 1; i <= 8; i++) {
            document.querySelector(`div#l3Block${i}`).innerText = palavraCruz[a];
            document.querySelector(`div#l3Block${i}`).style.backgroundColor = "rgb(87, 255, 104)";
            inputs[15].disabled = true;
            sum16.style.textDecoration = "line-through";
            det16.removeAttribute("open");
            a++;
        }
    }
    if (inputs[16].value.toLowerCase() == rFim[16]) {
        for (let i = 1; i < inputs[16].value.length; i++) {
            // document.querySelector(`div#l8Block${i}`).style.backgroundColor = "red";
        }
    }
    if (inputs[17].value.toLowerCase() == rFim[17]) {
        for (let i = 1; i < inputs[17].value.length; i++) {
            // document.querySelector(`div#l8Block${i}`).style.backgroundColor = "red";
        }
    }
} 