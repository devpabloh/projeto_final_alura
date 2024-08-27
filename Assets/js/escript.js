const entrada = document.getElementById('entrada'); //informação do text área de entrada
const saida = document.getElementById('saida') // local ara aonde vai sair a informação criptografada ou descriptografada
const botaotransformar = document.getElementById('transformar')
const botaoCopiar = document.getElementById('copiar')

// função para embaralhar as letras
function embaralharTexto(texto){
    return texto.split('').sort(()=> Math.random() - 0.5).join('');
}

// função para transformar o texto
function transformarTexto(){
    const textoEntrada = entrada.value; // peguei o valor que foi colocado dentro do textarea
    const textoTransformado = embaralharTexto(textoEntrada); //coloquei ele para ser transformado na função que fiz para "sortear" e "embaralhar"
    saida.value = textoTransformado
}

function copiarTexto(){
    saida.select();
    document.execCommand('copy')
    alert("Texto copiado para área de transferência")
}

botaotransformar.addEventListener('click', transformarTexto)
botaoCopiar.addEventListener('click', copiarTexto)

