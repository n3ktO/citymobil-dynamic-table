import styled from 'styled-components';

const TableCellStyle = styled.td`
padding: 16px 24px;
border: 1px solid #dee5eb;
text-align: center;
cursor: ${props => props.exist ? 'pointer' : 'default'};
font-size: 14px;

&:first-child {
  text-align: left;
  cursor: default;
}
`;

function TableBodyCell({ rowTitle, value, index }) {
  return (
    <TableCellStyle
      key={index}
      data-key={index}
      data-row-title={rowTitle}
      data-value={value}
      exist={!!value}
    >
      {value ?? '—'}
    </TableCellStyle>
  );
}

export default TableBodyCell;