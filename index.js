const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);


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

// Function for creating the README markdown 
function generateMarkdown(response) {
   return `
   # ${response.title}
   
   # Table of Contents

   - [Description](#description)
   - [Installation](#installation)
   - [Usage](#Usage)
   - [Contributing](#contributing)
   - [Test](#test)
   - [License](#license)
   - [Questions](#questions)

   ## Description:

   [![License](https://img.shields.io/badge/License-${response.license}-blue.svg) "License Badge"]

   ${response.description}

   ## Installation:
   ${response.installation}

   ## Usage:
   ${response.usage}

   ## Contributing: 
   ${response.contributing}

   ## Test:
   ${response.test}

   ## License:
      More information about the license can be found here: 

      - [License](https://opensource.org/licenses/${response.license})

   ## Questions: 
      Got questions? Check out my GitHub for more information:

      - [GitHub Profile](https://github.com/${response.username})

      Feel free to reach out for any questions/comments @ ${response.email}.
   `;
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