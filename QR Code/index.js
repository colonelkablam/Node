import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';


inquirer
    .prompt([
        { 
            message : "Please Enter any text to turn into a QR code!",
            name: "URL",
        }
    ])
    .then((answers) => {
        const url = answers.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr_iamge.png'));
        fs.writeFile("URL.txt", url, (err) => {
            if (err) throw err;
            console.log("The url has been saved to text file.")
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        } else {
        // Something else went wrong
        }
  });

