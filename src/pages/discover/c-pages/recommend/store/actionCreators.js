import { CHANGE_HOT_RECOMMEND, CHANGE_TOP_BANNERS } from "./constants";

import { getTopBanners, getHotRecommends } from "@/api/recommend";
const changeTopBannersAction = (res) => ({
  type: CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});
const changeHotRecommend = (res) => ({
  type: CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result,
});

export const getTopBannerAction = () => {
  return (dispath) => {
    getTopBanners().then((res) => {
      dispath(changeTopBannersAction(res));
    });
  };
};
export const getHotRecommendAction = (limit) => {
  return (dispath) => {
    getHotRecommends(limit).then((res) => {
      dispath(changeHotRecommend(res));
    });
  };
};
