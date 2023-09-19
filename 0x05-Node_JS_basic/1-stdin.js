/**
 * Display the message "Welcome to Holberton School, what is your name?"
 * User should input their name on a new line
 * The program should display Your name is: INPUT
 * when the user ends the program, it should display "This important
 * software is now closing
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const input = process.stdin.read();

  if (input) {
    process.stdout.write(`Your name is: ${input}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
