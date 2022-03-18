// Identificacao dos campos do formulario
let txtNome = document.getElementById('txtNome');
let txtTel = document.getElementById('txtTel');
let selBarbeiros = document.getElementById('selBarbeiros');
let txtData = document.getElementById('txtData');
let txtHora = document.getElementById('txtHora');
let txtFoto = document.getElementById('txtFoto');
let btnReset = document.getElementById('btnReset');
let btnAgendar = document.getElementById('btnAgendar');
let divMae = document.getElementById('cards');


function criarCard(evento){
    console.log('Apertou');

    evento.preventDefault();

    const divCard = document.createElement('div');
    divCard.classList.add('card');

    const img = document.createElement('img');
    img.setAttribute('src', txtFoto.value);
    divCard.appendChild(img);

    const divTexto = document.createElement('div');
    divTexto.classList.add('cardTxt');

    const pNome = document.createElement('p');
    const nomeText = document.createTextNode(`Nome: ${txtNome.value}`);
    pNome.appendChild(nomeText);
    divTexto.appendChild(pNome);

    const pTel = document.createElement('p');
    const telText = document.createTextNode(`Telefone: ${txtTel.value}`);
    pTel.appendChild(telText);
    divTexto.appendChild(pTel);

    const pBarb = document.createElement('p');
    const barbText = document.createTextNode(`Barbeiro: ${selBarbeiros.value}`);
    pBarb.appendChild(barbText);
    divTexto.appendChild(pBarb);

    const pData = document.createElement('p');
    const dataText = document.createTextNode(`Data: ${txtData.value}`);
    pData.appendChild(dataText);
    divTexto.appendChild(pData);

    const pHora = document.createElement('p');
    const horaText = document.createTextNode(`Hora: ${txtHora.value}`);
    pHora.appendChild(horaText);
    divTexto.appendChild(pHora);

    divCard.appendChild(divTexto);
    divMae.appendChild(divCard);
}


btnAgendar.addEventListener('click', criarCard);