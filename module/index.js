//* module
//! types of module
//! common js => require()
// const x = require("./math");
// const { add, sub } = require("./math");
// console.log(add(12, 3));
// console.log(sub(12, 4));
// console.log(x.add(12, 3));
// console.log(x.sub(12, 4));

//! ES module => import/export keyword
// default import
// import y from "./ESmodule.js";

// named import
import { add, sub } from "./ESmodule.js";
console.log(add(12, 3));
console.log(sub(12, 4));

//! custom module
//! third party module => npm
//! inbuilt module => fs (file system), os, http, path

//* npm, pnpm, yarn
//! npm init => initialize empty node project
//! npm init -y => initialize empty node project
//! npm run <script_name>
//! npm install <package_name> || npm i <package_name>
//! npm install <package_name>@version || npm i <package_name>@version // for specific version
//! npm uninstall <package_name>


//* JSON => js object notation
let user = {
  name: "Romish",
  email: "row@gmail.com",
};
const json = JSON.stringify(user); //? => to convert into JSON
console.log(user);
console.log(json);
console.log(JSON.parse(json)); //? => convert back to the object
