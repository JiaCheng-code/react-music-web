import React, { memo } from "react";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import routes from "./router";

import WYAppFooter from "@/components/app-footer";
import WYAppHeader from "@/components/app-header";

const App = memo(() => {
  return (
    <HashRouter>
      <WYAppHeader />
      {renderRoutes(routes)}
      <WYAppFooter />
    </HashRouter>
  );
});

export default App;
