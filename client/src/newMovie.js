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
      <input class="form-check-input" type="radio" id="academyAwardYes" name="academyAwardYes" value="true">
    <label class="form-check-label" for="academyAwardYes">Yes</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" id="academyAwardNo" name="academyAwardNo" value="true">
    <label class="form-check-label" for="academyAwardNo">No</label>
    </div>
  </fieldset>
  <button type="submit" class="btn btn-primary">Save</button>
</form>
`;

const newMovie = () => {
  $(document).on('submit, "form#form-movie', async (e) => {
    e.preventDefault();
    console.log($("#genre").val());
    console.log($("#title").val());
    console.log($("#lead-actor").val());
    console.log($("#decade").val());
    console.log($(`input[name="Academy Award winner"]:checked`).val());
    console.log("Data entered");

    const requestBody = {
      genre: $("#genre").val(),
      title: $("#title").val(),
      leadActor: $("#lead-actor").val(),
      decade: $("#decade").val(),
      academyAwardWinner: $(`input[name="Academy Award winner"]:checked`).val(),
    };

    const response = await $.ajax({
      type: "POST",
      url: "http://localhost:1234/movies/new-movie",
      contentType: "application/json",
      data: JSON.stringify(requestBody),
    });
    console.log("response", response);
    console.log(`This is the response I get back!: ${response}`);
  });

  return form;
};

export default newMovie;
