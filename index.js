const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
           type: 'input',
           name: 'title',
           message: 'What is the title of you repo?', 
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
           message: 'Choose the license for the project: ',
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
           name: 'tests',
           message: 'Is there a test included?', 
        },
        {
           type: 'input',
           name: 'questions',
           message: 'What do I do if I have an issue? ', 
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
       
    ])
}

   async function init() {
      try {
         const answers = await promptUser();
         const generateContent = generateMarkdown(answers);
         
         await writeFileAsync('./dist/README.md', generateContent);
         console.log('Success, wrote to README.md');
      } catch(err) {
         console.log(err);
      }
   }

   init();