const yargs = require('yargs');
const note = require('./note/note');

let titleTemplate = {
    describe: "",
    demand: true,
    alias: 't'
};
let bodyTemplate = {
    describe: "",
    demand: true,
    alias: 'b'
};

const arguments = yargs
    .command("add", "Add note", {title : titleTemplate, body : bodyTemplate})
    .command("delete", "Delete note", {title : titleTemplate})
    .command("list", "List all notes")
    .command("read", "Read a particular note", {title : titleTemplate})
    .help()
    .argv;

let command = arguments._[0];

switch(command){
    case "add": {
        let title = arguments.title;
        let body = arguments.body;
        note.addNote(title, body);
        break;
    }
    case "delete": {
        let title = arguments.title;
        note.deleteNote(title);
        break;
    }
    case "list": {
        note.listNote();
        break;
    }
    case "read": {
        let title = arguments.title;
        note.readNote(title);
        break;
    }
    default: {
        console.log("Invalid command", command);
    }
}