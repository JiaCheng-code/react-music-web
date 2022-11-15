import {
  CHANGE_HOT_NEWALBUM,
  CHANGE_HOT_RECOMMEND,
  CHANGE_TOP_BANNERS,
  CHANGE_UP_RANKING,
  CHANGE_NEW_RANKING,
  CHANGE_ORIGIN_RANKING,
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
const changeUpRankingAction = (res) => ({
  type: CHANGE_UP_RANKING,
  upRanking: res.playlist,
});
const changeNewRankingAction = (res) => ({
  type: CHANGE_NEW_RANKING,
  newRanking: res.playlist,
});
const changeOrignRankingAction = (res) => ({
  type: CHANGE_ORIGIN_RANKING,
  topLists: res.playlist,
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
export const getTopListAction = (idx) => {
  return (dispath) => {
    getNewAlbum(idx).then((res) => {
      switch (idx) {
        case 0:
          dispath(changeUpRankingAction(res));
          break;
        case 1:
          dispath(changeNewRankingAction(res));
          break;
        case 2:
          dispath(changeOrignRankingAction(res));
          break;
        default:
          break;
      }
    });
  };
};
