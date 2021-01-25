import loginUser from "./loginUser";

const form = `

    <form id="new-user">
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
`;

const newUser = () => {
  $(document).on("submit", "#new-user", async (event) => {
    console.log("event", event);
    event.preventDefault();

    const formData = {
      username: $("input[name='username']").val(),
      password: $("input[name='password']").val(),
    };

    try {
      const response = await $.ajax({
        type: "POST",
        url: "/api/users/register",
        contentType: "application/json",
        data: JSON.stringify(formData),
      });

      $("body").empty();
      $("body").append(loginUser());
    } catch (err) {
      $("body").append("<div>Could not create user</div>");
    }
  });
  return form;
};

export default newUser;
