import React, { memo } from "react";
import WYThemeHeaderRCM from "@/components/theme-header-rcm";

import { HotRecommendWrapper } from "./style";

const WYHotRecommend = memo(() => {
  return (
    <HotRecommendWrapper>
      <WYThemeHeaderRCM
        title="热门推荐"
        keywords={["华语", "流行"]}
      ></WYThemeHeaderRCM>
    </HotRecommendWrapper>
  );
});

export default WYHotRecommend;
