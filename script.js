const lista = document.getElementById('container-list');
const input = document.getElementById('input');

let listaArray = JSON.parse(localStorage.getItem("minhaLista")) || [];

if(listaArray.length > 0){
    lista.style.display = 'block';
    lista.style.opacity = '1';
}

listaArray.forEach((item, index) => {
    adicionarItem(item.texto, item.checked, index);
});

function adicionarItem(texto, checked, index) {
    const novoLi = document.createElement('li');
    lista.appendChild(novoLi);
    
    const label = document.createElement('label');
    label.classList.add('checkbox');

    const inputCheck = document.createElement('input');
    inputCheck.type = 'checkbox';
    inputCheck.checked = checked; 
    label.appendChild(inputCheck);

    const spanBox = document.createElement('span');
    spanBox.classList.add('caixa');
    label.appendChild(spanBox);

    const spanTexto = document.createElement('span');
    spanTexto.classList.add('texto');
    spanTexto.style.cursor = 'pointer';
    spanTexto.textContent = texto;
    label.appendChild(spanTexto);

    const img = document.createElement('img');
    img.classList.add('trashStyle');
    img.src = 'images/trash.png';
    img.width = 20;
    img.style.filter = 'invert(1)';

    const spanTrash = document.createElement('span');
    spanTrash.appendChild(img);
    spanTrash.style.marginLeft = '30px';
    spanTrash.style.cursor = 'pointer';
    spanTrash.classList.add('hovered');

    spanTrash.addEventListener('click', () => {
        novoLi.remove(); 
        listaArray.splice(index, 1); 
        localStorage.setItem("minhaLista", JSON.stringify(listaArray));

        if(lista.children.length === 0){
            lista.style.display = 'none';
        }
    });

    inputCheck.addEventListener('change', () => {
        listaArray[index].checked = inputCheck.checked;
        localStorage.setItem("minhaLista", JSON.stringify(listaArray));
    });

    label.appendChild(spanTrash);
    novoLi.appendChild(label);
}

input.addEventListener("keydown", (e) => {
    if(e.key === 'Enter' && input.value.trim() !== ""){
        lista.style.display = 'block';
        lista.style.opacity = '1';

        const text = input.value.trim();
        const primeiraLetra = text.charAt(0).toUpperCase();
        const textResto = text.slice(1);
        const valueInput = primeiraLetra + textResto;

        const novoItem = { texto: valueInput, checked: false };
        listaArray.push(novoItem);
        localStorage.setItem("minhaLista", JSON.stringify(listaArray));

        adicionarItem(novoItem.texto, novoItem.checked, listaArray.length - 1);

        input.value = "";
    }
});
