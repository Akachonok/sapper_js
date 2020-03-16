import createField from './createField';
import setNumbers from './setNumbers';
import setBombs from './setBombs';
import gameController from './gameController';
import setflags from './setflags';
import closeModalForWin from './closeModalForWin';
import restartGame from './restartGame';
import restartGameForLosses from './restartGameForLosses';
import closeModalForLosses from './closeModalForLosses';

createField();
setBombs();
setNumbers();

gameController();
closeModalForWin();
closeModalForLosses();
restartGame();
restartGameForLosses();

setflags();
