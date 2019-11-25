/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable prefer-destructuring */
const fs = require('fs');

// Read the file and print its contents.

const allEmails = fs.readFileSync('nameEmail.txt', 'utf8');

const splitedEmails = allEmails.split('\n').map(email => email.split('<'));
console.log({ splitedEmails });

const emailAndName = splitedEmails.reduce((acc, cv) => {
  acc.push({
    name: cv[0],
    email: cv[1] !== undefined ? cv[1].replace('>', '') : '',
  });
  console.log(acc.length);
  return acc;
}, []);

console.log({ emailAndName });
