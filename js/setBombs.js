import {sapper} from './settingGame';
function setBombs(){
    for(let b = 0; b < sapper.bomb; b++){
    if(sapper.size == sapper.arr.length){
      sapper.size = sapper.size-1;
    }
    let randomNumber1 = +((0+Math.random() * sapper.size)).toFixed();
    let randomNumber2 = +((0+Math.random() * sapper.size)).toFixed();
    if(sapper.arr[randomNumber1][randomNumber2].classList.contains('bomb')){
        b--
    } else{
        sapper.arr[randomNumber1][randomNumber2].classList.add('bomb');
    }   
  }
}
export default setBombs;