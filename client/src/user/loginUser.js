import newUser from "./newUser";
import newMovie from "../newMovie";

const form = `
<header>
    <nav>
      <div class="row">
        <img src="/client/images/vector60-1238-01.png" alt="movie-ticket logo" class="logo">
        <ul class="main-nav">
          <li><a href="#">Custom library</a></li>
          <li><a href="#">Wishlist</a></li>
          <li><a href="#">Movie Checklist</a></li>
          <li><a href="#">Edit Database</a></li>
        </ul>
      </div>
    </nav>
    <div class="hero-text-box">
      <h1>Cinephile Personal Movie Database</h1>
      <a class="btn btn-full" href="#">Log-in</a>
      <a class="btn btn-ghost" href="#">Save movie</a>
    </div>
  </header>
    <form id="login-user">
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" placeholder="Please enter username" name="username">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" placeholder="Please enter password" name="password">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <button id="register-new-user" class="btn btn-primary">Register new user</button>
`;

const loginUser = () => {
  $(document).on("submit", "#login-user", async (event) => {
    event.preventDefault();

    const formData = {
      username: $("input[name='username']").val(),
      password: $("input[name='password']").val(),
    };

    try {
      const response = await $.ajax({
        type: "POST",
        url: "/api/users/login",
        contentType: "application/json",
        data: JSON.stringify(formData),
      });

      $("body").empty();
      $("body").append(newMovie());
    } catch (err) {
      $("body").append("<div>Invalid user/pass provided!</div>");
    }
  });
  return form;
};

$(document).on("click", "#register-new-user", () => {
  $("body").empty();
  $("body").append(newUser());
});

export default loginUser;
