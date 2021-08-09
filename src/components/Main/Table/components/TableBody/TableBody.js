import { memo, useContext } from 'react';

import TableBodyRow from './TableBodyRow';

import { SortingStateContext } from '../../context/SortingStateContext';

import useSortAndFilterData from './hooks/useSortAndFilterData';

const TableBody = memo(({ data = [], filter = '' }) => {
  const [sorting] = useContext(SortingStateContext);
  const sortedAndFilteredData = useSortAndFilterData({ data, filter, sorting });

  return (
    <tbody>
      {sortedAndFilteredData.map((data) => (
        <TableBodyRow key={data[0]} row={data} />
      ))}
    </tbody>
  );
});

export default TableBody;
