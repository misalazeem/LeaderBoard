import Score from './score.js';

class ScoreList {
  constructor(object = []){
    this.scorelist = object;
  }
    
  addScore(name, score) {
    const add = new Score(name, score);
    this.scorelist.push(add);
  }
}
export default ScoreList;