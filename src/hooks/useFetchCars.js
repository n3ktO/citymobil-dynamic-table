import { useEffect, useState } from 'react';

const CARS_URL = 'https://city-mobil.ru/api/cars';

function useFetchCars() {
  const [data, setData] = useState(null);
  const [columns, setColumns] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(CARS_URL);
      const carsData = await response.json();

      const columnTitles = ['Марка и модель', ...carsData['tariffs_list']];

      const rows = carsData['cars'].map((car) => {
        return columnTitles.map((title, index) => {
          if (index === 0) {
            return `${car.mark} ${car.model}`;
          }
          return car['tariffs'][title]?.['year'];
        });
      });

      setColumns(columnTitles);
      setData(rows);
    })();
  }, []);

  return { data, columns };
}

export default useFetchCars;
