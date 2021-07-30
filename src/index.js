import './style.css';
import { getScores, postScore } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
  getScores();
});
document.getElementById('SubmitButton').addEventListener('click', () => {
  const user = document.getElementById('UserText').value;
  const score = document.getElementById('ScoreText').value;
  postScore(user, score);
});
document.getElementById('RefreshButton').addEventListener('click', getScores);