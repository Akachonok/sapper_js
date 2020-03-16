export default function closeModalForLosses(){
    document.querySelector('.btn3').onclick = function(){
        document.querySelector('.bgdModalForLosses').style.visibility = 'hidden';
    }
}
