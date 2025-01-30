let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
  
    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    amigos.push(nome);
    input.value = '';
    atualizarLista();
}

const input = document.getElementById('amigo');
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.className = 'name-item';

        const buttonRemove = document.createElement('button');
        buttonRemove.textContent = 'Remover';
        buttonRemove.className = 'button-remove';
        buttonRemove.onclick = () => removerAmigo(index);

        li.appendChild(buttonRemove);
        listaAmigos.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para realizar o sorteio.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    resultado.innerHTML = `<li class="result-item">O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
