const moviesHtml = `
<ul id="new-movie-list">

</ul>
`;

const movieList = () => {
  $.ajax({
    type: "GET",
    url: "/api/movies/movie-list",
    contentType: "application/json",
  }).then((movies) => {
    console.log("movies:", movies);
    let movieListHtml = "";
    movies.forEach((movie) => {
      movieListHtml += `<li>${movie.title}</li>`;
    });
    $("#new-movie-list").empty();
    $("#new-movie-list").append(movieListHtml);
  });
  return moviesHtml;
};

export default movieList;
