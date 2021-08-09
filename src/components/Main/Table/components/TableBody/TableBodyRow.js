import { memo } from 'react';
import TableBodyCell from './TableBodyCell';

const TableBodyRow = memo(({ row }) => (
  <tr>
    {row.map((value, valueIndex) => (
      <TableBodyCell
        key={valueIndex}
        title={row[0]}
        value={value}
        isTitle={valueIndex === 0} />
    ))}
  </tr>
));

export default TableBodyRow;
