const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

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
           name: 'title',
           message: '', 
        },
        {
           type: 'input',
           name: 'title',
           message: '', 
        },
        {
           type: 'input',
           name: 'title',
           message: '', 
        },
        {
           type: 'input',
           name: 'title',
           message: '', 
        },
       
    ])
}