import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { CardListContainer } from './styles/CardListContainer.styled';
import NoteCard from './NoteCard';

const NoteCardList = () => {
  const { notes } = useContext(GlobalContext);
  return (
    <CardListContainer>
      {notes.map((note) => (
        <NoteCard key={note.id} noteText={note.noteText} color={note.color} />
      ))}
    </CardListContainer>
  );
};

export default NoteCardList;
