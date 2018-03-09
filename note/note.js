const fs = require('fs');

let addNote = (title, body) => {
    let note = {
        title,
        body
    };
    let allNotes = [];
    let duplicateNote = [];
    if(fs.existsSync('notesList.json')){
        if(fs.readFileSync('notesList.json', 'utf-8') !== ''){
            allNotes = JSON.parse(fs.readFileSync('notesList.json', 'utf-8'));
            duplicateNote = allNotes.filter((note) => note.title === title);
            if(duplicateNote.length > 0){
                console.log("Note of same title is added before, so note not added");
            } else {
                allNotes.push(note);
                fs.writeFileSync('notesList.json', JSON.stringify(allNotes));
            }
        } else {
            allNotes.push(note);
            fs.writeFileSync('notesList.json', JSON.stringify(allNotes));
        }
    } else {
        allNotes.push(note);
        fs.writeFileSync('notesList.json', JSON.stringify(allNotes));
    }
}

let deleteNote = (title) => {
    if(fs.existsSync('notesList.json')){
        if(fs.readFileSync('notesList.json', 'utf-8') !== ''){
            let allNotes = JSON.parse(fs.readFileSync('notesList.json', 'utf-8'));
            let newNotes = allNotes.filter((note) => note.title !== title);
            fs.writeFileSync('notesList.json', JSON.stringify(allNotes));
            if(newNotes.length === allNotes.length){
                console.log("No note of title", title, "existed, so unable to delete");
            } else {
                console.log("Note deleted of title", title);
            }
        } else {
            console.log("No notes added yet, so no note deleted");
        }
    } else {
        console.log("No notes added yet, so no note deleted");
    }
}

let listNote = () => {
    if(fs.existsSync('notesList.json')){
        if(fs.readFileSync('notesList.json', 'utf-8') !== ''){
            let allNotes = JSON.parse(fs.readFileSync('notesList.json', 'utf-8'));
            console.log(JSON.stringify(allNotes, undefined, 2));
        } else {
            console.log("No notes added yet");
        }
    } else {
        console.log("No notes added yet");
    }
}

let readNote = (title) => {
    if(fs.existsSync('notesList.json')){
        if(fs.readFileSync('notesList.json', 'utf-8') !== ''){
            let allNotes = JSON.parse(fs.readFileSync('notesList.json', 'utf-8'));
            allNotes = allNotes.filter((note) => note.title === title);
            if(allNotes.length > 0){
                console.log(allNotes);
            } else {
                console.log("No notes found of title", title);
            }
        } else {
            console.log("No notes added yet, so no note deleted");
        }
    } else {
        console.log("No notes added yet, so no note deleted");
    }
}

module.exports = {
    addNote,
    deleteNote,
    listNote,
    readNote
}
