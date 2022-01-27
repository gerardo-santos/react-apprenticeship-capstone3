import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Button } from './styles/Button.styled';
import { NoteInput } from './styles/NoteInput.styled';
import { FormLabel } from './styles/FormLabel.styled';
import { ColorInput } from './styles/ColorInput.styled';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

const EditModal = ({ show, handleCloseEditModal }) => {
  const { noteToEdit, notes, dispatch } = useContext(GlobalContext);

  const handleTextChange = (event) => {
    dispatch({ type: 'UPDATE_NOTE_TEXT', payload: event.target.value });
  };

  const handleColorChange = (event) => {
    dispatch({ type: 'UPDATE_NOTE_COLOR', payload: event.target.value });
  };

  const saveEditedNote = () => {
    const newNotes = notes.map((note) =>
      note.id === noteToEdit.id ? { ...note, ...noteToEdit } : note
    );
    dispatch({ type: 'SAVE_EDITED_NOTE', payload: newNotes });
    handleCloseEditModal();
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleCloseEditModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormLabel>Note Content</FormLabel>
          <NoteInput value={noteToEdit.noteText} onChange={handleTextChange} />
          <FormLabel>Color</FormLabel>
          <br />
          <ColorInput
            type="color"
            value={noteToEdit.color}
            onChange={handleColorChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button cancel="true" onClick={handleCloseEditModal} type="button">
            Cancel
          </Button>
          <Button onClick={saveEditedNote}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

EditModal.propTypes = {
  show: PropTypes.bool,
  handleCloseEditModal: PropTypes.func,
};

export default EditModal;
