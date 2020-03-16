let sapperDiv = document.querySelector('.sapperDiv');
let flagNumber = document.querySelector('.flagNumber');
document.querySelector('button').onclick = function(){
    location.reload();
}

let sapper = {
  arr : [],
  bomb: 30,
  size: 15,
  flag: 30,
};
createPole();

function createPole(){
  for (let i = 0; i < sapper.size; i++) {
    let temp = document.createElement('div');
    sapperDiv.appendChild(temp)
    let tempMas = [];
    for(let k = 0; k < sapper.size; k++){
      let div = document.createElement('div');
      div.className = 'DIv';
      div.id = '';
      temp.appendChild(div);
      tempMas.push(div);
    }
    sapper.arr.push(tempMas)
  }
  flagNumber.innerHTML = `Кол-во флажков осталось: ${sapper.flag}`;
  createBomb();
}

function createBomb(){
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
  createNumber();
}

function createNumber(){
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

function OpenBomb(){
    document.querySelector('.sapperDiv').style.pointerEvents = "none";
    let mas =  document.querySelectorAll('.bomb');
    for(let key in mas){
        console.log(mas[key]);
        let img = document.createElement('img');
        img.src = 'img/bomb.png';
        mas[key].appendChild(img);
    }
    
}

for(let i = 0; i < sapper.arr.length; i++){
  for(let j = 0; j < sapper.arr.length; j++){
    sapper.arr[i][j].onclick = function(){
       if (sapper.arr[i][j].classList.contains('bomb')){
            alert('ТВОЯ ИГРА ОКОНЧЕНА');
            OpenBomb();
       }
       if(sapper.arr[i][j].id > 0){
           sapper.arr[i][j].innerHTML = sapper.arr[i][j].id;
           sapper.arr[i][j].classList.add('number');
           Win();
       }
       if(sapper.arr[i][j].id == 0 && sapper.arr[i][j].classList.contains != 'bomb'){
           sapper.arr[i][j].classList.add('miss');
           rec(i,j)
       }
    }
  }
}
function rec(i,j){
    if(i+1 != 15 ){
        if(sapper.arr[i+1][j].classList.contains('flag')){

        }
        else if(sapper.arr[i+1][j].id == 0 && sapper.arr[i+1][j].classList.contains != 'bomb'){ 
            if(sapper.arr[i+1][j].classList.contains('miss')){ 
            }else{
                sapper.arr[i+1][j].classList.add('miss');
                rec(i+1,j)
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
                rec(i,j+1)
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
                rec(i-1,j)
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
                rec(i,j-1)
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
                rec(i+1,j+1)
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
                rec(i-1,j-1)
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
                    rec(i-1,j+1)
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
                rec(i+1,j-1)
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
                    alert('Win')
                    document.querySelector('.sapperDiv').style.pointerEvents = "none";
                }
            }
        }
    }
}