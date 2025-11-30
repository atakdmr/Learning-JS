//? Class 01 - Parent & Child relationship
// let result;

// const parent = document.querySelector('.parent');

// result = parent.children;
// result = parent.children[0];
// result = parent.children[0].innerText = 'child first';
// result = parent.children[0].className;
// result = parent.children[0].nodeName;

// parent.children[1].innerText = 'child second';
// parent.children[1].style.color = 'red';

// result = parent.firstElementChild;
// result = parent.lastElementChild;

// const child = document.querySelector('.child');

// result = child;
// result = child.parentElement;
// result = child.parentElement.parentElement;

// result = child.nextElementSibling;
// result = child.nextElementSibling.nextElementSibling;
// result = child.nextElementSibling.nextElementSibling.previousElementSibling;

// console.log(result);

//? Class 02 - creating element
// function createLi1(text) {
//     let li = document.createElement('li');

//     li.className = 'item';
//     li.innerText = text;

//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.className = ' checkbox';
//     li.appendChild(checkbox);

//     document.getElementById('myList').appendChild(li);
// }

// createLi1('item 4 / ');
// createLi1('item 5 / ');

// function createLi2(text) {
//     const li = document.createElement('li');
//     li.className = 'item';
//     li.innerHTML = text + ' / <input type="checkbox">';

//     document.getElementById('myList').appendChild(li);
// }

// createLi2('item 4');

//? Class 03 - creating element 2

//* 1- insertAdjacentElement
function insertElement() {
    const ul = document.querySelector('#myList');

    const h1 = document.createElement('h1');
    h1.textContent = 'insertAdjacentElement';

    ul.insertAdjacentElement('beforebegin', h1);
}
insertElement();

//* 2- insertAdjacentText
function insertText() {
    const item = document.querySelector('li:first-child');
    item.insertAdjacentText('beforebegin', 'insertAdjacentText');
}
insertText();

//* 3- insertAdjacentHTML
function insertHtml() {
    const item = document.querySelector('li:nth-child(2)');
    item.insertAdjacentHTML('beforebegin', '<h2>insertAdjacentHTML</h2>');
}
insertHtml();

//* 4- inertBefore
function insertBefore() {
    const ul = document.querySelector('#myList');
    const li = document.createElement('li');
    li.textContent = 'insertBefore';

    const secondLi = document.querySelector('li:nth-child(2)');

    ul.insertBefore(li, secondLi);
}
insertBefore();


/*
- beforebegin -
    <div>
        - afterbegin -
        item
        - beforeend -
    </div>
- afterend -
*/
