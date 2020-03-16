import {sapper} from './settingGame';
function setNumbers(){
    for(let i = 0; i < sapper.arr.length; i++){
        for(let j = 0; j < sapper.arr.length; j++){
           let tempCount = 0;

           //вертикальные и горизонтальные
            if(i+1 != 15){
                if((sapper.arr[i+1][j].classList.contains('bomb'))){    
                    tempCount++;    
                }
            }
           if(j+1 != 15){
                if((sapper.arr[i][j+1].classList.contains('bomb'))){    
                    tempCount++;
                }
           }
           if(i-1 != -1){
                if(sapper.arr[i-1][j].classList.contains('bomb')){    
                    tempCount++;
                }
           }
           if(j-1 != -1){
                if(sapper.arr[i][j-1].classList.contains('bomb')){    
                    tempCount++;
                }
           }

           //Сикась накась
           if(i+1 != 15 && j+1 != 15){
                if(sapper.arr[i+1][j+1].classList.contains('bomb')){    
                    tempCount++;
                }
           }
           if(i-1 != -1 && j-1 != -1){
                if(sapper.arr[i-1][j-1].classList.contains('bomb')){    
                    tempCount++;
                }
           }
           if (i-1 != -1 && j+1 != 15){
                if(sapper.arr[i-1][j+1].classList.contains('bomb')){    
                    tempCount++;
                }
           }
           if(i+1 != 15 && j-1 != -1){
                if(sapper.arr[i+1][j-1].classList.contains('bomb')){    
                    tempCount++;
                }
           }
           sapper.arr[i][j].id = tempCount;
        
           if(sapper.arr[i][j].classList.contains('bomb')){ 
            sapper.arr[i][j].id = 0;
           }
        }
    }
}

export default setNumbers;