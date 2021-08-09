import { createContext } from 'react';

export const SetSelectionContext = createContext(null);

export function SetSelectionProvider({ children, value }) {
  return (
    <SetSelectionContext.Provider value={value}>
      {children}
    </SetSelectionContext.Provider>
  );
}
