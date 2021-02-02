import "regenerator-runtime/runtime";
import loginUser from "./user/loginUser";

console.log("SNAFU");

$("body").prepend(loginUser());
