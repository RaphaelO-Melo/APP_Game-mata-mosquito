//Variáveis referentes à tela de jogo
var largura_tela,altura_tela

//Função que atualiza o tamanho da tela do jogo
function redimensionaTela(){
    //TODO: Obtém a largura e altura da tela disponível
    largura_tela = window.innerWidth
    altura_tela = window.innerHeight
    //Print no console das novas dimensões
    console.log('Tamanho de tela atualizado: ' + altura_tela + " x " + largura_tela)
}

//Função que sorteia uma posição para o mosquito
function sorteiaPosicao(){
    //Sorteia um número para x se baseando nos limites da tela e o tamanho da imagem
    var pos_x = Math.floor(Math.random() * largura_tela) - 50;
    //Sorteia um número para y se baseando nos limites da tela e o tamanho da imagem
    var pos_y = Math.floor(Math.random() * altura_tela) - 50;

    //Verifica se os valores são menores que zero para tratar
    pos_x = pos_x < 0 ? 0 : pos_x
    pos_y = pos_y < 0 ? 0 : pos_y

    //Cria o mosquito nessa posição sorteada
    criaMosquito(pos_x, pos_y);
}

//Função que cria um mosquito com base em um valor x e y
function criaMosquito(pos_x, pos_y){
    //Cria o objeto imagem e associa a uma variável
    var mosquito = document.createElement('img')

    //Após a criação, edita os atributos

    //Define o caminho
    mosquito.src = 'src/images/mosquito.png'
    //Define a classe
    mosquito.className = 'mosquito_1'

    //Define a posição x e y
    mosquito.style.left = pos_x + 'px'
    mosquito.style.top = pos_y + 'px'

    //Adiciona o elemento ao body
    document.body.appendChild(mosquito)
}


//! Execução inicial do jogo

//Atualiza tamanho da tela
redimensionaTela();


