import React, { memo } from "react";
import WYTopBanners from "./c-cpns/top-banners";

import { RecommendWrapper } from "./style";
const WYRecommend = memo((props) => {
  return (
    <RecommendWrapper>
      <WYTopBanners />
    </RecommendWrapper>
  );
});

export default WYRecommend;
