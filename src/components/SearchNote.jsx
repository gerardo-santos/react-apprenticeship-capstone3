import React from 'react';
import { SearchInput } from './styles/SearchInput.styled';

const SearchNote = () => {
  return (
    <form>
      <SearchInput placeholder="Search for a note" />
    </form>
  );
};

export default SearchNote;
