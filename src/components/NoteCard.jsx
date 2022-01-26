import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { NoteCardContainer } from './styles/NoteCardContainer.styled';
import { CardTextContainer } from './styles/CardTextContainer.styled';
import { Button } from './styles/Button.styled';
import PropTypes from 'prop-types';

const NoteCard = ({ id, noteText, color, archivesPage }) => {
  const { dispatch, notes, archives } = useContext(GlobalContext);
  const addNoteToArchives = () => {
    const newArchivedNote = { id, noteText, color };
    dispatch({ type: 'ADD_NOTE_TO_ARCHIVES', payload: newArchivedNote });
    removeArchivedNoteFromNotes();
  };

  const removeArchivedNoteFromNotes = () => {
    const newNotes = notes.filter((note) => note.id !== id);
    dispatch({
      type: 'REMOVE_ARCHIVED_NOTE_FROM_NOTES',
      payload: newNotes,
    });
  };

  const permanentlyDeleteArchivedNote = () => {
    const newArchivedNotes = archives.filter(
      (archivedNote) => archivedNote.id !== id
    );
    dispatch({
      type: 'PERMANENTLY_DELETE_ARCHIVED_NOTE',
      payload: newArchivedNotes,
    });
  };

  return (
    <NoteCardContainer color={color}>
      <CardTextContainer>{noteText}</CardTextContainer>
      <div>
        {archivesPage ? (
          <Button secondary="#bdbdbd" onClick={permanentlyDeleteArchivedNote}>
            Delete
          </Button>
        ) : (
          <>
            <Button secondary="#bdbdbd" onClick={addNoteToArchives}>
              Archive
            </Button>
            <Button secondary="#bdbdbd">Edit</Button>
          </>
        )}
      </div>
    </NoteCardContainer>
  );
};

NoteCard.propTypes = {
  id: PropTypes.number,
  noteText: PropTypes.string,
  color: PropTypes.string,
  archivesPage: PropTypes.bool,
};
export default NoteCard;
