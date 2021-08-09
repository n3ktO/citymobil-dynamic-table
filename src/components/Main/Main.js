import { useState } from 'react';
import styled from 'styled-components';

import Search from './Search';
import Table from './Table/Table';
import Selection from './Selection';

import useFetchCars from '../../hooks/useFetchCars';

const MainStyle = styled.main`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  padding: 32px 40px;
`;

function Main() {
  const { data, columns } = useFetchCars();

  const [filter, setFilter] = useState('');
  const [selection, setSelection] = useState(null);

  return (
    <MainStyle>
      <Search setFilter={setFilter} />
      {data ? (
        <Table
          columns={columns}
          data={data}
          filter={filter}
          setSelection={setSelection}
        />
      ) : (
        'Loading...'
      )}
      {selection && <Selection car={selection.title} year={selection.value} />}
    </MainStyle>
  );
}

export default Main;
