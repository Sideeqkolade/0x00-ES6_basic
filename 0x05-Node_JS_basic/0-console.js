#!/usr/bin/node

const displayMessage = (message) => {
  process.stdout.write(`${message} \n`);
};

module.exports = displayMessage;
