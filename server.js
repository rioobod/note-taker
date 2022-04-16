const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const { notes } = require("./db/db.json");

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.get("/api/notes", (req, res) => {
  //  res.send('hello');
     let results = notes;
     console.log(req.query);

  res.json(results);
//   res.json(notes);
});

// app.listen(3001, () => {
//   console.log(`API server now on port 3001!`);
// });
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
