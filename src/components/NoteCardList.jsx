import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { CardListContainer } from './styles/CardListContainer.styled';
import NoteCard from './NoteCard';
import PropTypes from 'prop-types';

const NoteCardList = ({ archivesPage }) => {
  const { notes, archives } = useContext(GlobalContext);
  let iterator = notes;
  if (archivesPage) {
    iterator = archives;
  }
  return (
    <CardListContainer>
      {iterator.map((note) => (
        <NoteCard
          key={note.id}
          id={note.id}
          noteText={note.noteText}
          color={note.color}
          archivesPage={archivesPage}
        />
      ))}
    </CardListContainer>
  );
};
NoteCardList.propTypes = {
  archivesPage: PropTypes.bool,
};

export default NoteCardList;
