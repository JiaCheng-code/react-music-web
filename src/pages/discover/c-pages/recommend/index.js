import React, { memo } from "react";
import WYHotRecommend from "./c-cpns/hot-recommend";
import WYTopBanners from "./c-cpns/top-banners";
import WYNewAlbum from "./c-cpns/new-album";
import WYRecommendRanking from "./c-cpns/recommend-ranking";
import WYUserLogin from "./c-cpns/user-login";
import WYSettleSinger from "./c-cpns/settle-singer";
import WYHotAnchor from "./c-cpns/hot-anchor";
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
        <RecommendRight>
          <WYUserLogin></WYUserLogin>
          <WYSettleSinger></WYSettleSinger>
          <WYHotAnchor></WYHotAnchor>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  );
});

export default WYRecommend;
