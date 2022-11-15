import React, { memo } from "react";

import { renderRoutes } from "react-router-config";

import routes from "./router";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import store from "./store";

import WYAppFooter from "@/components/app-footer";
import WYAppHeader from "@/components/app-header";
import WYPlayerBar from "./pages/player/app-player-bar";

const App = memo(() => {
  return (
    // Provider共享store
    <Provider store={store}>
      <HashRouter>
        <WYAppHeader />
        {renderRoutes(routes)}
        <WYAppFooter />
        <WYPlayerBar></WYPlayerBar>
      </HashRouter>
    </Provider>
  );
});

export default App;
