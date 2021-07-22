import React from "react";
import { CForm, CFormLabel, CFormControl, CButton } from "@coreui/react";

const CreateQuote = ({ form, onSubmit }) => {
  return (
    <>
      <CForm ref={form} onSubmit={onSubmit}>
        <div className="mb-3">
          <CFormLabel>
            <strong>Title</strong>
          </CFormLabel>
          <CFormControl
            name="title"
            type="text"
            placeholder="Enter title of your quote"
          />
        </div>
        <div className="mb-3">
          <CFormLabel>
            <strong>Quote</strong>
          </CFormLabel>
          <CFormControl
            name="quote"
            component="textarea"
            placeholder="Read your qoute"
            rows="3"
          ></CFormControl>
        </div>
        <div className="mb-3 text-center">
          <CButton color="dark" variant="ghost" type="submit">
            Save quote
          </CButton>
        </div>
      </CForm>
    </>
  );
};

export default CreateQuote;
