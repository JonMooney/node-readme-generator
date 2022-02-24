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

function renderToc(data){
  let markdown = `- [Description](#description)`;
  
  if(data.installation != ''){
    markdown += `\n- [Installation](#installation)`;
  }

  if(data.usage != ''){
    markdown += `\n- [Usage](#usage)`;
  }

  if(data.license){
    markdown += `\n- [License](#license)`;
  }

  if(data.contributing != ''){
    markdown += `\n- [Contributing](#contributing)`;
  }

  if(data.tests != ''){
    markdown += `\n- [Tests](#tests)`;
  }

  if(data.questions != ''){
    markdown += `\n- [Questions](#questions)`;
  }

  return markdown;
}

function generateMarkdown(data) {
  // Title (required)
  let markdown = `# ${data.title}`;
  
  // License Badge (if user selected a license) (boolean)
  if(data.license){
    markdown += '\n' + renderLicenseBadge(data.license)
  }
  
  // Desription (required)
  markdown += `\n\n## Description\n\n${data.description}`;
    
  // Table of contents (boolean)
  if(data.toc){
    markdown += `\n\n## Table of Contents\n\n${renderToc(data)}`;
  }

  // Installation
  if(data.installation != ''){
    markdown += `\n\n## Installation\n\n${data.installation}`;
  }
  
  // Usage
  if(data.usage != ''){
    markdown += `\n\n## Usage\n\n${data.usage}`;
  }

  // License
  if(data.license){
    markdown += `\n\n## License\n\n${renderLicenseSection(data.license)}`;
  }

  // Contributing
  if(data.contributing != ''){
    markdown += `\n\n## Contributing\n\n${data.contributing}`;
  }

  // Tests
  if(data.tests != ''){
    markdown += `\n\n## Tests\n\n${data.tests}`;
  }

  // Questions
  if(data.questions != ''){
    markdown += `\n\n## Questions\n\n${data.questions}`;
  }

  return markdown;
}


const data = {
  title: "Sample Project Title",
  license: 'GPL v3',
  description: "Sample description",
  toc: true,
  installation: 'sample install info',
  usage: '',
  contributing: 'contributing info',
  tests: 'sample tests',
  questions: 'sample questions'

}

console.log('hello');
console.log(data);
console.log(generateMarkdown(data));

module.exports = generateMarkdown;
