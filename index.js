// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    name: 'projectTitle',
    message: 'What is you project title?'
  },
  {
    name: '## Description',
    message: 'Provide a brief description of your project'
  },
  {
    name: '## Table Of Contents',
    message: 'Table Of Cotents [Optional]'
  },
  {
    name: '## Installation',
    message: 'How do you install your project?'
  },
  {
    name: '## Usage',
    message: 'What are the steps to use your project?'
  },
  {
    name: '## License',
    message: 'What is your license?'
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  if(data[0] === 'projectTitle'){
    let title = `# ${data[1]} \n`
    try{
      fs.appendFileSync(fileName, title)
    } catch (err) {
      console.error(err)
    }
  } else {
    let title = `${data[0]} \n`
    let description = `${data[1]} \n`
    try{
      fs.appendFileSync(fileName, title)
      fs.appendFileSync(fileName, description)  
    } catch (err) {
      console.error(err)
    }
  }
}

// TODO: Create a function to initialize app
function init() {
  //use inquirer to prompt the list of questions to the user
  inquirer.prompt(questions).then(answers => {
    Object.entries(answers).forEach((answer) => writeToFile('./README.md', answer))
  })
}

// Function call to initialize app
init();
