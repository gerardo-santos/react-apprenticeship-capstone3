import { useState, useContext, useRef } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { PageTitle } from '../../components/styles/PageTitle.styled';
import { PageContainer } from '../../components/styles/PageContainer.styled';
import { Button } from '../../components/styles/Button.styled';
import { debounce } from '../../utils/functions';
import SearchNote from '../../components/SearchNote';
import AddNoteForm from '../../components/AddNoteForm';
import NoNotesAlert from '../../components/NoNotesAlert';
import NoteCardList from '../../components/NoteCardList';
import EditModal from '../../components/EditModal';

const Notes = () => {
  const { notes, dispatch } = useContext(GlobalContext);
  const [showAddNoteForm, setShowAddNoteForm] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [search, setSearch] = useState('');
  const debouncedFilterHandler = useRef(debounce(updateSearch, 300)).current;

  function updateSearch(newQuery) {
    setSearch(() => newQuery);
  }

  const debounceOnChange = (newQuery) => {
    dispatch({ type: 'UPDATE_QUERY', payload: newQuery });
    debouncedFilterHandler(newQuery);
  };

  const toggleForm = () => {
    setShowAddNoteForm(!showAddNoteForm);
  };

  const handleCloseEditModal = () => {
    dispatch({ type: 'SELECT_NOTE_TO_EDIT', payload: {} });
    setShowEditModal(false);
  };

  const handleShowEditModal = (noteToEdit) => {
    dispatch({ type: 'SELECT_NOTE_TO_EDIT', payload: noteToEdit });
    setShowEditModal(true);
  };

  const alertMessage =
    'There are no notes; please create a new one using the note creation form.';

  return (
    <>
      <PageTitle>Notes</PageTitle>
      <EditModal
        show={showEditModal}
        handleCloseEditModal={handleCloseEditModal}
      />
      <PageContainer>
        <SearchNote debounceOnChange={debounceOnChange} />
        {showAddNoteForm ? (
          <AddNoteForm toggleForm={toggleForm} />
        ) : (
          <Button onClick={toggleForm}>Create a note</Button>
        )}
        {notes.length > 0 ? (
          <NoteCardList
            handleShowEditModal={handleShowEditModal}
            search={search}
          />
        ) : (
          <NoNotesAlert alertMessage={alertMessage} />
        )}
      </PageContainer>
    </>
  );
};

export default Notes;
