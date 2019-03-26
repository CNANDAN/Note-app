// 'use strict'
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');
const abc = yargs.argv;
const command = abc._[0];
	if(command == "add"){
	var note = notes.addNote(abc.title,abc.body);
	if(note){
		console.log("Note created");
		notes.logNote(note);
	}
	else {
		console.log("Note already taken");
	}
}
else if(command == "read"){
	var note = notes.getNote(abc.title);
	if(note){
		console.log('Note found');
		notes.logNote(note);
	}
	else{
		console.log('Note not found');
	}
}
else if(command == "list"){
	var allNotes = notes.getAllFunc();
	// console.log(allNotes);
	allNotes.forEach((note) =>{
		notes.logNote(note);
	});
}
else if(command == "remove"){
	notes.removedNotes(abc.title);
} 
else {
	return 'command not found';
}