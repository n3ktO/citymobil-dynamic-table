import TableBodyCell from './TableBodyCell';

function TableBodyRow({ row, index }) {
  return (
    <tr>
      {row.map((value, valueIndex) => (
        <TableBodyCell
          key={valueIndex}
          rowTitle={row[0]}
          value={value}
          index={valueIndex}
        />
      ))}
    </tr>
  );
}

export default TableBodyRow;