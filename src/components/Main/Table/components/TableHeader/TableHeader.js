import { memo } from 'react';
import styled from 'styled-components';

import TableHeaderCell from './TableHeaderCell';

const TableHeaderRowStyle = styled.tr`
  background: rgba(240, 242, 244, 0.5);
  font-size: 14px;
  text-align: center;
  cursor: pointer;
`;

const TableHeader = memo(({ columns = [] }) => (
  <thead>
    <TableHeaderRowStyle>
      {columns.map((column, index) => (
        <TableHeaderCell key={index} index={index}>
          {column}
        </TableHeaderCell>
      ))}
    </TableHeaderRowStyle>
  </thead>
));

export default TableHeader;
