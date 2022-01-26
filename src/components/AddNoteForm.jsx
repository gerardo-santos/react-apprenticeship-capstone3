import { AddNoteFormContainer } from '../components/styles/AddNoteFormContainer.styled';
import { FormTitle } from '../components/styles/FormTitle.styled';
import { FormLabel } from '../components/styles/FormLabel.styled';
import { NoteInput } from './styles/NoteInput.styled';
import { ColorInput } from './styles/ColorInput.styled';
import { Button } from './styles/Button.styled';
import PropTypes from 'prop-types';

const AddNoteForm = ({ toggleForm }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <AddNoteFormContainer onSubmit={handleSubmit}>
      <FormTitle>Add a Note</FormTitle>
      <FormLabel>Note Content</FormLabel>
      <NoteInput />
      <FormLabel>Color</FormLabel>
      <br />
      <ColorInput type="color" />
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
