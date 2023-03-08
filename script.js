const form = document.getElementById("form-atividade");
const imgAprovado = '<img scr="./images/aprovado.png" alt = "Emoji celebrando"/> '
const imgReprovado = '<img scr="./images/reprovado.png" alt = "Emoji decepcionado"/> '
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite a nota minima"));

let linha = '';

form.addEventListener ('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela ();
    atualizaMediaFinal();
});


function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade} já foi inserida!`)
    }

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFolat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade >= notaMinima ? 'imgAprovado': 'imgReprovado'}</td>`;
    linha += '</tr>';
    
    linha += linha;

    inputNomeAtividade = "";
    inputNotaAtividade = "";
}

function atualizaTabela (){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linha;
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById("media-final-valor").innerHTML = mediaFinal;
    document.getElementById("media-final-resultado").innerHTML = mediaFinal >= notaMinima ? 'spanAprovado' : 'spanReprovado';
    
}

function calculaMediaFinal (){
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}