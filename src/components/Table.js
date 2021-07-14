import { useState } from 'react';
import styled from 'styled-components';

const TableStyle = styled.table`
border-collapse: collapse;
`;

const TableRowStyle = styled.tr``;

const TableHeaderStyle = styled.th`
position: relative;
padding: 16px 24px;
border: 1px solid #dee5eb;
background: rgba(240, 242, 244, 0.5);
text-align: center;
cursor: pointer;
font-size: 14px;

&:first-child {
  text-align: left;
}

&::after {
  position: absolute;
  right: 4px;
  content: ${props => {
    if (props.sorting) {
      return `"${props.sorting.ascending ? '▼' : '▲'}"`;
    }
  }};
}
`;

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

  function setSelected(car, year) {
    if (year) {
      setSelection({ car, year });
    }
  }

  function setSortingValue(index) {
    setSorting({
      column: index,
      ascending: sorting.column !== index ? true : !sorting.ascending
    });
  }

  function sortTable(row1, row2) {
    let firstValue = row1[sorting.column]?.toString().toLowerCase();
    let secondValue = row2[sorting.column]?.toString().toLowerCase();

    if (!firstValue) {
      firstValue = sorting.ascending ? Infinity : 0;
    }

    if (!secondValue) {
      secondValue = sorting.ascending ? Infinity : 0;
    }

    if (firstValue < secondValue) {
      return sorting.ascending ? -1 : 1;
    } else if (firstValue > secondValue) {
      return sorting.ascending ? 1 : -1;
    } else {
      return 0;
    }
  }

  return (
    <TableStyle>
      <thead>
        <TableRowStyle>
          {columns.map((column, index) => (
            <TableHeaderStyle
              key={index}
              onClick={() => setSortingValue(index)}
              sorting={sorting.column === index ? sorting : undefined}
            >
              {column} 
            </TableHeaderStyle>
          ))}
        </TableRowStyle>
      </thead>
      <tbody>
        {data
          .filter(row => row.some(value => {
            return value?.toString().toLowerCase().includes(filter);
          }))
          .sort(sortTable)
          .map((row, rowIndex) => (
            <TableRowStyle key={rowIndex}>
              {row.map((value, valueIndex) => (
                <TableCellStyle
                  key={valueIndex}
                  exist={!!value}
                  onClick={() => {
                    if (valueIndex !== 0) {
                      setSelected(row[0], value);
                    }
                  }}
                >
                  {value ?? '—'}
                </TableCellStyle>
              ))}
            </TableRowStyle>
          ))}
      </tbody>
    </TableStyle>
  );
} 

export default Table;