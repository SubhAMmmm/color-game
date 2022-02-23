function display() {

    let color = document.getElementsByClassName('color');
    let value = document.getElementById('value');
    let ans = document.getElementById('ans');

    ans.innerText = "Choose a color which resembles the above value";
    for (let i = 0; i < color.length; i++) {
        color[i].innerText = "";
        color[i].style = ``;
    }

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

    let arrValues = [];
    for (let i = 0; i < color.length; i++) {
        arrValues[i] = [getRandomIntInclusive(1, 255), getRandomIntInclusive(1, 255), getRandomIntInclusive(1, 255)];
        color[i].style = `background-color: rgb(${arrValues[i]})`;
    }
    console.log(arrValues);

    let pos = 0;
    pos = getRandomIntInclusive(0, 3);
    let posValue = 0
    posValue = arrValues[pos];
    console.log(pos)
    value.innerText = `rgb(${posValue})`;

    for (let i = 0; i < color.length; i++) {
        color[i].addEventListener('click', () => {
            check(i);
        });
    }

    function check(i) {
        for (let i = 0; i < color.length; i++) {
            color[i].innerText = `rbg(${arrValues[i]})`
        }
        if (arrValues[i] == posValue) {
            ans.innerText = "Correct answer";
            color[i].style = `border: 4px solid green; background-color: rgb(${arrValues[i]}); transform: scale(1.1); transition: all 0.2s;`;
        }
        else {
            ans.innerText = "Wrong answer";
            color[i].style = `border: 4px solid red; background-color: rgb(${arrValues[i]}); transform: scale(0.9); transition: all 0.2s;`;
            color[pos].innerText=`rbg(${arrValues[pos]} (This is correct)`;
        }
    }
}

display();

let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    display();
})