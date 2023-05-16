import loadSinglescore from './renderPage.js';

const getScores = async () => {
  const APIurl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YVVn3hOrroOzC97v3FwR/scores';
  const response = await fetch(APIurl);
  const scores = (await response.json()).result;
  const scoreDOM = document.querySelector('.table');
  scoreDOM.innerHTML = '';
  scores.forEach((score) => {
    loadSinglescore(score);
  });
};

export default getScores;