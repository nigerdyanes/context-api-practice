import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Article from "../components/Article";
import { Link } from "react-router-dom";
import { QuotesContext } from "../context/QuotesContext";
import { CContainer, CButton } from "@coreui/react";

const Home = () => {
  const { state } = useContext(QuotesContext);
  return (
    <>
      <Navbar />
      <hr />
      <CContainer>
        <Link to="/quote">
          <CButton color="secondary" variant="ghost">
            New Quote
          </CButton>
        </Link>
      </CContainer>
      <CContainer>
        {state.quotes.map((quote) => (
          <Article key={quote.id} {...quote} />
        ))}
      </CContainer>
    </>
  );
};

export default Home;
