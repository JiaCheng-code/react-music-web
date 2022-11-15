import request from "../services/request";

//轮播图
export function getTopBanners() {
  return request({
    url: "/banner",
  });
}
//热门推荐
export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit,
    },
  });
}
//新碟上映
export function getNewAlbum(limit) {
  return request({
    url: "/top/album",
    params: {
      limit,
    },
  });
}
// 飙升榜
export function getTopList(data) {
  return request({
    url: "/playlist/track/all",
    params: data,
  });
}
