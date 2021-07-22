import React from "react";
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardSubtitle,
  CCardText,
  CAvatar,
} from "@coreui/react";
import moment from "moment";
import { Article as Main } from "../styles/components/Article";
import { subString } from "../utils"
const Article = ({username,quote,likes,createAt}) => {
  return (
    <>
      <Main>
        <CCard>
          <CCardBody>
            <CCardTitle>
              <CAvatar color="secondary">{subString(username)}</CAvatar>
            </CCardTitle>
            <CCardSubtitle className="mb-2">
              {username}
            </CCardSubtitle>
            <CCardText>
              {quote}
            </CCardText>
            Likes {likes}<br />
            <strong>{moment(createAt).startOf('minutes').fromNow()}</strong>
          </CCardBody>
        </CCard>
      </Main>
    </>
  );
};

export default Article;
