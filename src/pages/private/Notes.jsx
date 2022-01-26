import { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { PageTitle } from '../../components/styles/PageTitle.styled';
import { PageContainer } from '../../components/styles/PageContainer.styled';
import { Button } from '../../components/styles/Button.styled';
import SearchNote from '../../components/SearchNote';
import AddNoteForm from '../../components/AddNoteForm';
import NoNotesAlert from '../../components/NoNotesAlert';
import NoteCardList from '../../components/NoteCardList';

const Notes = () => {
  const { notes } = useContext(GlobalContext);
  const [showAddNoteForm, setShowAddNoteForm] = useState(false);

  const toggleForm = () => {
    setShowAddNoteForm(!showAddNoteForm);
  };
  return (
    <>
      <PageTitle>Notes</PageTitle>
      <PageContainer>
        <SearchNote />
        {showAddNoteForm ? (
          <AddNoteForm toggleForm={toggleForm} />
        ) : (
          <Button onClick={toggleForm}>Create a note</Button>
        )}
        {notes.length > 0 ? <NoteCardList /> : <NoNotesAlert />}
      </PageContainer>
    </>
  );
};

export default Notes;
