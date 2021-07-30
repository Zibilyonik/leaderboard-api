import { refreshList, addScore } from './dom.js';

const GAMEID = 'GcPGWQybZ6pDpnEKvkOv';
const LINK = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${GAMEID}/scores/`;
const getScores = async () => {
  const response = await fetch(LINK);
  return response.json();
};

const postScore = async (user, score) => {
  const scoreList = await fetch(LINK, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  console.log(scoreList.status);
  addScore(user, score);
};

export { getScores, postScore };