import "regenerator-runtime/runtime";
import newMovie from "./newMovie";
import loginUser from "./user/loginUser";
import newUser from "./user/newUser";

console.log("SNAFU");

// $("body").prepend(newMovie());
$("body").prepend(loginUser());
