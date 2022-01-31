import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { AddNoteFormContainer } from '../components/styles/AddNoteFormContainer.styled';
import { FormLabel } from '../components/styles/FormLabel.styled';
import { NoteInput } from './styles/NoteInput.styled';
import { ColorInput } from './styles/ColorInput.styled';
import { Button } from './styles/Button.styled';
import PropTypes from 'prop-types';

const AddNoteForm = ({ toggleForm }) => {
  const { dispatch } = useContext(GlobalContext);
  const [noteText, setNoteText] = useState('');
  const [color, setColor] = useState('#ffc107');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!noteText || !color) return;
    const id = Date.now();
    const newNote = { id, noteText, color };
    dispatch({ type: 'CREATE_NOTE', payload: newNote });
    toggleForm();
  };

  return (
    <AddNoteFormContainer onSubmit={handleSubmit}>
      <NoteInput
        value={noteText}
        onChange={(event) => setNoteText(event.target.value)}
        placeholder="Add note content here."
      />
      <FormLabel>Color</FormLabel>
      <br />
      <ColorInput
        type="color"
        value={color}
        onChange={(event) => setColor(event.target.value)}
      />
      <br />
      <Button cancel="true" onClick={toggleForm} type="button">
        Cancel
      </Button>
      <Button disabled={noteText.length === 0}>Add note</Button>
    </AddNoteFormContainer>
  );
};

AddNoteForm.propTypes = {
  toggleForm: PropTypes.func,
};

export default AddNoteForm;
