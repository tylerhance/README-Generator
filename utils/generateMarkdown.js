function renderLicenseBadge(license) {
    if (license === "No License"){
        return "";
    } else {
        return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "No License"){
        return "";
    } else {
        return "- [License](#license)";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "No License"){
        return "";
    } else {
        return `## License
        
More information about the license can be found here: 

- [License](https://opensource.org/licenses/${license})`;
    }
}

// Function for creating the README markdown 
function generateMarkdown(response) {
return `
# ${response.title}
${renderLicenseBadge(response.license)}
# Table of Contents
 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#test)
${renderLicenseLink(response.license)}
- [Questions](#questions)
 
## Description
 
${response.description}
 
## Installation
${response.installation}
 
## Usage
${response.usage}
 
## Contributing
${response.contributing}
 
## Test
${response.test}
 
${renderLicenseSection(response.license)} 
 
## Questions 
Got questions? Check out my GitHub for more information:
 
- [GitHub Profile](https://github.com/${response.username})
 
Feel free to reach out for any questions/comments @ ${response.email}.
`;
 }

 module.exports = generateMarkdown;