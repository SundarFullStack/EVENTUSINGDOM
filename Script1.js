//Event Functionality creation using DOM

//Element creator function

//1. EventListener - to handle the elements triggering from html element

//2. alert - To show the infor to user

//3. Prompt - to get user input

function createElement(tagName, attrtiname, attriValue) {

    let label = document.createElement(tagName);

    label.setAttribute(attrtiname, attriValue);

    return label;

}

//Button Creator

function createButton(tagName, attriName, attriValue, classname, classValue, content) {
    
    let button = document.createElement(tagName);

    button.setAttribute(attriName, attriValue);

    button.setAttribute(classname, classValue);

    button.innerText = 'content';

    button.addEventListener('click', promptFunction);

    return button;
    

}

//create body
let container = (createElement('div', 'class', 'container'));

let row = (createElement('div', 'class', 'row'));

let box_inside = (createElement('div', 'class', 'box_inside'));

//create button

let button = (createButton('button','type','button','class','btn btn-primary'))


//append body

document.body.append(container);

container.append(row);

row.append(box_inside);

//apend button

box_inside.append(button);

//Event applying

function promptFunction() {
    
    let name = prompt("please Enter your name:");

    button.innerText = name;

    button.setAttribute('class','btn btn-success')


}