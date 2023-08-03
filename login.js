let userInput ;
let size = document.getElementById('size-button');
const container = document.getElementById('container');


size.addEventListener('click', () => {
    userInput = prompt('enter the grid size you want(for example 16 would give you a 16x16 grid): ');
    makeGrid(userInput , userInput);
    draw(userInput)
});


function makeGrid(rows, cols){
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

function draw(userInput){
    for(let i=0; i < userInput*userInput; i++){
        let cell = document.querySelector(`.number-${i+1}`);
        console.log(cell)
        cell.addEventListener('mouseenter', () => {
            cell.style.background = "gray";
        })  
        
    }
}




