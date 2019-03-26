// console.log("this is a notes.js file");
var fs = require('fs');

var logNote = (note) => {
	debugger;
		console.log("---");
		console.log(`Title : ${note.title}`);
		console.log(`Body : ${note.body}`);
}; 

var fetchNotes = () => {
try{
	var oldNotes = fs.readFileSync('notes-data');
	return JSON.parse(oldNotes);
	} catch(e){
		return [];
	}
};

var saveNotes = (notesArr) => {
	fs.writeFileSync('notes-data',JSON.stringify(notesArr));
};


var addNote = (title,body) =>{
	var notesArr = fetchNotes();
	var note = {
		title,
		body
	};
	var duplicateNotes = notesArr.filter((note) => note.title === title);
	if(duplicateNotes.length === 0)
	{
		notesArr.push(note);
		saveNotes(notesArr);
		return note;
	}
};

var removedNotes = (title) => {
	var notes = fetchNotes();
	var removedNotes = notes.filter((note) => note.title!==title);
	saveNotes(removedNotes);
	console.log('Note removed');
};

var getAllFunc = () => {
	return fetchNotes();
};

var getNote = (title) => {
	var notes = fetchNotes();
		var returnNotes = notes.filter((note) => note.title === title);
		return returnNotes[0];
};


module.exports = {
	addNote,
	removedNotes,
	getNote,
	getAllFunc,
	logNote
};