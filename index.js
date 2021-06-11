const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require("./utils/generateMarkdown");


function promptUser() {
   return inquirer.prompt([
      {
         type: 'input',
         name: 'title',
         message: 'What is the title of your repo/project?', 
      },
      {
         type: 'input',
         name: 'description',
         message: 'Write a description of your project: ', 
      },
      {
         type: 'input',
         name: 'installation',
         message: 'Briefly describe the installation process: ', 
      },
      {
         type: 'input',
         name: 'usage',
         message: 'What is this project usage?', 
      },
      {
         type: 'list',
         name: 'license',
         message: 'Choose the license for your project: ',
         choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open",
            "No License"
         ] 
      },
      {
         type: 'input',
         name: 'contributing',
         message: 'Who are the contributors of this project?', 
      },
      {
         type: 'input',
         name: 'test',
         message: 'Is there a test included?', 
      },
      {
         type: 'input',
         name: 'username',
         message: 'Please enter your GitHub username: ', 
      },
      {
         type: 'input',
         name: 'email',
         message: 'Please enter your email: ', 
      },
   ]);
}

// Function for initializing generator
async function init() {
   try {
      const response = await promptUser();
      const readMe = generateMarkdown(response);

      await writeFileAsync("README.md", readMe);
      console.log("README Successfully created!");
   } catch (err) {
      console.log(err);
   }
}

// Calling the async function
init();