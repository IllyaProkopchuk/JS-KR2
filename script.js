let getSel = x => document.querySelector(x);
let getId = y => document.getElementById(y);

getSel('.bold').onclick = function () {
    if (getSel('.mainBox').classList.contains('bold')) {
        getSel('.mainBox').classList.remove('bold');
    } else getSel('.mainBox').classList.add('bold');
}

getSel('.italic').onclick = function () {
    if (getSel('.mainBox').classList.contains('italic')) {
        getSel('.mainBox').classList.remove('italic');
    } else getSel('.mainBox').classList.add('italic');
}

getSel('.underlined').onclick = function () {
    if (getSel('.mainBox').classList.contains('underlined')) {
        getSel('.mainBox').classList.remove('underlined');
    } else getSel('.mainBox').classList.add('underlined');
}

getSel('.deleted').onclick = function () {
    if (getSel('.mainBox').classList.contains('deleted')) {
        getSel('.mainBox').classList.remove('deleted');
    } else getSel('.mainBox').classList.add('deleted');
}
getSel('.left').onclick = function () {
    getSel('.mainBox').classList.add('moveLeft')
    getSel('.mainBox').classList.remove('moveCenter', 'moveRight');
}
getSel('.center').onclick = function () {
    getSel('.mainBox').classList.add('moveCenter')
    getSel('.mainBox').classList.remove('moveLeft', 'moveRight');
}
getSel('.right').onclick = function () {
    getSel('.mainBox').classList.add('moveRight')
    getSel('.mainBox').classList.remove('moveLeft', 'moveCenter');
}

// for (let i = 1; i < 10; i++) {
//     getSel('.s' + i).onclick = function () {
//         getSel('.mainBox').classList.remove('s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8');
//         getSel('.mainBox').classList.add('s' + i);
//     }
// }

getSel('.s1').onclick = function () {
    getSel('.mainBox').classList.remove('s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8');
    getSel('.mainBox').classList.add('s1');
}
getSel('.s2').onclick = function () {
    getSel('.mainBox').classList.remove('s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8');
    getSel('.mainBox').classList.add('s2');
}
getSel('.s3').onclick = function () {
    getSel('.mainBox').classList.remove('s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8');
    getSel('.mainBox').classList.add('s3');
}
getSel('.s4').onclick = function () {
    getSel('.mainBox').classList.remove('s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8');
    getSel('.mainBox').classList.add('s4');
}
getSel('.s5').onclick = function () {
    getSel('.mainBox').classList.remove('s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8');
    getSel('.mainBox').classList.add('s5');
}
getSel('.s6').onclick = function () {
    getSel('.mainBox').classList.remove('s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8');
    getSel('.mainBox').classList.add('s6');
}
getSel('.s7').onclick = function () {
    getSel('.mainBox').classList.remove('s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8');
    getSel('.mainBox').classList.add('s7');
}
getSel('.s8').onclick = function () {
    getSel('.mainBox').classList.remove('s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8');
    getSel('.mainBox').classList.add('s8');
}

getSel('.arial').onclick = function () {
    getSel('.mainBox').classList.remove('arial', 'georgia', 'impact', 'tahoma', 'roman', 'verdana');
    getSel('.mainBox').classList.add('arial');
}
getSel('.georgia').onclick = function () {
    getSel('.mainBox').classList.remove('arial', 'georgia', 'impact', 'tahoma', 'roman', 'verdana');
    getSel('.mainBox').classList.add('georgia');
}
getSel('.impact').onclick = function () {
    getSel('.mainBox').classList.remove('arial', 'georgia', 'impact', 'tahoma', 'roman', 'verdana');
    getSel('.mainBox').classList.add('impact');
}
getSel('.tahoma').onclick = function () {
    getSel('.mainBox').classList.remove('arial', 'georgia', 'impact', 'tahoma', 'roman', 'verdana');
    getSel('.mainBox').classList.add('tahoma');
}
getSel('.roman').onclick = function () {
    getSel('.mainBox').classList.remove('arial', 'georgia', 'impact', 'tahoma', 'roman', 'verdana');
    getSel('.mainBox').classList.add('roman');
}
getSel('.verdana').onclick = function () {
    getSel('.mainBox').classList.remove('arial', 'georgia', 'impact', 'tahoma', 'roman', 'verdana');
    getSel('.mainBox').classList.add('verdana');
}

let colorMas = ['red', 'yellow', 'blue', 'green', 'grey', 'pink', 'purple', 'orange', 'aqua', 'black',
    'deeppink', 'aquamarine', 'bisque', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate',
    'coral', 'cornflowerblue'
];

getId('fontColorShowModal').onclick = function () {
    getId('fontColorModal').style.display = 'flex';
    getId('blur').style.display = 'block';
    let box = getId('fontColorModal');
    if (box.children.length == 0) {
        for (let i = 0; i < colorMas.length; i++) {
            let div = document.createElement('div');
            div.id = 'color';
            div.style.backgroundColor = colorMas[i];
            document.getElementById('fontColorModal').appendChild(div);
        }
        for (let i = 0; i < box.children.length; i++) {
            box.children[i].onclick = function () {
                getSel('.mainBox').style.color = colorMas[i];
            }
        }
    }
}
window.addEventListener('click', function (e) {
    if (e.target.id != 'fontColorModal' && e.target.id != 'fontColorShowModal' && e.target.id != 'header' && e.target.id != 'color') {
        getId('fontColorModal').style.display = 'none';
        getId('blur').style.display = 'none';
    }
})

getId('backgroundShowModal').onclick = function () {
    getId('backgroundModal').style.display = 'flex';
    getId('blur1').style.display = 'block';
    getId('home').style.display = 'flex';
    if (getId('profile').classList.contains('active')) {
        getId('home').style.display = 'none';
        getId('contact').style.display = 'none';
    }
    if (getId('contact').classList.contains('active')) {
        getId('home').style.display = 'none';
        getId('profile').style.display = 'none';
    }
    let box = getId('home')
    let image = getId('profile')
    if (box.children.length == 0) {
        for (let i = 0; i < colorMas.length; i++) {
            let div = document.createElement('div');
            div.id = 'color';
            div.style.backgroundColor = colorMas[i];
            document.getElementById('home').appendChild(div);
        }
        for (let i = 0; i < box.children.length; i++) {
            box.children[i].onclick = function () {
                getSel('.mainBox').style.backgroundImage = '';
                getSel('.mainBox').style.backgroundColor = '';
                getSel('.mainBox').style.backgroundColor = colorMas[i];
            }
        }
    }
    getId('home-tab').onclick = function () {
        getId('home').style.display = 'flex';
    }

    getId('profile-tab').onclick = function () {
        getId('home').style.display = 'none';
        getId('profile').style.display = 'flex';
        if (image.children.length == 0) {
            for (let i = 1; i <= 9; i++) {
                let div = document.createElement('div');
                div.id = 'background';
                div.style.backgroundImage = `url(bg_images/${i}.jpg)`;
                document.getElementById('profile').appendChild(div);
            }
            for (let i = 1; i <= 9; i++) {
                image.children[i - 1].onclick = function () {
                    getSel('.mainBox').style.backgroundImage = '';
                    getSel('.mainBox').style.backgroundColor = '';
                    getSel('.mainBox').style.backgroundImage = `url(bg_images/${i}.jpg)`;
                }
            }
        }
    }
    getId('contact-tab').onclick = function () {
        getId('profile').style.display = 'none';
        getId('home').style.display = 'none';
        getId('contact').style.display = 'block';
    }
}
getId('file').addEventListener('change', function (u) {
    let image = u.target.files[0];
    let url = URL.createObjectURL(image);
    getSel('.mainBox').style.backgroundImage = `url(${url})`
})

window.addEventListener('click', function (a) {
    if (a.target.id != 'backgroundModal' && a.target.id != 'backgroundShowModal' && a.target.id != 'header' && a.target.id != 'color' &&
        a.target.id != 'myTab' && a.target.id != 'home-tab' && a.target.id != 'profile-tab' && a.target.id != 'contact-tab' &&
        a.target.id != 'profile' && a.target.id != 'background') {
        getId('backgroundModal').style.display = 'none';
        getId('blur1').style.display = 'none';
    }
})

getSel('.login').onclick = function () {
    getId('blockModal').style.display = 'block';
    getId('blur2').style.display = 'block';
}

getId('mybtn').onclick = function () {
    if (getId('login').value == 'admin' || getId('pass').value == 'admin') {
        getId('login').value = '';
        getId('pass').value = '';
        getId('blockModal').style.display = 'none';
        getId('blur2').style.display = 'none';
    }
}
let tmpText
getSel('.consoleBtn').onclick = function () {
    getSel('.mainBox').style.display = 'none';
    getId('textArea').style.display = 'block';
    getSel('.newButtonBlock').style.display = 'block';
    getSel('.buttonBlock').style.display = 'none';
    tmpText = getId('insideBox').innerHTML;
    getId('myArea').value = tmpText;
}

getId('goHome').onclick = function () {
    getSel('.mainBox').style.display = 'block';
    getId('textArea').style.display = 'none';
    getSel('.newButtonBlock').style.display = 'none';
    getSel('.buttonBlock').style.display = 'flex';
    tmpText = getId('myArea').value;
    getId('insideBox').innerHTML = tmpText;
}
getId('tableBox').onclick = function () {
    getId('createTable').style.display = 'block';
    getId('blur3').style.display = 'block';
}

let countTR, countTD, widthTD, heightTD, borderWidth, borderStyle, borderColor;
let table = '';

getId('createTBL').onclick = function () {
    countTR = getId('countTR').value;
    countTD = getId('countTD').value;
    widthTD = getId('widthTD').value;
    heightTD = getId('heightTD').value;
    borderWidth = getId('borderWidth').value;
    borderColor = getId('myColor').value;
    let style;

    table += '<table>';
    for (let i = 0; i < countTR; i++) {
        table += '<tr>';
        for (let j = 0; j < countTD; j++) {
            style = `width:${widthTD}px; height:${heightTD}px; border:${borderWidth}px ${f2.sel.value} ${borderColor}`;
            table += `<td style ="${style}">TD</td>`;
        }
        table += '</tr>';
    }
    table += '</table>'
    getId('myArea').value += table;
}
window.addEventListener('click', function (h) {
    if (h.target.id != 'createTable' && h.target.id != 'header' && h.target.id != 'countTR' && h.target.id != 'tableBox' &&
        h.target.id != 'countTD' && h.target.id != 'widthTD' && h.target.id != 'heightTD' && h.target.id != 'borderWidth' &&
        h.target.id != 'myColor' && h.target.id != 'sel' && h.target.id != 'reset' && h.target.id != 'inOneRow' &&
        h.target.id != 'createTBL') {
        getId('createTable').style.display = 'none';
        getId('blur3').style.display = 'none';
    }
})
getId('reset').onclick = function () {
    getId('countTR').value = '';
    getId('countTD').value = '';
    getId('widthTD').value = '';
    getId('heightTD').value = '';
    getId('borderWidth').value = '';
    getId('myColor').value = '';
}

let ol;
let olCount;
getId('btnCreateOl').onclick = function () {
    olCount = getId('countOl').value;
    let f4 = document.forms['f4'];
    ol = '<ol type="' + f4.type.value + '">';
    for (let i = 0; i < olCount; i++) {
        ol += `<li> Item ${i+1} </li>`;
    }
    ol += '</ol>';
    getId('myArea').value += ol;
}

getId('olCreateShow').onclick = function () {
    getId('createOl').style.display = 'block';
    getId('blur4').style.display = 'block';
}
getId('resetOl').onclick = function () {
    getId('countOl').value = '';
}
window.addEventListener('click', function (q) {
    if (q.target.id != 'header' && q.target.id != 'olCreateShow' && q.target.id != 'resetOl' && q.target.id != 'createOl' &&
        q.target.id != 'countOlBox' && q.target.id != 'sel2' && q.target.id != 'boxOl' && q.target.id != 'countOl' &&
        q.target.id != 'btnCreateOl' && q.target.id != 'countOl') {
        getId('createOl').style.display = 'none';
        getId('blur4').style.display = 'none';
    }
})

let ul;
let ulCount;
getId('btnCreateUl').onclick = function () {
    ulCount = getId('countUl').value;
    let f5 = document.forms['f5'];
    ul = '<ul type="' + f5.type.value + '">';
    for (let i = 0; i < ulCount; i++) {
        ul += `<li> Item ${i+1} </li>`;
    }
    ul += '</ul>';
    getId('myArea').value += ul;
}

getId('liCreateShow').onclick = function () {
    getId('createUl').style.display = 'block';
    getId('blur5').style.display = 'block';
}
getId('resetUl').onclick = function () {
    getId('countUl').value = '';
}
window.addEventListener('click', function (n) {
    if (n.target.id != 'header' && n.target.id != 'liCreateShow' && n.target.id != 'resetUl' && n.target.id != 'createUl' &&
        n.target.id != 'countUlBox' && n.target.id != 'sel3' && n.target.id != 'boxUl' && n.target.id != 'countUl' &&
        n.target.id != 'btnCreateUl' && n.target.id != 'countUl' && n.target.id != 'no' && n.target.id != 'no1') {
        getId('createUl').style.display = 'none';
        getId('blur5').style.display = 'none';
    }
})