import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Search from './Search';
import Table from './Table/Table';
import Selection from './Selection';

const MainStyle = styled.main`
display: flex;
flex-direction: column;
box-sizing: border-box;
width: 100%;
padding: 32px 40px;
`;

function Main() {
  const [filter, setFilter] = useState('');

  const [data, setData] = useState();
  const [columns, setColumns] = useState();
  const [selection, setSelection] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch('https://city-mobil.ru/api/cars');
      const data = await response.json();

      const columnTitles = ['Марка и модель', ...data['tariffs_list']];
      setColumns(columnTitles);

      const rows = data['cars'].map((car, id) => {
        const row = columnTitles.map((title, index) => {
          if (index === 0) {
            return `${car.mark} ${car.model}`;
          }
          return car['tariffs'][title]?.['year'];
        });
        return { id, data: row };
      });
      
      setData(rows);
    })();
  }, []);

  return (
    <MainStyle>
      <Search onEdit={setFilter} value={filter} />
      {data && (
        <Table
          columns={columns}
          data={data}
          setSelection={setSelection}
          filter={filter}
        />
      )}
      {!data && 'Loading...'}
      {selection && (
        <Selection
          car={selection.title}
          year={selection.value}
        />
      )}
    </MainStyle>
  );
}

export default Main;