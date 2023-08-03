const container = document.getElementById('container');
function makeGrid(rows, cols){
    container.style.setProperty('--grid-rows',rows);
    container.style.setProperty('--grid-cols',cols);
    for(let i = 0 ; i<(rows*cols) ; i++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = `grid-item number-${i+1}`;
    }
}

makeGrid(16,16);

for(let i=0; i < 16*16; i++){
    let cell = document.querySelector(`.number-${i+1}`);
    cell.addEventListener('mouseenter', () => {
    cell.style.background = "gray";
    })
}
