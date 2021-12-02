"use strict";
var path = require("path");
var fs = require("fs");
var spawn = require('child_process').spawn;

var isWin = !1;
var isMac = !1;

if (fs.existsSync("build-win")) isWin = !0;
else if (fs.existsSync("build-mac")) isMac = !0;
else if (!fs.existsSync("build")) throw "\x1B[31m find build fail \x1B[0m";

let ts2abc ;
if (isWin) {
    ts2abc = path.join(path.resolve(__dirname, 'build-win', 'bin'), "ts2abc.exe");
} else if (isMac) {
    ts2abc = path.join(path.resolve(__dirname, 'build-mac', 'bin'), "ts2abc");
} else {
    ts2abc = path.join(path.resolve(__dirname, 'build', 'bin'), "ts2abc");
}

var args = process.argv.splice(2);
let proc = spawn(`${ts2abc}`, args);

proc.stderr.on('data', (data) => {
    throw `${data}`
});

proc.stdout.on('data', (data) => {
    process.stdout.write(`${data}`)
});
