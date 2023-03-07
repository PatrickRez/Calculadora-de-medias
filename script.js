const form = document.getElementById("form-atividade");
const imgAprovado = '<img scr="./images/aprovado.png" alt = "Emoji celebrando"/> '
const imgReprovado = '<img scr="./images/reprovado.png" alt = "Emoji decepcionado"/> '
let linhas = '';

form.addEventListener ('submit', function(e){
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade >= 7 ? 'imgAprovado': 'imgReprovado'}</td>`;
    linha += '</tr>';
    
    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML= linha

    inputNomeAtividade = "";
    inputNotaAtividade = "";
});