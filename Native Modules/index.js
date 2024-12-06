const fs = require("fs");

let data = "This is the info stored in the file that will then be printed out in the console via readFile later. blah blah blah...";

fs.writeFile("message.txt", data, (err) => {
    if (err) throw err;
    console.log("The data has been saved to file.");
} );

fs.readFile("./message.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data)
})