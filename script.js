var resultA = [];
var resultB = [];
var subHeader = document.querySelector('.sub-header');
var playArea = document.querySelector('.play-area');
var container = document.querySelector('.container');
var btnS = document.querySelectorAll('.btn-s');
var playerA = document.querySelector('.playerA');
var playerB = document.querySelector('.playerB');
function start() {
    container.classList.add('turn-on');
}
do {
    var size = Number(prompt('chon size ban co(không lớn hơn 12 nhé :D)'));
} while (size % 1 !== 0 || size < 0 || size > 12 || size == '');
do {
    var Aname = prompt('Hãy nhập tên player 1')
} while ((Aname) == '');
do {
    var Bname = prompt('Hãy nhập tên player 2')
} while ((Bname) == '');
var str = ``;
var valuebtn = 1;
for (var i = 0; i < size; i++) {
    str += `<div class="col">`
    for (var j = 0; j < size; j++) {
        str += `<button class="btn-s" value="${valuebtn++}" onclick="set(this)">K</button>`
    }
    str += `</div>`
}
playArea.innerHTML = str;
var A = true;
var count = 0;
function set(btn) {
    count++;
    btn.innerHTML = A ? 'X' : 'O';
    btn.style.backgroundColor = A ? '#cb101080' : '#0c26dd80';
    btn.style.color = A ? 'black' : 'blue';
    A ? resultA.push(Number(btn.value)) : resultB.push(Number(btn.value));
    A ? playerB.classList.add('showup') : playerB.classList.remove('showup');
    A ? playerA.classList.remove('showup') : playerA.classList.add('showup');
    A = !A;
    subHeader.innerHTML = 'luot thu ' + count;
    btn.setAttribute('disabled', "true");
    if (count == Math.pow(Number(size), 2)) {
        alert('game over')
    }
    // xet dieu kien thang
    var resultLength = resultA.length;
    if (resultLength >= 5) {
        for (var i of resultA) {
            switch (true) {
                case resultA.includes(i + 1) && resultA.includes(i + 2) && resultA.includes(i + 3) && resultA.includes(i + 4):
                case resultA.includes(i + size) && resultA.includes(i + (size * 2)) && resultA.includes(i + (size * 3)) && resultA.includes(i + (size * 4)):
                case resultA.includes(i + size + 1) && resultA.includes(i + (size * 2) + 2) && resultA.includes(i + (size * 3) + 3) && resultA.includes(i + (size * 4) + 4):
                case resultA.includes(i + size - 1) && resultA.includes(i + (size * 2) - 2) && resultA.includes(i + (size * 3) - 3) && resultA.includes(i + (size * 4) - 4):
                    alert(`${Aname} win! Xin chúc mừng bạn !`);
                    // toast.classList.add('block')
                    break;
            }
        }
        for (var i of resultB) {
            switch (true) {
                case resultB.includes(i+1) && resultB.includes(i+2)&&resultB.includes(i+3)&& resultB.includes(i+4):
                case resultB.includes(i+size) && resultB.includes(i+(size*2))&&resultB.includes(i+(size*3))&& resultB.includes(i+(size*4)):
                case resultB.includes(i+size+1) && resultB.includes(i+(size*2)+2)&&resultB.includes(i+(size*3)+3)&& resultB.includes(i+(size*4)+4):
                case resultB.includes(i+size-1) && resultB.includes(i+(size*2)-2)&&resultB.includes(i+(size*3)-3)&& resultB.includes(i+(size*4)-4):
                    alert(`${Bname} win! Xin chúc mừng bạn !`);
                    break;
            }
        }
    }
}
// set reset btn
function reset() {
    var kakunin = confirm('bạn có muốn chơi lại không?')
    if (kakunin == true) {
        location.reload()
        A = true;
        count = 0;
    }
}
//set player Name
playerA.innerHTML = Aname;
playerB.innerHTML = Bname;

//set win-output
// var winResult = `<div>`;
// var toast = document.querySelector('.toast');
