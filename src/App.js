import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: nanoid(),
          text: 'Everything is learnable',
          date: '23/02/2023',
        },
      ],
      searchText: '',
    };
  }

  addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    this.setState({
      notes: [...this.state.notes, newNote],
    });
  };

  deleteNote = (id) => {
    const newNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState({
      notes: newNotes,
    });
  };


  handleSearchNote = (searchText) => {
    this.setState({
      searchText: searchText,
    });
  };

  render() {
    const { notes, searchText } = this.state;
    return (
      <div className="container">
        <Header />
        <Search handleSearchNote={this.handleSearchNote} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={this.addNote}
          handleDeleteNote={this.deleteNote}
        />
      </div>
    );
  }
}

export default App;
