import './style.css';
import Score from './modules/score.js';
import loadSinglescore from './modules/renderPage.js';
import addScore from './modules/addScore.js';
import getScores from './modules/getScore.js';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#addscore').addEventListener('click', () => {
    if ((document.querySelector('#scorename').value !== '') && (document.querySelector('#yourscore').value !== '')) {
      const currentname = document.querySelector('#scorename').value;
      const currentscore = document.querySelector('#yourscore').value;
      const score = new Score(currentname, currentscore);
      addScore(score);
      loadSinglescore(score);
      document.querySelector('#scorename').value = '';
      document.querySelector('#yourscore').value = '';
    }
  });

  document.querySelector('#refreshbutton').addEventListener('click', () => {
    getScores();
  });
});