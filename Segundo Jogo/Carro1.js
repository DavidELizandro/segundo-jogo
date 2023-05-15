//Variáveis dos Carros
let xCarros = [600,600,600,600,600,600];
let yCarros = [40,96,150,210,270,318];
let wCarros = [50,50,50,50,50,50];
let hCarros = [40,40,40,40,40,40];
let velocidadeCarros = [2,2.5,3.2,5,3.3,2.3];

function mostraCarro(){
 for(let i = 0; i < imagemDosCarros.length; i ++)
 image(imagemDosCarros[i],xCarros[i],yCarros[i],wCarros[i],hCarros[i]);
}

function movimentaCarro(){
 for(let i = 0; i < xCarros.length; i ++)
 xCarros[i] -= velocidadeCarros[i];
}

function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i< xCarros.length; i ++)
  if(xCarros[i] < -50){xCarros[i] = 600}
}