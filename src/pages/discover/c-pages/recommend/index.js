import React, { memo } from "react";
import WYHotRecommend from "./c-cpns/hot-recommend";
import WYTopBanners from "./c-cpns/top-banners";
import WYNewAlbum from "./c-cpns/new-album";
import WYRecommendRanking from "./c-cpns/recommend-ranking";
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";
const WYRecommend = memo((props) => {
  return (
    <RecommendWrapper>
      <WYTopBanners />
      <Content className="wrap-v2">
        <RecommendLeft>
          <WYHotRecommend></WYHotRecommend>
          <WYNewAlbum></WYNewAlbum>
          {/* <WYRecommendRanking></WYRecommendRanking> */}
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  );
});

export default WYRecommend;
