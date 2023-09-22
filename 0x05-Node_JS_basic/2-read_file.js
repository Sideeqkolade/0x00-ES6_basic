/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 */
const fs = require('fs')

function countStudents(path) {
    try {
        // Read the CSV file synchronously
        const csvData = fs.readFileSync(path, 'utf8')

        // Split the CSV data into lines and filter out empty lines
        const lines = csvData.split('\n').filter((line) => line.trim() !== '');

        // Initialize an object to store the count of students in each field
        const fieldCounts = {};

        // Process each line of data
        lines.forEach((line) => {
            const [firstname, lastname, age, field] = line.split(',');

            if (fieldCounts[field] === undefined) {
                fieldCounts[field] = {
                    count: 1,
                    studemts: [firstname],
                };
            } else {
                fieldCounts[field].count += 1;
                fieldCounts[field].students.push(firstname);
            }
        });
        
        console.log('Number of studnets:', lines.length);
        for (const field in fieldCounts) {
            console.log(`NUmber of students in ${field}: ${fieldCounts[field.count]}`)
        }
        }
    }
}