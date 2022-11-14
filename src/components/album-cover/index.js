import React, { memo } from "react";
import { AlbnmWrapper } from "./style";

import { getSizeImage } from "@/utils/format-utils";

const WYAlbumCover = memo((props) => {
  const { info, size = 130, width = 153, bgp = "-845px" } = props;
  return (
    <AlbnmWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt="" />
        <a href="/todo" className="cover image_cover"></a>
      </div>
      <div className="album-info">
        <div className="name">{info.name}</div>
        <div className="artist">{info.artist.name}</div>
      </div>
    </AlbnmWrapper>
  );
});

export default WYAlbumCover;
