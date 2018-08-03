//node server added for deployment to Zeit
//modify the package.json file to
//"start": "node ./server.js",

const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "dist")));

const port = process.env.PORT || 5000;
app.listen(port);

console.log("Node Server Started at port: " + port);
console.log(__dirname);
