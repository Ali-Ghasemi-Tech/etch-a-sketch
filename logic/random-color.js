export function randomColor(){
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
