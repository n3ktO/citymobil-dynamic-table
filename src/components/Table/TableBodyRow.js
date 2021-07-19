import { memo } from 'react';
import TableBodyCell from './TableBodyCell';

const TableBodyRow = memo(({ row }) => {
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
});

export default TableBodyRow;