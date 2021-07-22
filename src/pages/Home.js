import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Article from "../components/Article";
import { QuotesContext } from "../context/QuotesContext";
import { CContainer } from "@coreui/react";

const Home = () => {
  const { state } = useContext(QuotesContext);
  return (
    <>
      <Navbar />
      <hr />
      <CContainer>
        {state.quotes.map((quote) => (
          <Article key={quote.id} {...quote} />
        ))}
      </CContainer>
    </>
  );
};

export default Home;
