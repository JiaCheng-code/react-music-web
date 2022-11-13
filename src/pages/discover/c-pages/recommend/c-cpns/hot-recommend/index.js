import React, { memo, useEffect } from "react";
import WYThemeHeaderRCM from "@/components/theme-header-rcm";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import WYSongsCover from "@/components/songs-cover";

import { HOT_RECOMMEND_LIMIT } from "@/common/contants";
import { HotRecommendWrapper } from "./style";
import { getHotRecommendAction } from "../../store/actionCreators";

const WYHotRecommend = memo(() => {
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"]),
    }),
    shallowEqual
  );
  const dispath = useDispatch();
  useEffect(() => {
    dispath(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispath]);
  return (
    <HotRecommendWrapper>
      <WYThemeHeaderRCM
        title="热门推荐"
        keywords={["华语", "流行"]}
      ></WYThemeHeaderRCM>
      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          return <WYSongsCover key={item.id} info={item} right="50px" />;
        })}
      </div>
    </HotRecommendWrapper>
  );
});

export default WYHotRecommend;
