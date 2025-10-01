const lista = document.getElementById('container-list');
const input = document.getElementById('input');
let valueInput;

input.addEventListener("keydown", (e) => {

    if(e.key === 'Enter'){

        valueInput = input.value;
        
        const novoLi = document.createElement('li');
        lista.appendChild(novoLi);
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        novoLi.textContent = valueInput;

        novoLi.appendChild(checkbox);
    }
});