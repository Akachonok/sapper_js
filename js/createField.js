import {sapper, sapperDiv, flagNumber} from './settingGame';
function createField(){
    for (let i = 0; i < sapper.size; i++) {
      let tempBlockDiv = document.createElement('div');
      sapperDiv.appendChild(tempBlockDiv)
      let tempArray = [];
      for(let k = 0; k < sapper.size; k++){
        let div = document.createElement('div');
        div.className = 'DIv';
        div.id = '';
        tempBlockDiv.appendChild(div);
        tempArray.push(div);
      }
      sapper.arr.push(tempArray)
    }
    flagNumber.innerHTML = `Кол-во флажков осталось: ${sapper.flag}`;
}

export default  createField;