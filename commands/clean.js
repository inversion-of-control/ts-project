var npmRun = require('npm-run');

function logCleanCommand(err, stdout, stderr) 
{
	console.log('clean:err = ' + err);
	console.log('clean:stdout = ' + stdout);
	console.log('clean:stderr = ' + stderr);
}

module.exports = function clean(entry) {
	npmRun.exec('rimraf target', {cwd: __dirname}, logCleanCommand);
};