import { Map } from "immutable";
import {
  CHANGE_HOT_NEWALBUM,
  CHANGE_HOT_RECOMMEND,
  CHANGE_TOP_BANNERS,
  CHANGE_UP_RANKING,
  CHANGE_NEW_RANKING,
  CHANGE_ORIGIN_RANKING,
} from "./constants";

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  upRanking: [],
  newRanking: [],
  orignRanking: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.hotRecommends);
    case CHANGE_HOT_NEWALBUM:
      return state.set("newAlbums", action.newAlbums);
    case CHANGE_UP_RANKING:
      return state.set("upRanking", action.upRanking);
    case CHANGE_NEW_RANKING:
      return state.set("newRanking", action.newRanking);
    case CHANGE_ORIGIN_RANKING:
      return state.set("originRanking", action.originRanking);
    default:
      return state;
  }
}

export default reducer;
