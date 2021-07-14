import styled from 'styled-components';

const SearchStyle = styled.input`
  width: 100%;
  margin-bottom: 16px;
  padding: 12px 16px;
  box-sizing: border-box;
  border: 1px solid #dee5eb;
  background: rgba(240, 242, 244, 0.5);
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
`;

function Search({ onEdit }) {
  return (
    <SearchStyle
      placeholder="Поиск..."
      onChange={e => onEdit(e.currentTarget.value.toLowerCase())}
    />
  );
} 

export default Search;