/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable prefer-destructuring */
const fs = require('fs');

// Read the file and print its contents.

const allEmails = fs.readFileSync('nameEmail.txt', 'utf8');

const splitedEmails = allEmails.split('\n').map(email => email.split('<'));
const emailsInObject = splitedEmails.map(emails => {
  const obj = {};
  (obj.name = emails[0]), (obj.email = emails[1]);
  return { ...obj };
});
console.log({ emailsInObject });
// const jsonObj = JSON.stringify(obj);
// console.log(jsonObj);
