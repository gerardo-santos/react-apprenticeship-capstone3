import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { SearchInput } from './styles/SearchInput.styled';
import PropTypes from 'prop-types';

const SearchNote = ({ debounceOnChange }) => {
  const { query } = useContext(GlobalContext);
  return (
    <div>
      <SearchInput
        placeholder="Search for a note"
        value={query}
        onChange={(event) => debounceOnChange(event.target.value)}
      />
    </div>
  );
};
SearchNote.propTypes = {
  debounceOnChange: PropTypes.func,
};

export default SearchNote;
