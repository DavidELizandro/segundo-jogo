//Variáveis do Ator.
let xAtor = 75;
let yAtor = 366;
let wAtor = 30;
let hAtor = 30;
let colisao = false;

function mostraAtor(){
 image(imagemDoAtor, xAtor,yAtor,wAtor,hAtor);  
}

function movimentaAtor(){
  if(podeSeMover)
  if(keyIsDown(UP_ARROW)){ yAtor -= 3};
  if(keyIsDown(DOWN_ARROW)){  
  if(podeSeMover()){ yAtor += 3};
  }
}

function verificaColisaoAtor(){
  
  for(let i =0;i < imagemDosCarros.length;i ++ ){
  colisao = collideRectCircle(xCarros[i], yCarros[i], wCarros[i],     hCarros[i], xAtor, yAtor, 12,5);
 if(colisao){colidiu();meusPontos -=1;}
 if(meusPontos < 0){meusPontos = 0}
  
 }
}
function colidiu(){
 yAtor = 366
 xAtor = 75
  somColisao.play();
}

function voltaAtorAoInicio(){
  if(yAtor < 0){yAtor = 366}
}
  
function podeSeMover(){
 return (yAtor < 366);
}