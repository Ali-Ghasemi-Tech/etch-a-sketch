import { randomColor  } from "./random-color.js";
import { inputValue } from "./index.js";

export function draw(userInput , color){
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