const next = document.querySelector('div._aaqh > button._abl-');
var counter =0;

function doLike(){
  const like_btn = document.querySelector('span > button._abl-');
  const isLiked = document.querySelector('button._abl- > div._abm0._abm1 > svg._ab6-').ariaLabel
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
