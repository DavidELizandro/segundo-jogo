//Variáveis das Imagens e Sons;
let imagemDaEstrada;
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;
let imagemDoAtor;

let somColisao
let somPontos
let somTrilha


function preload(){
 imagemDaEstrada = loadImage("Imagens/estrada.png");
 imagemDoCarro1 = loadImage("Imagens/carro-1.png");
 imagemDoCarro2 = loadImage("Imagens/carro-2.png");
 imagemDoCarro3 = loadImage("Imagens/carro-3.png");
 imagemDoAtor = loadImage("Imagens/ator-1.png");
 imagemDosCarros = [imagemDoCarro1,imagemDoCarro2,imagemDoCarro3,imagemDoCarro1,imagemDoCarro2,imagemDoCarro3];
 
 somColisao = loadSound("Sons/colidiu.mp3");
 somPontos = loadSound("Sons/pontos.wav");
 somTrilha = loadSound("Sons/trilha.mp3");
}