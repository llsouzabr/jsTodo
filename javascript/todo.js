const board = document.querySelector("#board");
const input = document.querySelector("#novaTarefa");
const imgAdd = document.querySelector("#add");

function checkError(event) {
    if(!input.value || input.value.trim().length <=0) {
        alert("Você precisa digitar algum valor para seguir!")
        input.value=''
        input.placeholder="Digite um texto aqui!";
        input.style.borderColor = "red"
        input.focus()
        return false
    } else {
        return true
    }
}

function addTask(event) {
  const tarefaDigitada = input.value;
  if (checkError()) {
    const divTarefa = document.createElement("div");
    divTarefa.classList.add("tarefa");
  
    const divConteudo = document.createElement("div");
    divConteudo.classList.add("col-md-8");
    divConteudo.innerText = tarefaDigitada;
  
    const divImg = document.createElement("div");
    divImg.classList.add("col-md-2");
  
    const imgCheck = document.createElement("img");
    imgCheck.setAttribute("src", "img/check.png");
    imgCheck.setAttribute("class", "icon");

    imgCheck.onclick = () => divTarefa.remove()
  
    divImg.appendChild(imgCheck);
  
    divTarefa.appendChild(divConteudo);
    divTarefa.appendChild(divImg);
  
    board.appendChild(divTarefa);
    input.value = "";
    input.placeholder=''
    input.style.borderColor=''
    input.focus();
  }


//   btns.forEach(btn =>{
//     btn.addEventListener('click', () => {btn.parentNode.parentNode.remove()})
//   })


}

input.addEventListener("keypress", (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

imgAdd.onclick = addTask;

