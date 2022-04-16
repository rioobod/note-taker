const fs = require('fs');
const path = require('path');

let createNewNote = (body, notesArray) => {
    const results = body;
    notesArray.push(results);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
        return results;
}

module.exports = { createNewNote } ;