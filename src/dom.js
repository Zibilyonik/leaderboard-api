const addScore = (user, score) => {
  const container = document.getElementById('ScoreList');
  const newList = document.createElement('tr');
  newList.innerHTML = `<th scope="row">${user}</th>
  <td>${score}</td>`;
  container.insertBefore(newList, container.firstChild);
};

const refreshList = (arr) => {
  document.getElementById('ScoreList').innerHTML = '';
  if (arr.length > 0) {
    arr.forEach((element) => {
      addScore(element.user, element.score);
    });
  }
};

export { addScore, refreshList };