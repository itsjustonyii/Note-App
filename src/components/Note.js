import React, { Component } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      editText: props.text
    };
  }

  handleEdit = () => {
    if (this.state.isEditing) {
      this.props.handleEditNote(this.props.id, this.state.editText);
    }
    this.setState(prevState => ({ isEditing: !prevState.isEditing }));
  };

  handleEditTextChange = event => {
    this.setState({ editText: event.target.value });
  };

  render() {
    const { id, text, date, handleDeleteNote,  } = this.props;

    return (
      <div className='note'>
        {this.state.isEditing ? (
          <textarea
          className='textarea'
            rows='10'
            cols='10'
            value={this.state.editText}
            onChange={this.handleEditTextChange}
          />
        ) : (
          <span>{text}</span>
        )}
        <div className='note-footer'>
          <small>{date}</small>
          <div>
          <MdEdit
            size='1.5em'
            className='edit-icon'
            onClick={this.handleEdit}
          />
          <MdDeleteForever
            onClick={() => handleDeleteNote(id)}
            className='delete-icon'
            size='1.5em'
          />
          </div>
        </div>
      </div>
    );
  }
}

export default Note;
