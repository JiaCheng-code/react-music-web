import WYDiscover from "@/pages/discover";
import WYMine from "@/pages/mine";
import WYFriend from "@/pages/friend";

const routes = [
  { path: "/mine", component: WYMine },
  { path: "/", component: WYDiscover },
  { path: "/friend", component: WYFriend },
];
export default routes;
