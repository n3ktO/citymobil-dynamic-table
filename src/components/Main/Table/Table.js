import styled from 'styled-components';

import TableHeader from './components/TableHeader/TableHeader';
import TableBody from './components/TableBody/TableBody';

import { SetSelectionProvider } from './context/SetSelectionContext';
import { SortingStateProvider } from './context/SortingStateContext';

const TableStyle = styled.table`
  border-collapse: collapse;
`;

function Table({ columns = [], data = [], setSelection, filter = '' }) {
  return (
    <SetSelectionProvider value={setSelection}>
      <TableStyle>
        <SortingStateProvider>
          <TableHeader columns={columns} />
          <TableBody data={data} filter={filter} />
        </SortingStateProvider>
      </TableStyle>
    </SetSelectionProvider>
  );
}

export default Table;
