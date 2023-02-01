/** @format */

// fs
// asynchronous
const { readFile, writeFile } = require("fs");


console.log("start");

async function get() {
  readFile("./content/text.txt", "utf-8", (err, result) => {
    if (err) throw err;
    console.log(result);

    const first = result;

    readFile("./content/texts.txt", "utf-8", (err, result) => {
      if (err) throw err;
      console.log(result);

        const second = result;
        
        writeFile('./content/asyncss-text.txt', `${first},  ${second}`, (err, result) => {
            if (err) throw err;
            console.log('done with task');
        })
    });
  });
}
get();
console.log('starting new task')