const next = document.querySelector('a.coreSpriteRightPaginationArrow');
var counter =0;

function doLike(){
  const like_btn = document.querySelector('article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button');
  const isLiked = document.querySelector('article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button > div.QBdPU > span> svg').ariaLabel;
  if (like_btn){
    if (isLiked === 'Curtir' ){
      like_btn.click();
      counter++;
      console.log(`Você curtiu ${counter} posts`);
    }
    else
    console.log('imagem já curtida');
  }
  next.click();
}

(function loop(){
  setTimeout(()=>{
    doLike();
    loop();
  }, 10000)
}())
