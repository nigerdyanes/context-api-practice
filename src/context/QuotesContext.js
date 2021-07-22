import { createContext } from "react";
import useStateQuote from "../hooks/useStateQuote";
export const QuotesContext = createContext([]);

export const QuotesProvider = ({ children }) => {
  const quoteState = useStateQuote();
  return (
    <QuotesContext.Provider value={quoteState}>
      {children}
    </QuotesContext.Provider>
  );
};
