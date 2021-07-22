import React from "react";
import Home from "./pages/Home";
import { QuotesProvider } from "./context/QuotesContext";
export default function App() {
  return (
    <>
      <QuotesProvider>
        <Home />
      </QuotesProvider>
    </>
  );
}
