import React from "react";
import "./who-are-we.scss";
import ReactFullpage from "@fullpage/react-fullpage";

const WhoAreWePage = () => {
  return (
    <ReactFullpage
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <h1>Who are we</h1>
            </div>
            <div className="section">
              <h1>Who are we</h1>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default WhoAreWePage;
