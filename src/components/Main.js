import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Search from './Search';
import Table from './Table';
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
    fetch('https://city-mobil.ru/api/cars')
      .then(res => res.json())
      .then(data => {
        const columnTitles = ['Марка и модель', ...data['tariffs_list']];
        setColumns(columnTitles);

        const rows = data['cars'].map((car => {
          return columnTitles.map((title, index) => {
            if (index === 0) {
              return `${car.mark} ${car.model}`;
            }
            return car['tariffs'][title]?.['year'];
          });
        }));
        
        setData(rows);
        console.log(rows);
      });
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
      {selection && (
        <Selection
          car={selection.car}
          year={selection.year}
        />
      )}
    </MainStyle>
  );
}

export default Main;