// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

function generateMarkdown(userResponses, userInfo) {

  let draftTable = `## Table of Contents`;

  if (userResponses.installation !== ""){
    draftTable += `* [Installation](#installation)`
  };

  if (userResponses.usage !== "") {
    draftTable += `* [Usage](#usage)`
  };

  if (userResponses.contributing !== "") {
    draftTable += `* [Contributing](#contributing)`
  };

  if (userResponses.tests !== "") {
    draftTable += `* [Tests](#tests)`
  };

  // Creates title/description/badges
  let draftMarkdown = `# ${userResponses.title} ![Badge for Github](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repository}?style=flat&logo=appveyor)

  ## Description

  ${userResponses.description}`

  // Adds table of contents to markdown table
  draftMarkdown += draftTable;

  // Adds license to markdown
  draftMarkdown += `* [License](#license)`;

  // Create installation section
  if (userResponses.installation !== ""){
    draftMarkdown += `

    ## Installation

    ${userResponses.installation}`
  };

  // Creates usage section
  if (userResponses.usage !== ""){
    draftMarkdown += `

    ## Usage

    ${userResponses.usage}`
  };

  // Creates the contributor(s) section
  if (userResponses.contributing !== ""){
    `
    ## Contributing
    
    ${userResponses.contributing}`
  };

  //Creates tests section
  if (userResponses.tests !== ""){
    draftMarkdown += `
    
    ## Tests
    
    ${userResponses.tests}
    `
  }


  
};





module.exports = generateMarkdown;