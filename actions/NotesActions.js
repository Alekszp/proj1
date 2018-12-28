import AppDispatcher from '../dispatcher/AppDispatcher.js';
import Constants from '../constants/AppConstants.js';

import api from '../api/index.js';

const NoteActions = {
    loadNotes(){
        AppDispatcher.dispatch({
            type: Constants.LOAD_NOTES_REQUEST
        });

        api.listNotes()
        .then(({data})=>{
            AppDispatcher.dispatch({
                type: Constants.LOAD_NOTES_SUCCESS,
                notes: data
            })
        })
        .catch((error)=>{
            AppDispatcher.dispatch({
                type: Constants.LOAD_NOTES_FAIL,
                error: error
            })
        })
    },
    createNote(note){
        api.createNote(noteId)
        .then(()=>{
            this.loadNotes()
        })
        .catch((error)=>{
            console.log(error);
        });

    },
    deleteNote(noteId){
        api.deleteNote(noteId)
        .then(()=>{
            this.loadNotes();
        })
        .catch((error)=>{
            console.log(error);
        })
    }
};

export default NoteActions;