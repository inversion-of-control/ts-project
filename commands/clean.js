var npmRun = require('npm-run');

module.exports = function clean(entry) {
	npmRun.exec('rimraf target', {cwd: __dirname}, logCommand);
};

function logCleanCommand(err, stdout, stderr) 
{
	console.log('clean:err = ' + err);
	console.log('clean:stdout = ' + stdout);
	console.log('clean:stderr = ' + stderr);
}