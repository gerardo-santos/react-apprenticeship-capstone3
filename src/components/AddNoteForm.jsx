import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { AddNoteFormContainer } from '../components/styles/AddNoteFormContainer.styled';
import { FormTitle } from '../components/styles/FormTitle.styled';
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
      <FormTitle>Add a Note</FormTitle>
      <FormLabel>Note Content</FormLabel>
      <NoteInput
        value={noteText}
        onChange={(event) => setNoteText(event.target.value)}
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
      <Button>Add note</Button>
    </AddNoteFormContainer>
  );
};

AddNoteForm.propTypes = {
  toggleForm: PropTypes.func,
};

export default AddNoteForm;
