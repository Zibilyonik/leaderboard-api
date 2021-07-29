const GAMEID = 'GcPGWQybZ6pDpnEKvkOv';
const scoreList = [];
function getScores(gameId) {
  fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
