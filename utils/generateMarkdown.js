// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return '';
  }
  
  switch(license){
    case 'MIT': return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'GPL v3': return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/)';
  }

}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return '';
  }

  switch(license){
    case 'MIT': return 'This project is covered under the [MIT License](https://opensource.org/licenses/MIT)';
    case 'GPL v3': return 'This project is covered under the [GNU General Public License v3.0](https://www.gnu.org/licenses/)';
  }
}

function renderToc(){

}

function generateMarkdown(data) {
  // Title (required)
  const markdown = `# ${data.title}`;

  // License Badge (if user selected a license) (boolean)
  if(data.license){
    markdown += renderLicenseBadge(data.license);
  }

  // Desription (required)
  markdown += `
    ## Description
    ${data.description}
    `;
  
// Table of contents (boolean)
if(data.toc){
  markdown += `
  ## Table of Contents
  ${renderToc(data)}
  `;
}

// Installation
if(data.installation != ''){
  markdown += `
  ## Installation
  ${data.installation}
  `;
}

// Usage
if(data.usage != ''){
  markdown += `
  ## Usage
  ${data.usage}
  `;
}

// License
if(data.license){}
  markdown += `
  ## License
  ${renderLicenseSection(data.license)}
  `;
}

// Contributing
if(data.contributing != ''){
  markdown += `
  ## Contributing
  ${data.contributing}
  `;
}

// Tests
if(data.tests != ''){
  markdown += `
  ## Tests
  ${data.tests}
  `;
}

// Common Questions
if(data.questions != ''){
  markdown += `
  ## Common Questions
  ${data.questions}
  `;
}

const data = {
  title: "Sample Project Title",
  license: 'GPL v3',
  description: "Sample description",
  toc: true,
  installation: 'sample install info',
  usage: 'sample usage info',
  contributing: 'contributing info'
  tests: 'sample tests'
  questions: 'sample questions'

}

console.log(generateMarkdown(data));

module.exports = generateMarkdown;
