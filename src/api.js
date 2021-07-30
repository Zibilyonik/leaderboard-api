import axios from 'axios';
import { refreshList, addScore } from './dom.js';

const GAMEID = 'GcPGWQybZ6pDpnEKvkOv';
const LINK = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${GAMEID}/scores`;
const getScores = async () => {
  await axios.get(LINK).then((response) => {
    refreshList(response.data.result);
  });
};

const postScore = async (user, score) => {
  await fetch(LINK, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  addScore(user, score);
};

export { getScores, postScore };