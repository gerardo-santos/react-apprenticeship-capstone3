import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { CardListContainer } from './styles/CardListContainer.styled';
import NoteCard from './NoteCard';
import NoNotesAlert from './NoNotesAlert';
import PropTypes from 'prop-types';

const NoteCardList = ({ archivesPage, handleShowEditModal, search }) => {
  const { notes, archives, query } = useContext(GlobalContext);
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    setFilteredNotes(
      notes.filter((note) =>
        note.noteText.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [search, notes]);

  const filteredNotesOrArchivesArray = archivesPage ? archives : filteredNotes;
  const alertMessage = 'There are no match results. Try another search.';

  return (
    <CardListContainer>
      {filteredNotesOrArchivesArray.map((note) => (
        <NoteCard
          key={note.id}
          id={note.id}
          noteText={note.noteText}
          color={note.color}
          archivesPage={archivesPage}
          handleShowEditModal={handleShowEditModal}
        />
      ))}
      {!archivesPage && query.length > 0 && filteredNotes.length === 0 && (
        <NoNotesAlert alertMessage={alertMessage} />
      )}
    </CardListContainer>
  );
};

NoteCardList.propTypes = {
  archivesPage: PropTypes.bool,
  handleShowEditModal: PropTypes.func,
  search: PropTypes.string,
};

export default NoteCardList;
