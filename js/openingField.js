import {sapper} from './settingGame';
function openingField(i,j){
    if(i+1 != 15 ){
        if(sapper.arr[i+1][j].classList.contains('flag')){

        }
        else if(sapper.arr[i+1][j].id == 0 && sapper.arr[i+1][j].classList.contains != 'bomb'){ 
            if(sapper.arr[i+1][j].classList.contains('miss')){ 
            }else{
                sapper.arr[i+1][j].classList.add('miss');
                openingField(i+1,j)
            }
        }

        if(sapper.arr[i+1][j].id > 0){
            sapper.arr[i+1][j].innerHTML = sapper.arr[i+1][j].id;
            sapper.arr[i+1][j].classList.add('number');
        }
        
    } 

    if(j+1 != 15){
        if(sapper.arr[i][j+1].classList.contains('flag')){

        }
        else if((sapper.arr[i][j+1].id == 0 && sapper.arr[i][j+1].classList.contains != 'bomb')){ 
            if(sapper.arr[i][j+1].classList.contains('miss')){
            }else{
                sapper.arr[i][j+1].classList.add('miss');
                openingField(i,j+1)
            } 
        }
        if(sapper.arr[i][j+1].id > 0){
            sapper.arr[i][j+1].innerHTML = sapper.arr[i][j+1].id;
            sapper.arr[i][j+1].classList.add('number');
        }
   } 

   if(i-1 != -1){
       if(sapper.arr[i-1][j].classList.contains('flag')){

       }
        else if(sapper.arr[i-1][j].id == 0 && sapper.arr[i-1][j].classList.contains != 'bomb'){  
            if(sapper.arr[i-1][j].classList.contains('miss')){
            }else{
                sapper.arr[i-1][j].classList.add('miss');
                openingField(i-1,j)
            }    
        }

        if(sapper.arr[i-1][j].id > 0){
            sapper.arr[i-1][j].innerHTML = sapper.arr[i-1][j].id;
            sapper.arr[i-1][j].classList.add('number');
        }
   }

   if(j-1 != -1){
       if(sapper.arr[i][j-1].classList.contains('flag')){

       }
       else if(sapper.arr[i][j-1].id == 0 && sapper.arr[i][j-1].classList.contains != 'bomb'){   
            if(sapper.arr[i][j-1].classList.contains('miss')){
            }else{
                sapper.arr[i][j-1].classList.add('miss');
                openingField(i,j-1)
            }
        }
        if(sapper.arr[i][j-1].id > 0){
            sapper.arr[i][j-1].innerHTML = sapper.arr[i][j-1].id;
            sapper.arr[i][j-1].classList.add('number');
        }
   }
   
   //Сикась накась
   if(i+1 != 15 && j+1 != 15){
       if(sapper.arr[i+1][j+1].classList.contains('flag')){

       }
        else if(sapper.arr[i+1][j+1].id == 0 && sapper.arr[i+1][j+1].classList.contains != 'bomb') { 
            if(sapper.arr[i+1][j+1].classList.contains('miss')){
            }else{
                sapper.arr[i+1][j+1].classList.add('miss');
                openingField(i+1,j+1)
            }
        }
        if(sapper.arr[i+1][j+1].id > 0){
            sapper.arr[i+1][j+1].innerHTML = sapper.arr[i+1][j+1].id;
            sapper.arr[i+1][j+1].classList.add('number');
        }
   }

   if(i-1 != -1 && j-1 != -1){
       if(sapper.arr[i-1][j-1].classList.contains('flag')){

       }
       else if(sapper.arr[i-1][j-1].id == 0 && sapper.arr[i-1][j-1].classList.contains != 'bomb'){
            if(sapper.arr[i-1][j-1].classList.contains('miss')){
            }else{
                sapper.arr[i-1][j-1].classList.add('miss');
                openingField(i-1,j-1)
            }    
        }
        if(sapper.arr[i-1][j-1].id > 0){
            sapper.arr[i-1][j-1].innerHTML = sapper.arr[i-1][j-1].id;
            sapper.arr[i-1][j-1].classList.add('number');
        }
   }

   if (i-1 != -1 && j+1 != 15){
       if(sapper.arr[i-1][j+1].classList.contains('flag')){

       }
       else if(sapper.arr[i-1][j+1].id == 0 && sapper.arr[i-1][j+1].classList.contains != 'bomb'){   
            if(sapper.arr[i-1][j+1].classList.contains('miss')){
                }else{
                    sapper.arr[i-1][j+1].classList.add('miss');
                    openingField(i-1,j+1)
                } 
        }
        if(sapper.arr[i-1][j+1].id > 0){
            sapper.arr[i-1][j+1].innerHTML = sapper.arr[i-1][j+1].id;
            sapper.arr[i-1][j+1].classList.add('number');
        }
        
   }
   
   if(i+1 != 15 && j-1 != -1){
       if(sapper.arr[i+1][j-1].classList.contains('flag')){

       }
       else  if(sapper.arr[i+1][j-1].id == 0 && sapper.arr[i+1][j-1].classList.contains != 'bomb'){    
            if(sapper.arr[i+1][j-1].classList.contains('miss')){
            }else{
                sapper.arr[i+1][j-1].classList.add('miss');
                openingField(i+1,j-1)
            }        
        }
        if(sapper.arr[i+1][j-1].id > 0){
            sapper.arr[i+1][j-1].innerHTML = sapper.arr[i+1][j-1].id;
            sapper.arr[i+1][j-1].classList.add('number');
        }   
        
   }
   for(let i = 0; i < sapper.arr.length; i++){
        for(let j = 0; j < sapper.arr.length; j++){
            if(sapper.arr[i][j].classList.contains('flag')){
                sapper.arr[i][j].classList.remove('number');
                sapper.arr[i][j].innerHTML = '';
            }
        }
   }
}

export default openingField;
