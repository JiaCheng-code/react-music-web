import React from "react";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import { discoverMenu } from "@/common/local-data";
import { DiscoverWrapper, TopMenu } from "./style";

export default function WYDiscover(props) {
  console.log(props);
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {discoverMenu.map((item) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
      {renderRoutes(props.route.routes)}
    </DiscoverWrapper>
  );
}
