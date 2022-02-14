"use strict";
var path = require("path");
var fs = require("fs");
let exec = require('child_process').exec;

const arkDir = path.resolve(__dirname, "bin", "ark");
if (!fs.existsSync(arkDir)) {
  return;
}

var isWin = !1;
var isMac = !1;

if (fs.existsSync(path.join(arkDir,  'build-win'))) {
  isWin = !0;
} else if (fs.existsSync(path.join(arkDir, 'build-mac'))) {
  isMac = !0;
} else if (!fs.existsSync(path.join(arkDir, 'build'))) {
  console.error('[31m', 'find build fail', '[39m');
  return;
}

let cwd;
if (isWin) {
   cwd = path.join(arkDir, 'build-win');
 } else if (isMac) {
   cwd = path.join(arkDir, 'build-mac');
 } else {
   cwd = path.join(arkDir, 'build');
 }

exec("npm install", { cwd: cwd }, function (err, stdout, stderr) {
    console.log("[31m", stdout, "[39m");
    if (err != null) {
        console.error('[31m', `npm install filed: ${err}`, '[39m');
    }
});