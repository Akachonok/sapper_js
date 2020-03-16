import {sapper} from './settingGame';
import OpenBomb from './OpenBomb';
import openingField from './openingField';
import Win from './Win';

function gameController(){
    for(let i = 0; i < sapper.arr.length; i++){
        for(let j = 0; j < sapper.arr.length; j++){
          sapper.arr[i][j].onclick = function(){
             if (sapper.arr[i][j].classList.contains('bomb')){
                  if(sapper.arr[i][j].classList.contains('flag')){
                    return;
                  }else{
                    document.querySelector('.bgdModalForLosses').style.visibility = 'visible';
                    OpenBomb();
                  }
             }
             if(sapper.arr[i][j].id > 0){
                 sapper.arr[i][j].innerHTML = sapper.arr[i][j].id;
                 sapper.arr[i][j].classList.add('number');
                 Win();
             }
             if(sapper.arr[i][j].id == 0 && sapper.arr[i][j].classList.contains != 'bomb'){
                 sapper.arr[i][j].classList.add('miss');
                 openingField(i,j)
             }
          }
        }
    }
}

export default gameController;