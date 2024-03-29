import { Slider } from "antd";
import React, { memo, useEffect } from "react";
import { getSongDetail } from "@/api/player";

import { Control, Operator, PlaybarWrapper, PlayInfo } from "./style";

const WYPlayerBar = memo(() => {
  useEffect(() => {
    getSongDetail(167876).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_player prev"></button>
          <button className="sprite_player play"></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="/#">
              <img src="" />
            </a>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">红豆</span>
              <a href="/#" className="singer-name">
                要不要买菜
              </a>
            </div>
            <div className="progress">
              <Slider defaultValue={30}></Slider>
              <div className="time">
                <span className="now-time">02:30</span>
                <span className="divider">/</span>
                <span className="duration">04:30</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
    </PlaybarWrapper>
  );
});

export default WYPlayerBar;
