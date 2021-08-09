import { createContext, useState } from 'react';

export const SortingStateContext = createContext(null);

export function SortingStateProvider({ children }) {
  const [sorting, setSorting] = useState({
    column: 0,
    ascending: true,
  });

  return (
    <SortingStateContext.Provider value={[sorting, setSorting]}>
      {children}
    </SortingStateContext.Provider>
  );
}
