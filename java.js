
function createDivs() {
    

    let blocks= prompt('Please enter number of blocks to be length and width', '16');
    if (blocks>100) { blocks=100};
    let amount= blocks*blocks;
    let side= (960/blocks);
    const container=document.getElementById('container');
    container.innerHTML = '';               
    for ( let i =0; i < amount ; i++) { 
        const div= document.createElement('div');
        div.classList.add('pad');
        div.style.width= `${side}px`;
        div.style.height= `${side}px`;
        container.appendChild(div);
    }
    etchSketch()


}

const button= document.getElementById('size');
button.addEventListener('click',createDivs);

function etchSketch() {document.querySelectorAll('.pad').forEach (
item =>{item.addEventListener('mouseover',()=> {
    item.classList.add('filled');
})});}
