const addScore = () => {
  const container = document.getElementById('ScoreList');
  const newList = document.createElement('tr');
  const nameInput = document.getElementById('NameText').value;
  const scoreInput = document.getElementById('ScoreText').value;
  newList.innerHTML = `<th scope="row">${nameInput}</th>
  <td>${scoreInput}</td>`;
  container.insertBefore(newList, container.firstChild);
};