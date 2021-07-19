import { memo } from 'react';
import styled from 'styled-components';

const SelectionStyle = styled.div`
  width: 100%;
  margin-top: 16px;
  padding: 12px 16px;
  box-sizing: border-box;
  position: sticky;
  bottom: 56px;
  border: 1px solid #dee5eb;
  background: #e2e3e4;
  font-size: 16px;
`;

const Selection = memo(({ car, year }) => (
  <SelectionStyle>
    Выбран автомобиль {car} {year} года выпуска.
  </SelectionStyle>
));

export default Selection;