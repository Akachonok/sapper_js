import {sapper} from './settingGame';

function Win(){
    let count = sapper.arr.length*sapper.arr.length;
    for(let i = 0; i < sapper.arr.length; i++){
        for(let j = 0; j < sapper.arr.length; j++){
            if(sapper.arr[i][j].classList.contains('bomb') && sapper.arr[i][j].classList.contains('flag')){
                count--
            }
            if(sapper.arr[i][j].classList.contains('miss') || sapper.arr[i][j].classList.contains('number')){
                count--;      
                if(count == 0){
                    document.querySelector('.bgdModalForWin').style.visibility = 'visible';
                    document.querySelector('.sapperDiv').style.pointerEvents = "none";
                }
            }
        }
    }
}
export default Win;