import { CHANGE_TOP_BANNERS } from "./constants";

import { getTopBanners } from "@/api/recommend";
const changeTopBannersAction = (res)=>({
  type:CHANGE_TOP_BANNERS,
  topBanners:res.banners
})
export const getTopBannerAction = () => {
  return (dispath) => {
    getTopBanners().then((res) => {
      dispath(changeTopBannersAction(res))
    });
  };
};
