import React from "react";
import { Redirect } from "react-router-dom";

import WYDiscover from "@/pages/discover";
import WYMine from "@/pages/mine";
import WYFriend from "@/pages/friend";
import WYRecommend from "../pages/discover/c-pages/recommend";
import WYSongs from "../pages/discover/c-pages/songs";
import WYRanking from "../pages/discover/c-pages/ranking";
import WYDjradio from "../pages/discover/c-pages/djradio";
import WYArtist from "../pages/discover/c-pages/artist";
import WYAlbum from "../pages/discover/c-pages/album";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  { path: "/mine", component: WYMine },
  {
    path: "/discover",
    component: WYDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      { path: "/discover/recommend", component: WYRecommend },
      { path: "/discover/songs", component: WYSongs },
      { path: "/discover/ranking", component: WYRanking },
      { path: "/discover/djradio", component: WYDjradio },
      { path: "/discover/artist", component: WYArtist },
      { path: "/discover/album", component: WYAlbum },
    ],
  },
  { path: "/friend", component: WYFriend },
];
export default routes;
