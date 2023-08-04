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
    
    let isMouseDown = false;

    for(let i=0; i < userInput*userInput; i++){
        let fill = 0.2;
        let cell = document.querySelector(`.number-${i+1}`);

        document.getElementById('clear').addEventListener('click' , () =>{
            for(let j=0; j < userInput*userInput; j++){
                let cell = document.querySelector(`.number-${j+1}`);
                cell.style.background = 'white';
                cell.style.opacity = "0.2"
            }       
         });

        cell.addEventListener('mouseup' , () => {
            isMouseDown = false;
        });

        cell.addEventListener('mousedown' , () => {
            isMouseDown = true;
        });

        cell.addEventListener('mouseenter', () => {
            if(isMouseDown){
                fill += 0.2;
                cell.style.background = "gray";
                cell.style.opacity = `${fill}`

            }
        });

        
    }
}




