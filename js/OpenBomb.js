function OpenBomb(){
    document.querySelector('.sapperDiv').style.pointerEvents = "none";
    let tepmArrayCreateBombs =  document.querySelectorAll('.bomb');
    for(let key in tepmArrayCreateBombs){
        console.log(tepmArrayCreateBombs[key]);
        let img = document.createElement('img');
        img.src = 'img/bomb.png';
        tepmArrayCreateBombs[key].appendChild(img);
    }
    
}

export default OpenBomb;