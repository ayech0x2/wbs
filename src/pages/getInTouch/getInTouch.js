import React from "react";

import "./get-in-touch.scss";
import ReactFullpage from "@fullpage/react-fullpage";

const GetInTouchPage = () => {
  return (
    <div className="get-in-touch">
      <ReactFullpage
        verticalCentered={true}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <h1>Get in touch</h1>
              </div>
              <div className="section">
                <h1>Get in touch</h1>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

export default GetInTouchPage;
