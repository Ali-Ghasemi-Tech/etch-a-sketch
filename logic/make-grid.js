import { container , userInput  } from "./index.js";

export function makeGrid(rows , cols ){
    container.innerHTML = ``;
    console.log(typeof(rows,cols))
    if(isNaN(Number(userInput)) || userInput>100){
        userInput = prompt('please enter a number between 1 and 100: ');
        makeGrid(userInput,userInput);
        return;
    }
    container.style.setProperty('--grid-rows',rows);
    container.style.setProperty('--grid-cols',cols);
    for(let i = 0 ; i<(rows*cols) ; i++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = `grid-item number-${i+1}`;
    }
}