import {
  CHANGE_HOT_NEWALBUM,
  CHANGE_HOT_RECOMMEND,
  CHANGE_TOP_BANNERS,
} from "./constants";

import { getTopBanners, getHotRecommends, getNewAlbum } from "@/api/recommend";
const changeTopBannersAction = (res) => ({
  type: CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});
const changeHotRecommendAction = (res) => ({
  type: CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result,
});
const changeNewAlbumAction = (res) => ({
  type: CHANGE_HOT_NEWALBUM,
  newAlbums: res.albums,
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
      dispath(changeHotRecommendAction(res));
    });
  };
};
export const getNewAlbumAction = (limit) => {
  return (dispath) => {
    getNewAlbum(limit).then((res) => {
      dispath(changeNewAlbumAction(res));
    });
  };
};
