import { Input } from 'components/Input';

export const SearchBar = ({ query, setQuery }) => {
  return (
    <Input
      type="search"
      key="random1"
      maxLength={60}
      value={query}
      placeholder={'Szukaj'}
      onChange={(e) => setQuery(e.target.value)}
      search
    />
  );
};
