import { useState } from 'react';
import { useGwent } from '../../context/GwentContext';

export const SearchInput = () => {
  const { setSearchQuery } = useGwent();
  const [inputValue, setInputValue] = useState('');

  const handleSearch = (e) => {
    const query = e.target.value;
    setInputValue(query);
    setSearchQuery(query.toLowerCase());
  };

  return (
    <input
      type="text"
      id="search-input"
      placeholder="Enter card name"
      value={inputValue}
      onChange={handleSearch}
    />
  );
};