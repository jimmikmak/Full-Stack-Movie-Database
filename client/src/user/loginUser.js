import newUser from "./newUser";
import newMovie from "../newMovie";

const form = `
<body>
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

<section class="section-features">
      <div class="row">
            <h2>Keep track of your favourites!</h2>
              <p class="long-copy">
              Welcome Cinephiles! We love movies, and we know you love movies, too. Why else would you be here! But how do keep track of which movies you've seen and want to see? Relax, Cinephile Personal Movie Database has got you covered.
              </p>
      </div>

      <div class="row">
        <div class="col span-1-of-4 box">
          <ion-icon name="library-outline" class="icon-big"></ion-icon>
            <h3>Custom libraries</h3>
              <p>
              Whether you watch a movie a week, or ten a day, CPMD gives you the option of saving custom movie libraries for easy reference. 
              </p>
      </div>
        <div class="col span-1-of-4 box">
          <ion-icon name="videocam-outline" class="icon-big"></ion-icon>
            <h3>Save movies in any format</h3>
              <p>   
              A movie is a movie, right? Sure, but you may like watching streamed content or go old school and throw in a DVD/Blu-ray. With CPMD you can easily record different movie formats.  
              </p>
      </div>      
        <div class="col span-1-of-4 box">
          <ion-icon name="star-outline" class="icon-big"></ion-icon>
            <h3>Wishlist categories</h3>
              <p>
              So many movies to watch, so little time! Don't worry, CPMD allows you to quickly save movies you haven't seen yet to your own personalised wishlist. You'll get around to them eventually...
              </p>
      </div>      
        <div class="col span-1-of-4 box">
          <ion-icon name="create-outline" class="icon-big"></ion-icon>
            <h3>Update and edit with ease</h3>
              <p>
              New movies are released every day and if you're like us, you want to watch them ALL!! If your taste in movies changes, add or delete them whenever you like. 
              </p>
        </div>
    </div>
</section>

<section class="section-movies">
      <ul class="movies-showcase">
        <li>
          <figure class="movie-poster">
            <img src="/client/images/back-to-the-future.jpg" alt="movie-poster 1">
          </figure>
        </li>
        <li>
          <figure class="movie-poster">
            <img src="/client/images/godfather-III.jpg" alt="movie-poster 2">
          </figure>
        </li>
        <li>
          <figure class="movie-poster">
            <img src="/client/images/jaws.jpg" alt="movie-poster 3">
          </figure>
        </li>
        <li>
          <figure class="movie-poster">
            <img src="/client/images/jurassic-park.jpg" alt="movie-poster 4">
          </figure>
        </li>
      </ul>

<ul class="movies-showcase">
        <li>
          <figure class="movie-poster">
            <img src="/client/images/Halloween.jpg" alt="movie-poster 5">
          </figure>
        </li>
        <li>
          <figure class="movie-poster">
            <img src="/client/images/star-wars-episode-iv.jpg" alt="movie-poster 6">
          </figure>
        </li>
        <li>
          <figure class="movie-poster">
            <img src="/client/images/pulp-fiction.jpg" alt="movie-poster 7">
          </figure>
        </li>
        <li>
          <figure class="movie-poster">
            <img src="/client/images/indiana-jones-and-the-temple-of-doom.jpg" alt="movie-poster 8">
          </figure>
        </li>
      </ul>


</section>

<form id="login-user">
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" placeholder="Please enter username" name="username">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" placeholder="Please enter password" name="password">
        </div>
        <button type="submit" class="btn btn-primary">Log-in</button>
    </form>
    <button id="register-new-user" class="btn btn-primary">Register new user</button>
</body>
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
