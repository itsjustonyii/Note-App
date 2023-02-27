import React, { Component } from 'react';

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteText: '',
      characterLimit: 280,
    };
  }

  handleChange = (event) => {
    if (this.state.characterLimit - event.target.value.length >= 0) {
      this.setState({ noteText: event.target.value });
    }
  };

  handleSaveClick = () => {
    if (this.state.noteText.trim().length > 0) {
      this.props.handleAddNote(this.state.noteText);
      this.setState({ noteText: '' });
    }
  };

  render() {
    const { noteText, characterLimit } = this.state;

    return (
      <div className='new-note'>
        <textarea
          rows='8'
          cols='10'
          placeholder='Type to add a note...'
          value={noteText}
          onChange={this.handleChange}
        />
        <div className='note-footer'>
          <small>{characterLimit - noteText.length} Remaining</small>
          <button className='save' onClick={this.handleSaveClick}>
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default AddNote;


