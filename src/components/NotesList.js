import React, { Component } from 'react';
import Note from './Note';
import AddNote from './AddNote';

class NotesList extends Component {
	render() {
		const { notes, handleAddNote, handleDeleteNote } = this.props;

		return (
			<div className='notes-list'>
				{notes.map((note) => (
					<Note
						key={note.id}
						id={note.id}
						text={note.text}
						date={note.date}
						handleDeleteNote={handleDeleteNote}
						
					/>
				))}
				<AddNote handleAddNote={handleAddNote} />
			</div>
		);
	}
}

export default NotesList;



