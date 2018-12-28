import React from 'react';
import NoteEditor from './NoteEditor.jsx';
import NotesGrid from './NotesGrid.jsx';
import NoteStore from '../stores/NoteStore';
import NoteActions from '../actions/NotesActions';

import './App.less';

function getStateFromFlux() {
    return {
        isLoading: NoteStore.isLoading(),
        notes: NoteStore.getNotes()
    }
}

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = getStateFromFlux();
        this.handleNoteAdd = this.handleNoteAdd.bind(this);


    }

    handleNoteAdd(data) {
        NoteActions.createNote(data);
    }
    componentDidMount() {
        NoteStore.addChangeListener(this._onChange);
    }
    componentWillMount(){
        NoteActions.loadNotes();
    }
    componentWillUnmount() {
        NoteStore.removeChangeListener(this._onChange);
    }

    render() {
        return (
            <div className='App'>
                <h2 className='App__header'>Hello, HELLO!!!!</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd} />
                <NotesGrid />
            </div>
        );

    }
    _onChange() {
        this.setState(getStateFromFlux());
    }
};

{/* <div className='App'>
    <h1>Hello, HELLO!!!!!</h1>
    <NoteEditor onNoteAdd={this.handleNoteAdd} />
    <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete} />
</div> */}