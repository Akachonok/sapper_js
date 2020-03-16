import {sapper, flagNumber} from './settingGame';
import Win from './Win';

function setflags(){
    for(let i = 0; i < sapper.arr.length; i++){
        for(let j = 0; j < sapper.arr.length; j++){
            sapper.arr[i][j].oncontextmenu = function(e){
               e.preventDefault();
               if(sapper.arr[i][j].classList.contains('number') || sapper.arr[i][j].classList.contains('miss')){
                 return
               } else {
                    if(sapper.arr[i][j].classList.contains('flag')){
                        sapper.arr[i][j].classList.remove('flag');
                        sapper.flag++;
                    }else{
                        if(sapper.flag >=1){
                            sapper.arr[i][j].classList.add('flag');
                            sapper.flag--;
                        }
                    }
                        flagNumber.innerHTML = `Кол-во флажков осталось: ${sapper.flag}`;
                    if(sapper.flag == 0){
                        Win();
                    }
               }    
            }
        }
    }
}

export default setflags;