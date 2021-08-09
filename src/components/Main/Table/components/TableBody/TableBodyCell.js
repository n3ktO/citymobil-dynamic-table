import { memo, useContext } from 'react';

import styled from 'styled-components';

import { SetSelectionContext } from '../../context/SetSelectionContext';

const TableCellStyle = styled.td`
  padding: 16px 24px;
  border: 1px solid #dee5eb;
  text-align: center;
  cursor: ${(props) => (props.exist ? 'pointer' : 'default')};
  font-size: 14px;

  &:first-child {
    text-align: left;
    cursor: default;
  }
`;

const TableBodyCell = memo(({ title, value, isTitle = false }) => {
  const setSelection = useContext(SetSelectionContext);

  function handleClick() {
    if (!isTitle && value) {
      setSelection?.({ title, value });
    }
  }

  return (
    <TableCellStyle onClick={handleClick} exist={!!value}>
      {value ?? '—'}
    </TableCellStyle>
  );
});

export default TableBodyCell;
