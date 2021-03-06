import React from 'react';
import './NoteEditor.less';

export default class NoteEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            color: '#FFFFFF'
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
    }

    handleTextChange(event) {
        this.setState({ text: event.target.value });
    }

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleNoteAdd() {
        const newNote = {
            title: this.state.title,
            text: this.state.text,
            color: this.state.color
        };
        this.props.onNoteAdd(newNote);
        this.setState({ text: '', title: '', color: '#FFFFFF' })
    }

    render() {
        return (
            <div className='NoteEditor'>
                <input type="text"
                    className='NoteEditor__title'
                    placeholder='enter title'
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                />
                <textarea
                    className="NoteEditor__text"
                    placeholder="enter note text"
                    rows={5}
                    value={this.state.text}
                    onChange={this.handleTextChange}

                ></textarea>
                <div className='NoteEditor__footer'>
                    <button
                        className='NoteEditor__button'
                        disabled={!this.state.text}
                        onClick={this.handleNoteAdd}>ADD</button>
                </div>
            </div>
        )
    }
}