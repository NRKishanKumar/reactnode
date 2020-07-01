var template = require("./client/public/server");
var path = require('path')
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const app = express();
// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use('/assets', express.static(path.resolve(__dirname, 'client/assets')));
app.use(bodyParser.json());
// hide powered by express
app.disable('x-powered-by');
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
// server rendered home page
app.get('/', (req, res) => {
    const response = template()
    res.setHeader('Cache-Control', 'assets, max-age=604800')
    res.send(response);
});

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));