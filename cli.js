#!/usr/bin/env node
/**
 * ============
 * ts-project CLI
 * ============
**/
var commands = require('./commands.js');

  	require('yargs')
    .usage('Usage: ts-project [entry]')
    .command('clean [entry]', 
    	 	 'equivalent of mvn:clean', 
    	 	 { name: {default: ''}}, 
    	 	 function (argv) {commands.clean(argv.entry);})
    //.command('install [entry]', 
    //		 'equivalent of mvn:install', 
    //		 { name: {default: ''}}, 
    //		 function (argv) {commands.install(argv.entry);})
    .help()
    .argv;