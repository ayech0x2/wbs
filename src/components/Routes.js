import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import HomePage from "../pages/home/HomePage";
import WhatWeDoPage from "../pages/whatWeDo/WhatWeDoPage";
import WhoAreWePage from "../pages/whoAreWe/WhoAreWePage";
import GetInTouchPage from "../pages/getInTouch/getInTouch";

const Routes = ({ location }) => {
  return (
    <>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={{ enter: 300, exit: 300 }}
        >
          <section className="route-section">
            <Switch location={location}>
              <Route path="/" exact component={HomePage} />
              <Route path="/what-we-do/" component={WhatWeDoPage} />
              <Route path="/who-are-we/" component={WhoAreWePage} />
              <Route path="/get-in-touch/" component={GetInTouchPage} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default withRouter(Routes);
