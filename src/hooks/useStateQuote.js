import { useState } from "react";
import { initialState } from "../initialState";

const useStateQuote = () => {
  const [state, setState] = useState(initialState);

  function addQuote(quote) {
    setState({
      ...state,
      quotes: [...state.quotes, quote],
    });
  }

  return {
    addQuote,
    state,
  };
};

export default useStateQuote;
