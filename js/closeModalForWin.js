export default function closeModalForWin(){
    document.querySelector('.btn2').onclick = function(){
        document.querySelector('.bgdModalForWin').style.visibility = 'hidden';
    }
}
