const inquirer = require('inquirer')
const fs = require('fs')

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML = require('./src/generateHTML');
let teamArray = [];

function mainMenu(){
    inquirer.prompt([

        {
         type: 'list',
         name: 'Menu', 
         message: 'Where would you like to go?',
         choices: ['Add Manager', 'Add Intern', 'Add Engineer', 'Build a profile']

        }
    ])
    .then((answers) => {
        console.log(answers)
        if (answers.Menu === 'Add Manager') {
// execute add manager function
addManager()
        }
        else if (answers.Menu === 'Add Intern') {
            // execute add intern function
            addIntern();
        }
        else if (answers.Menu === 'Build a profile') {
            // execute a profile function
            addProfile();
        }
        else if (answers.Menu === 'Add Engineer') {
        // execute add engineer function
        addEngineer();
    }
    })
}
mainMenu();

function addManager(){
    inquirer.prompt([
        {
            type: 'input', 
            name: 'name',
            message: 'What is the Manager name?',
        },
        {
         type: 'input', 
         name:  'id',
         message :'What is your ID'  
        },
        {
        type: 'input',
        name : 'email',
        message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: ' What is your office number?'
        }
    ])
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamArray.push(manager);
        mainMenu();
    })
}
function addIntern(){
    inquirer.prompt([
        {
            type: 'input', 
            name: 'name',
            message: 'What is the Interns name?',
        },
        {
         type: 'input', 
         name:  'id',
         message :'What is the Interns ID?'  
        },
        {
        type: 'input',
        name : 'email',
        message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your school name?'
        }
    ])
    .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamArray.push(intern);
        mainMenu();
        
    })
}
function addEngineer(){
    inquirer.prompt([
        {
            type: 'input', 
            name: 'name',
            message: 'What is the Engineer name?',
        },
        {
         type: 'input', 
         name:  'id',
         message :'What is the Engineer ID?'  
        },
        {
        type: 'input',
        name : 'email',
        message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'githubId',
            message: 'What is your github ID?'
        }
    ])
    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.githubId);
        teamArray.push(engineer);
        mainMenu();
    }) 
}
function addProfile(){
    const htmlPageContent = generateHTML(teamArray);

    fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
}