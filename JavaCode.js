const grid = document.querySelector('#container')
grid.style.display = 'grid';
//grid.style.

makeGrid(16);
function makeGrid(sideSize){
    grid.textContent = '';
    for(let j = 0; j < sideSize; j++){
        for(let i = 0; i < sideSize; i++){
            const square = document.createElement('div');
            square.style.color = 'purple';
            square.style.display = 'grid';
            square.style.gridColumn = i + 1;
            square.style.gridRow = j + 1;
            square.style.minHeight = '10px';
            square.style.backgroundColor = 'white';
            //square.textContent = i;
            //square.style.gridAutoColumns = minmax(10, auto);
            grid.appendChild(square);
        }
    }
}

const dip = document.querySelectorAll('div');

dip.forEach((div) => {
    div.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = 'black';
    });

})

const reset = document.querySelector('#recreate');
reset.addEventListener('click', (e) => {
    let newSize = prompt("How many per side?");
    if(newSize > 100){
        newSize = 100;
    }
    makeGrid(newSize)
})