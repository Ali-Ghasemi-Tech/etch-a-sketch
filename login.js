let userInput ;
let size = document.getElementById('size-button');
const container = document.getElementById('container');

makeGrid(userInput =16 , userInput =16);
    draw(userInput = 16)

function makeGrid(rows , cols ){
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




function draw(userInput , color){
    let isMouseDown = false;
    let isRainbowClicked = false;
    let isStatic = true;

    for(let i=0; i < userInput*userInput; i++){
        let fill = 0.2;
        let cell = document.querySelector(`.number-${i+1}`);

        cell.addEventListener('mouseup' , () => {
            isMouseDown = false;
        });

        cell.addEventListener('mousedown' , () => {
            isMouseDown = true;
        });

        document.getElementById('rainbow').addEventListener('click' , () =>{
            isRainbowClicked = true;
            isStatic = false;
        });
        
        document.getElementById('color-button').addEventListener('click' , () => {
            isStatic = true;
        })

        cell.addEventListener('mouseenter', () => {
            if(isMouseDown){
                color = inputValue;
                if(isRainbowClicked && !isStatic){
                    color = randomColor();
                    fill = 1;
                }
                fill += 0.2;
                cell.style.backgroundColor = `${color}`;
                cell.style.opacity = `${fill}`

            }
        });

        
    }

}

function randomColor(){
    let randomRed = Math.random();
    let randomGreen = Math.random();
    let randomBlue = Math.random();
    let red = 0;
    let blue = 0;
    let green = 0;
    
        if(randomRed > 0.255){
            red += Math.round(randomRed * 100);
        } else{
            red += Math.round(randomRed * 1000);
        }
        if(randomGreen > 0.255){
            green += Math.round(randomGreen * 100);
        } else{
            green += Math.round(randomGreen * 100);
        }
        if(randomBlue > 0.255){
            blue += Math.round(randomBlue * 100);
        } else{
            blue += Math.round(randomBlue * 100);
        }
        return (`rgb(${red} , ${green} , ${blue})`);

}
let inputValue;
document.getElementById('color').addEventListener('input' , (event) =>{
    inputValue = event.target.value;
    return inputValue;
});
console.log(inputValue)


