var fixer=require("./lib/fix"),requireParse=require("./lib/require-parse"),requireBundle=require("./lib/require-bundle");exports.fix=fixer.fix,exports.formatWhenFix=fixer.formatWhenFix,exports.parseAndReplaceRequire=requireParse.parseAndReplaceRequire,exports.getBundle=requireBundle.getBundle;