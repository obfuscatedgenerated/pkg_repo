const fs = require("fs");
const pkgs = fs.readdirSync("pkgs", { withFileTypes: true }).filter(x => x.isDirectory()).map(x => x.name); // get all directories in /pkgs/
const pkg_string = pkgs.join("\n");
fs.writeFileSync("provided.txt", pkg_string);
