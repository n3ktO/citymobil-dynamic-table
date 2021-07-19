import styled from 'styled-components';

const TableHeaderRowStyle = styled.tr`
background: rgba(240, 242, 244, 0.5);
font-size: 14px;
text-align: center;
cursor: pointer;
`;

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
  content: ${props => {
    if (props.sorting) {
      return `"${props.sorting.ascending ? '▼' : '▲'}"`;
    }
  }};
}
`;

function TableHeader({
  columns = [],
  sorting,
  setSorting
}) {
  function handleHeaderCellClick(event) {
    const index = +event.target.getAttribute('data-key');
    setSorting({
      column: index,
      ascending: sorting.column !== index || !sorting.ascending
    });
  }

  return (
    <thead>
      <TableHeaderRowStyle onClick={handleHeaderCellClick}>
        {columns.map((column, index) => (
          <TableHeaderCellStyle
            key={index}
            data-key={index}
            sorting={sorting.column === index ? sorting : undefined}
          >
            {column} 
          </TableHeaderCellStyle>
        ))}
      </TableHeaderRowStyle>
    </thead>
  );
}

export default TableHeader;