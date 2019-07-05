import React, { useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

const WhatWeDoPage = () => {
  return (
    <ReactFullpage
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <h1>What we do</h1>
            </div>
            <div className="section">
              <h1>What we do</h1>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default WhatWeDoPage;
