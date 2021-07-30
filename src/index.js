import './style.css';
import { getScores, postScore } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
  getScores();
});
document.getElementById('SubmitButton').addEventListener('click', () => {
  const name = document.getElementById('NameText').value;
  const score = document.getElementById('ScoreText').value;
  postScore(name, score);
});