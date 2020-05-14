
const inNovaTarefa = document.querySelector("#novaTarefa");
const btnAdd = document.querySelector('#add')
const board = document.querySelector('#board');

function addCard(newTask=''){
    console.log('teste ok');
    board.innerHTML += `
        <div class="tarefa">
        <div class="col-md-8">${newTask}</div>
        <div class="col-md-2"><img class="icon" src="img/check.png"></div>
    </div> 
    `
}

function rmCard() {
    console.log
}

btnAdd.onclick = () => {
    addCard(inNovaTarefa.value)
}

inNovaTarefa.onchange = () =>{
    addCard(inNovaTarefa.value)
}

console.log(document.querySelectorAll("#novaTarefa"))



