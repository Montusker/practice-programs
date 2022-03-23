// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

const container = document.querySelector('#container');


const paragraph = document.createElement('p');

paragraph.textContent = "Hey I'm red!";
paragraph.style.cssText = "color: red;";

container.appendChild(paragraph);

const header3 = document.createElement('h3');

header3.textContent = "Hey Im a blue h3";
header3.style.cssText = "color: blue;";

container.appendChild(header3);

const blackpink = document.createElement('div');
const header1 = document.createElement('h1');
const paragraph1 = document.createElement('p');

blackpink.setAttribute('style', 'border: 1px solid black; background-color: pink;')
header1.textContent = "I'm in a div";
paragraph1.textContent = "Me too!"

blackpink.appendChild(header1);
blackpink.appendChild(paragraph1);



container.appendChild(blackpink);



