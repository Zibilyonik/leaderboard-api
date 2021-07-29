const GAMEID = 'GcPGWQybZ6pDpnEKvkOv';
const LINK = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${GAMEID}/scores/`;
const getScores = async () => {
  const scoreList = await fetch(LINK, {
    method: 'GET',
  });
  console.log(JSON.parse(scoreList.json));
  return JSON.parse(scoreList.json);
};

const postScores = async (name, score) => {
  const scoreList = await fetch(LINK, {
    method: 'POST',
    body: JSON.stringify({
      name,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  console.log(JSON.parse(scoreList.json));
  return JSON.parse(scoreList.json);
};

export default { getScores, postScores };