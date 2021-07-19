import TableBodyRow from './TableBodyRow';

function TableBody({
  data = [],
  sorting,
  setSelection,
  filter = ''
}) {
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
    return row.some(value => {
      return value?.toString().toLowerCase().includes(filter);
    })
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
    <tbody onClick={handleBodyCellClick}>
      {data
        .filter(filterTable)
        .sort(sortTable)
        .map((row, index) => (
          <TableBodyRow key={index} row={row} index={index} />
        ))}
    </tbody>
  );
}

export default TableBody;