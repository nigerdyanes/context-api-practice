import { createContext, useState } from "react";
import { initialState } from "../initialState";
export const QuotesContext = createContext(initialState);

export const QuotesProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  return (
    <QuotesContext.Provider value={{ state, setState }}>
      {children}
    </QuotesContext.Provider>
  );
};
