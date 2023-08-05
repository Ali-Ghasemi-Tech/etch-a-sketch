import { makeGrid } from "./make-grid.js";
import { draw } from "./draw.js";
import { randomColor } from "./random-color.js";

export {userInput , size , inputValue , container }


let userInput ;
let size = document.getElementById('size-button');
let inputValue;
const container = document.getElementById('container');

makeGrid(userInput =16 , userInput =16);
    draw(userInput = 16)


document.getElementById('color').addEventListener('input' , (event) =>{
    inputValue = event.target.value;
    return inputValue;
});

document.getElementById('clear').addEventListener('click' , () =>{
    for(let i=0; i < userInput*userInput; i++){
        let cell = document.querySelector(`.number-${i+1}`);
        cell.style.background = 'white';
        cell.style.opacity = "0.2"
    }       
 });

 size.addEventListener('click', () => {
    userInput = prompt('enter the grid size you want(for example 16 would give you a 16x16 grid): ');
    makeGrid(userInput , userInput);
    draw(userInput )
});