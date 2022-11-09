import React, { memo } from "react";

import { renderRoutes } from "react-router-config";

import routes from "./router";

import WYAppFooter from "@/components/app-footer";
import WYAppHeader from "@/components/app-header";

const App = memo(() => {
  return (
    <div>
      <WYAppHeader />
      {renderRoutes(routes)}
      <WYAppFooter />
    </div>
  );
});

export default App;
