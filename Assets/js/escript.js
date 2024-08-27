const entrada = document.getElementById('entrada'); //informação do text área de entrada
const saida = document.getElementById('saida') // local ara aonde vai sair a informação criptografada ou descriptografada
const botaotransformar = document.getElementById('transformar')
const botaoCopiar = document.getElementById('copiar')
const botaoDescriptografar = document.getElementById('descriptografar');
const containerCriptDescript = document.getElementById("containerCriptDescript")

// função para embaralhar as letras
function criptografarTexto(texto){
    return texto.split('').reverse( ).join(''); //inverte a ordem das letras com o reverse
}

// função para transformar o texto
function transformarTexto(){
    const textoEntrada = entrada.value; // peguei o valor que foi colocado dentro do textarea
    const textoTransformado = criptografarTexto(textoEntrada); //coloquei ele para ser transformado na função que fiz para "sortear" e "embaralhar"
    saida.value = textoTransformado
}

function copiarTexto(){
    saida.select();
    document.execCommand('copy')
    alert("Texto copiado para área de transferência")
 
}

function descriptografarTexto() {
    const textoCriptografado = entrada.value;
    const textoOriginal = criptografarTexto(textoCriptografado); // Inverte novamente para obter o texto original
    saida.value = textoOriginal;
}

function verificarCampoVazio(){
    if(saida.value.trim() === ""){
        saida.value = "Este campo está vazio, Escreva a mensagem acima e depois click em criptografar ou descriptografar!"
        saida.style.textAlign ="center";
        saida.style.textOverflow = "auto"
        saida.style.paddingTop = "5%";
        saida.style.height = "100px"
        botaoCopiar.style.display ="none"
        containerCriptDescript.style.height = "133px"
    }
}

botaotransformar.addEventListener('click', transformarTexto)
botaoCopiar.addEventListener('click', copiarTexto)
botaoDescriptografar.addEventListener('click', descriptografarTexto);

verificarCampoVazio();

