import './style.css';
import ScoreList from './modules/scoremethods.js';

const scorelist = new ScoreList();
const score = document.querySelector('.table');
function loadList() {
  score.innerHTML = '';
  if (scorelist.scorelist.length !== 0) {
    scorelist.scorelist.forEach((score) => {
      const row = document.createElement('tr');
      const item = document.createElement('th');
      item.value = `${score.name}: ${score.score}`;
      row.appendChild(item);
      score.appendChild(row);
    });
  }
}

function loadSinglescore() {
  const index = scorelist.scorelist.length - 1;
  const row = document.createElement('tr');
  const item = document.createElement('th');
  item.innerHTML = `${scorelist.scorelist[index].name}: ${scorelist.scorelist[index].score}`;
  row.appendChild(item);
  score.appendChild(row);
}

function onPageLoad() {
  loadList();
}

document.addEventListener('DOMContentLoaded', () => {
  onPageLoad();

  document.querySelector('#addscore').addEventListener('click', () => {
    if ((document.querySelector('#scorename').value !== '') && (document.querySelector('#yourscore').value !== '')) {
      const currentname = document.querySelector('#scorename').value;
      const currentscore = document.querySelector('#yourscore').value;
      scorelist.addScore(currentname, currentscore);
      loadSinglescore();
      document.querySelector('#scorename').value = '';
      document.querySelector('#yourscore').value = '';
    }
  });
});