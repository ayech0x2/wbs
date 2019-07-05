import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

const HomePage = () => {
  return (
    <ReactFullpage
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <h1>Home page</h1>

            </div>
            <div className="section">
              <p>Section 2</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default HomePage;
