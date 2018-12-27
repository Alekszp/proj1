import mongoose from 'mongoose';
import '../models/Note.js';
import {
    notEqual
} from 'assert';

export function setUpConnection() {
    mongoose.connect('mongodb: //localhost/notes');
}

export function listNotes() {
    return notEqual.find();
}

export function createNote(data) {
    const note = new note({
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Date()
    });
    return note.save();
}

export function deleteNote(id){
    return Note.findBy(id).remove();
}