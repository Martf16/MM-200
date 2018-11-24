let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");

let routerIndex = require("./routes/index");
let routerUser = require("./routes/api/user");
let routerList = require("./routes/api/user");
let system = require("./system");

let app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routerIndex);
app.use('/api/user', routerUser);
app.use('/api/list', routerList);

global.__basedir = __dirname;

module.exports = app;
