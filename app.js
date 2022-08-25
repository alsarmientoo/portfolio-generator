// at the top of app.js
const fs = require('fs');

const generatePage = require('./src/page-template.js');

// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

const profileDataArgs = process.argv.slice(2);

// console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//     // this...
//     for (let i=0; i < profileDataArr.length; i+=1) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('================');

//     // is the same as this...
//     // profileDataArr.forEach((profileItem) => {
//     //     console.log(profileItem)
//     // });

//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

// or do destructuring assignment
const [name, github] = profileDataArgs;

// printProfileData(profileDataArgs);

// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

// console.log(name, github);
// // to make sure function is working
// console.log(generatePage(name, github));

fs.writeFile('index.html', generatePage(name,github), err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete! Checkout index.html to see the output!');
});