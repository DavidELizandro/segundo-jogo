let meusPontos = 0;

function incluiPlacar(){
  textAlign(CENTER);
  textSize(30);
  fill(color(65,105,225));
  text(meusPontos,width / 4, 28);
  
}
function marcarPontos(){
 if(yAtor < 0){meusPontos +=1; somPontos.play()}

}
