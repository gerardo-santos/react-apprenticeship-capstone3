import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { SearchInput } from './styles/SearchInput.styled';

const SearchNote = () => {
  const { query, dispatch } = useContext(GlobalContext);
  return (
    <div>
      <SearchInput
        placeholder="Search for a note"
        value={query}
        onChange={(event) =>
          dispatch({ type: 'UPDATE_QUERY', payload: event.target.value })
        }
      />
    </div>
  );
};

export default SearchNote;
