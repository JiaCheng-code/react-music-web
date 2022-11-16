import request from "../services/request";
export function getSongDetail(idx) {
  return request({
    url: "/song/detail",
    params: { idx },
  });
}
