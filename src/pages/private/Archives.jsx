import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { PageTitle } from '../../components/styles/PageTitle.styled';
import { PageContainer } from '../../components/styles/PageContainer.styled';
import NoteCardList from '../../components/NoteCardList';
import NoNotesAlert from '../../components/NoNotesAlert';

const Archives = () => {
  const { archives } = useContext(GlobalContext);
  const alertMessage = 'Notes have not been added to archives yet.';
  return (
    <>
      <PageTitle>Archives</PageTitle>
      <PageContainer>
        {archives.length > 0 ? (
          <NoteCardList archivesPage={true} />
        ) : (
          <NoNotesAlert alertMessage={alertMessage} />
        )}
      </PageContainer>
    </>
  );
};

export default Archives;
