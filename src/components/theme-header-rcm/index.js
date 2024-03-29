import React, { memo } from "react";
import PropsTypes from "prop-types";
import { HeaderWrapper } from "./style";

const WYThemeHeaderRCM = memo((props) => {
  const { title, keywords = [] } = props;
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {keywords.map((item) => {
            return (
              <div className="item" key={item}>
                <a href="todo">{item}</a>
                <span className="divider">|</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  );
});
WYThemeHeaderRCM.prototype = {
  title: PropsTypes.string.isRequired,
  keywords: PropsTypes.array,
};
WYThemeHeaderRCM.defaultProps = {
  keywords: [],
};
export default WYThemeHeaderRCM;
