import movieList from "./movieList";

const form = `
<form id="form-movie">
  <div class="form-group">
    <label for="genre">Genre</label>
    <input type="text" class="form-control" id="genre" placeholder="Enter a movie genre" name="genre">
  </div>
  <div class="form-group">
    <label for="title">Title</label>
    <input type="text" class="form-control" id="title" placeholder="Enter a movie title" name="title">
  </div>
  <div class="form-group">
    <label for ="decade">Decade</label>
    <input type="text" class="form-control" id="decade" placeholder="Enter movie decade" name="decade">
  </div>
  <fieldset class="form-group">
    <legend class="col-form-label">Academy Award?</legend>
      <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" id="academyAwardYes" name="academyAward" value="true">
    <label class="form-check-label" for="academyAwardYes">Yes</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" id="academyAwardNo" name="academyAward" value="false">
    <label class="form-check-label" for="academyAwardNo">No</label>
    </div>
  </fieldset>
  <button type="button" id="save-movie" class="btn btn-outline-secondary">Save movie</button>
</form>
`;

const newMovie = () => {
  $("body").prepend(movieList());
  $(document).on("click", "#save-movie", async (e) => {
    e.preventDefault();
    console.log($("#genre").val());
    console.log($("#title").val());
    console.log($("#decade").val());
    console.log($(`input[name="academyAward"]:checked`).val());

    const requestBody = {
      genre: $("#genre").val(),
      title: $("#title").val(),
      decade: $("#decade").val(),
      academyAward: $(`input[name="academyAward"]:checked`).val(),
    };

    const response = await $.ajax({
      type: "POST",
      url: "http://localhost:1234/api/movies/new-movie",
      contentType: "application/json",
      data: JSON.stringify(requestBody),
    });

    // movieList();
    $("#new-movie-list").append(`<li>${$("#title").val()}</li>`);
    console.log("response", response);
  });
  return form;
};

export default newMovie;
