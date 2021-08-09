import { useMemo } from 'react';

function filterTableBy(filter) {
  function hasValueKeyword(value) {
    return value?.toString().toLowerCase().includes(filter);
  }

  return (row) => {
    return row.some(hasValueKeyword);
  };
}

function sortTableBy(column, ascending) {
  return (row1, row2) => {
    let firstValue = row1[column]?.toString().toLowerCase();
    let secondValue = row2[column]?.toString().toLowerCase();

    if (!firstValue) {
      return 1;
    }

    if (!secondValue) {
      return -1;
    }

    return firstValue.localeCompare(secondValue) * (ascending ? 1 : -1);
  };
}

function useSortAndFilterData({ data, sorting, filter }) {
  return useMemo(() => {
    return data
      .filter(filterTableBy(filter))
      .sort(sortTableBy(sorting.column, sorting.ascending));
  }, [data, filter, sorting]);
}

export default useSortAndFilterData;
