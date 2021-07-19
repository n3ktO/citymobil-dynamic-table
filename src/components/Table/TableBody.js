import { memo } from 'react';
import TableBodyRow from './TableBodyRow';

const TableBody = memo(({
  data = [],
  sorting,
  setSelection,
  filter = ''
}) => {
  function handleBodyCellClick(event) {
    const valueIndex = +event.target.getAttribute('data-key');
    const rowTitle = event.target.getAttribute('data-row-title');
    const value = event.target.getAttribute('data-value');
    if (valueIndex !== 0) {
      if (value) {
        setSelection({
          title: rowTitle,
          value
        });
      }
    }
  }

  function filterTable(row) {
    return row.data.some(value => {
      return value?.toString().toLowerCase().includes(filter);
    })
  }

  function sortTable(row1, row2) {
    let firstValue = row1.data[sorting.column]?.toString().toLowerCase();
    let secondValue = row2.data[sorting.column]?.toString().toLowerCase();

    if (!firstValue) {
      firstValue = sorting.ascending ? Infinity : 0;
    }

    if (!secondValue) {
      secondValue = sorting.ascending ? Infinity : 0;
    }

    if (firstValue < secondValue) {
      return sorting.ascending ? -1 : 1;
    }
    
    if (firstValue > secondValue) {
      return sorting.ascending ? 1 : -1;
    }
    
    return 0;
  }

  return (
    <tbody onClick={handleBodyCellClick}>
      {data
        .filter(filterTable)
        .sort(sortTable)
        .map(({ id, data }) => (
          <TableBodyRow key={id} row={data} />
        ))}
    </tbody>
  );
});

export default TableBody;