function createDivs(id,amount) {
    const container=document.getElementById(id);
    for ( let i =0; i < amount ; i++) { 
        const div= document.createElement('div');
        div.classList.add('pad');
        container.appendChild(div);
    }
}

createDivs('container',256);

document.querySelectorAll('.pad').forEach (
item =>{item.addEventListener('mouseover',()=> {
    item.classList.add('filled');
})});
