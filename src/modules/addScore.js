const addScore = async (player) => {
  const APIurl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YVVn3hOrroOzC97v3FwR/scores';
  const userscore = {
    user: player.user,
    score: player.score,
  };
  await fetch(APIurl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userscore),
  });
};

export default addScore;