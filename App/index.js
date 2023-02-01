/** @format */

const path = require("path");
const os = require("os");

console.log(os.userInfo());
console.log(os.type());
console.log(os.release());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.uptime());

const filepath = path.join("new folder", "subfolder", "text.txt");
console.log(filepath);

const base = path.basename(filepath);
console.log(base);

const resolves = path.resolve(
  __dirname,
  path.join("new folder", "subfolder", "text.txt")
);
console.log(resolves);
