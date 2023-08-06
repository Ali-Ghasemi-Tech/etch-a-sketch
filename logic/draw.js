import { randomColor  } from "./random-color.js";
import { inputValue } from "./index.js";

export function draw(userInput , color){
    let isMouseDown = false;
    let isRainbowClicked = false;
    let isStatic = true;
    let isErasing = false;

    const rainbowButton = document.getElementById('rainbow');
    const colorButton = document.getElementById('color-button');
    const eraserButton = document.getElementById('eraser');

    for(let i=0; i < userInput*userInput; i++){
        let fill = 0.2;
        let cell = document.querySelector(`.number-${i+1}`);

        cell.addEventListener('mouseup' , () => {
            isMouseDown = false;
        });

        cell.addEventListener('mousedown' , () => {
            isMouseDown = true;
        });

        rainbowButton.addEventListener('click' , () =>{
            isRainbowClicked = true;
            isStatic = false;
            isErasing = false;
            rainbowButton.classList.add('change-button-style');
            colorButton.classList.remove('change-button-style');
            eraserButton.classList.remove('change-button-style');
        });

        
        colorButton.addEventListener('click' , () => {
            isStatic = true;
            isErasing = false;
            rainbowButton.classList.remove('change-button-style');
            colorButton.classList.add('change-button-style');
            eraserButton.classList.remove('change-button-style');
        });

        eraserButton.addEventListener('click' , () =>{
            isErasing = true;
            isStatic =false;
            isRainbowClicked = false;
            rainbowButton.classList.remove('change-button-style');
            colorButton.classList.remove('change-button-style');
            eraserButton.classList.add('change-button-style');
        })

        cell.addEventListener('mouseenter', () => {
            if(isMouseDown){
                if(inputValue){
                    color = inputValue;
                }else if(!inputValue){
                    color = "black";
                }
                if(isRainbowClicked && !isStatic){
                    color = randomColor();
                    fill = 1;
                }
                if(isErasing){
                    color = "white"
                    fill = 1;
                }
                fill += 0.2;
                cell.style.backgroundColor = `${color}`;
                cell.style.opacity = `${fill}`

            }
        });

        
    }

}