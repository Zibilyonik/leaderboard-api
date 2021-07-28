const markup = () => {
  const main = document.getElementById('Container');
  main.innerHTML = `<h1 class="h1 main-title col-12 text-center text-lg-left my-5 mx-auto">LEADERBOARD</h1>
  <div id="Scores" class="col-12 col-lg-5 mx-lg-3 row">
    <div class="scorebtn col justify-content-center row align-items-start mx-auto">
      <h2 class="subtitle h2 col-12 col-lg-7 text-lg-left mx-auto">Recent Scores</h2>
      <button type="submit" class="btn btn-primary col-5 mx-auto col-lg-4">Refresh</button>
    </div>
    <div id="ScoreContainer" class="col-12 my-3">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Mark</th>
            <td>10</td>
          </tr>
          <tr>
            <th scope="row">Jacob</th>
            <td>22</td>
          </tr>
          <tr>
            <th scope="row">Larry</th>
            <td>482</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div id="AddScore" class="col-12 col-lg-5 mx-3 row justify-content-center align-self-start">
    <h2 class="subtitle h2 col-12 mx-auto">Add your score</h2>
    <input type="text" name="Name" id="NameText" class="col-7 col-lg-4 mx-auto my-2">
    <div class="w-100"></div>
    <input type="text" name="Score" id="ScoreText" class="col-7 col-lg-4 mx-auto my-2">
    <div class="w-100"></div>
    <button type="submit" class="btn btn-primary col-4 mx-auto">Submit</button>
  </div>`;
};

export default markup;