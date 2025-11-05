const express = require('express');
const app = express();
const port = 3001;
const db = require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Server started on port 3001`);
})

db.sequelize.sync()
    .then(() => {
        app.listen(3001, () => {
            console.log(`Server started`);
        })
    })
    .catch((err) => {
        console.log(err);
    })
