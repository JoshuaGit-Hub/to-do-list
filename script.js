const lista = document.getElementById('container-list');
const input = document.getElementById('input');

input.addEventListener("keydown", (e) => {
    
    
    if(e.key === 'Enter' && input.value.trim() !== ""){
        lista.style.display = 'block';
        
        lista.style.opacity = '1';

        const text = input.value;
        const primeiraLetra = text.charAt(0).toUpperCase();
        const textResto = text.slice(1);
        const valueInput = primeiraLetra + textResto;

        const novoLi = document.createElement('li');
        lista.appendChild(novoLi);
        
        const label = document.createElement('label');
        label.classList.add('checkbox');

        const inputCheck = document.createElement('input');
        inputCheck.type = 'checkbox';
        label.appendChild(inputCheck);

        const spanBox = document.createElement('span');
        spanBox.classList.add('caixa');
        label.appendChild(spanBox);

                
        const spanTexto = document.createElement('span');
        spanTexto.classList.add('texto');
        spanTexto.style.cursor = 'pointer';
        spanTexto.textContent = valueInput;
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

            if(lista.children.length === 0){
                lista.style.display = 'none';
            }
        });

        label.appendChild(spanTrash);
        

        novoLi.appendChild(label);
        input.value = "";
    }
});
