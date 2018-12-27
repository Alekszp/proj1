import React from 'react';
import NoteEditor from './NoteEditor.jsx';
import NotesGrid from './NotesGrid.jsx';

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.onNoteAdd = this.onNoteAdd.bind(this);
    }

    onNoteAdd(data){
        console.log(data);
    }

    render() {
        return (
            <div className='App'>
                <h2 className='App__header'>Hello, HELLO!!!!</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd}/>
                <NotesGrid />
            </div>
        );

    }
};

{/* <div className='App'>
    <h1>Hello, HELLO!!!!!</h1>
    <NoteEditor onNoteAdd={this.handleNoteAdd} />
    <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete} />
</div> */}