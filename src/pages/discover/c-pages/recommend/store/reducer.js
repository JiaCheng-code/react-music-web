import { Map } from "immutable";
import {
  CHANGE_HOT_NEWALBUM,
  CHANGE_HOT_RECOMMEND,
  CHANGE_TOP_BANNERS,
} from "./constants";

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.hotRecommends);
    case CHANGE_HOT_NEWALBUM:
      return state.set("newAlbums", action.newAlbums);
    default:
      return state;
  }
}

export default reducer;
