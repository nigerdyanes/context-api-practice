import React, { useContext, useRef } from "react";
import { QuotesContext } from "../context/QuotesContext";
import { CContainer, CCard, CCardHeader, CCardBody } from "@coreui/react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import Navbar from "../components/Navbar";
import CreateQuote from "../components/CreateQuote";

const Quote = ({ history }) => {
  const { addQuote } = useContext(QuotesContext);
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const quote = {
      id: uuidv4(),
      title: formData.get("title"),
      quote: formData.get("quote"),
      likes: 0,
      username:"WriterGhost",
      createAt: moment().format(),
      updatedAt: "",
    };
    addQuote(quote);
    history.push("/home");
  };

  return (
    <>
      <Navbar />
      <hr />
      <CContainer>
        <CCard>
          <CCardHeader>
            <h3>Tell your amazing quote</h3>
          </CCardHeader>
          <CCardBody>
            <CreateQuote form={form} onSubmit={handleSubmit} />
          </CCardBody>
        </CCard>
      </CContainer>
    </>
  );
};

export default Quote;
