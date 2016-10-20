var npmRun = require('npm-run');

module.exports = function clean(entry) {
	npmRun.exec('rimraf target', {cwd: __dirname}, function(err, stdout, stderr) {});
};