const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')

// Write README file with data from inquirer prompts
function writeToFile(data) {
    fs.writeFile('./README.md', data, err => {
        if (err) {
            console.log(err);
        }else{
            console.log('\nREADME file created!');
        }
    });
}

inquirer.prompt([
    {
      // Title of project (required)
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? ',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the title of your project!');
          return false;
        }
      }
    },
    {
      // Description of project (required)
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project: ',
      validate: projDescInput => {
        if (projDescInput) {
          return true;
        } else {
          console.log('Please provide a description of your project!');
          return false;
        }
      }
    },
    {
        // GitHub username (required)
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username: ',
        validate: projDescInput => {
          if (projDescInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
    },
    {
        // Email
        type: 'input',
        name: 'email',
        message: 'Enter your email address: ',
    },
    {
        // Table of Contents (Y or N Boolean)
        type: 'confirm',
        name: 'toc',
        message: 'Would you like to include a table of contents? ',
        default:false
    },
    {
        // Installation Notes
        type: 'input',
        name: 'installation',
        message: 'Provide installation notes: ',
    },
    {
        // Usage Notes
        type: 'input',
        name: 'usage',
        message: 'Provide usage notes: ',
    },
    {
        // License (list, required)
        type: 'list',
        name: 'license',
        message: 'Select a license',
        choices: ['MIT', 'GPL v3']
    },
    {
        // How to contribute
        type: 'input',
        name: 'contributing',
        message: 'Provide details on how to contribute: ',
    },
    {
        // Tests
        type: 'input',
        name: 'tests',
        message: 'Provide any test instructions: ',
    },
    {
        // Q & A
        type: 'input',
        name: 'questions',
        message: 'Provide common questions and answers: ',
    }
])
.then(answers => {
    // Return the text results from running generateMarkdown with inquirer answers passed in
    return generateMarkdown(answers);
})
.then(data => {
    // Write README with plain text data from generateMarkdown script
    writeToFile(data);
})