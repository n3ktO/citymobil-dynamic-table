import { useState } from 'react';
import styled from 'styled-components';

import TableHeader from './TableHeader';
import TableBody from './TableBody';

const TableStyle = styled.table`
border-collapse: collapse;
`;

function Table({
  columns = [],
  data = [],
  setSelection,
  filter = ''
}) {
  const [sorting, setSorting] = useState({
    column: 0,
    ascending: true
  });

  return (
    <TableStyle>
      <TableHeader
        columns={columns}
        sorting={sorting}
        setSorting={setSorting}
      />
      <TableBody
        data={data}
        sorting={sorting}
        setSelection={setSelection}
        filter={filter}
      />
    </TableStyle>
  );
} 

export default Table;