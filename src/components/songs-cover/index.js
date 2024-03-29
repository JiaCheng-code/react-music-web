import React, { memo } from "react";
import { SongsCoverWrapper } from "./style";
import { getCount, getSizeImage } from "@/utils/format-utils";
const WYSongsCover = memo((props) => {
  const { info } = props;
  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom">{info.name}</div>
      {info?.creator?.nickname && (
        <div className="cover-source text-nowrap">
          by {info?.creator?.nickname}
        </div>
      )}
    </SongsCoverWrapper>
  );
});

export default WYSongsCover;
