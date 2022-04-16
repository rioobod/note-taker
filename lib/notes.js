const fs = require('fs');
const path = require('path');

let createNewNote = (body, notes) => {
    const results = body;
    notes.push(results);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
        return results;
}

module.exports = { createNewNote } ;