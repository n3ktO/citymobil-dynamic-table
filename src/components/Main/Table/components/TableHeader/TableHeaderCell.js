import { memo, useContext, useMemo } from 'react';
import styled from 'styled-components';

import { SortingStateContext } from '../../context/SortingStateContext';

const TableHeaderCellStyle = styled.th`
  position: relative;
  padding: 16px 24px;
  border: 1px solid #dee5eb;

  &:first-child {
    text-align: left;
  }

  &::after {
    position: absolute;
    right: 4px;
    content: ${({ isAscending }) => {
      if (isAscending === undefined) return;
      return `"${isAscending ? '▼' : '▲'}"`;
    }};
  }
`;

const TableHeaderCell = memo(({ children, index }) => {
  const [sorting, setSorting] = useContext(SortingStateContext);

  function handleClick() {
    const isCurrentCellClicked = sorting.column === index;
    setSorting({
      column: index,
      ascending: isCurrentCellClicked ^ sorting.ascending,
    });
  }

  const isAscending = useMemo(() => {
    return sorting.column === index ? sorting.ascending : undefined;
  }, [sorting, index]);

  return (
    <TableHeaderCellStyle onClick={handleClick} isAscending={isAscending}>
      {children}
    </TableHeaderCellStyle>
  );
});

export default TableHeaderCell;
