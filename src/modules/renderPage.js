const score = document.querySelector('.table');
function loadSinglescore(player) {
  const row = document.createElement('tr');
  const item = document.createElement('th');
  item.innerHTML = `${player.user}: ${player.score}`;
  row.appendChild(item);
  score.appendChild(row);
}

export default loadSinglescore;