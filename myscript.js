function search() {
  event.preventDefault(); 

  let m1 = document.getElementById("m1");
  let movieName = m1.value.trim();

  if (movieName === "") {
    alert("Please enter a movie name");
    return;
  }

  let url = "https://www.omdbapi.com/?t=" + encodeURIComponent(movieName) + "&apikey=e06fcdcb";

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.Response === "False") {
        alert("Movie not found");
        return;
      }

      // Save data in localStorage
      localStorage.setItem("title", data.Title);
      localStorage.setItem("year", data.Year);
      localStorage.setItem("genre", data.Genre);
      localStorage.setItem("director", data.Director);
      localStorage.setItem("writer", data.Writer);
      localStorage.setItem("actors", data.Actors);
      localStorage.setItem("plot", data.Plot);
      localStorage.setItem("language", data.Language);
      localStorage.setItem("awards", data.Awards);

      window.location.href = "detail.html";
    })
    .catch(err => {
      alert("Error: " + err);
    });
}
