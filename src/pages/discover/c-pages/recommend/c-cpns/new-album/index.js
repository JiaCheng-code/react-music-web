import React, { memo, useEffect, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getNewAlbumAction } from "../../store/actionCreators";

import { Carousel } from "antd";
import WYThemeHeaderRCM from "@/components/theme-header-rcm";
import WYAlbumCover from "@/components/album-cover";
import {
  NEW_ALBUM_LIMIT,
  NEW_ALBUM_PEG_PAGE,
  NEW_ALBUM_PAGE_NUM,
} from "@/common/contants";
import { NewAlbumsWrapper } from "./style";

const WYNewAlbum = memo(() => {
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(["recommend", "newAlbums"]),
    }),
    shallowEqual
  );
  const dispath = useDispatch();
  const pageRef = useRef();
  useEffect(() => {
    dispath(getNewAlbumAction(NEW_ALBUM_LIMIT));
  }, [dispath]);

  return (
    <NewAlbumsWrapper>
      <WYThemeHeaderRCM title="新碟上架"></WYThemeHeaderRCM>
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={(e) => pageRef.current.prev()}
        ></button>
        <div className="album" dote="false">
          <Carousel ref={pageRef}>
            {[0, 1].map((item, index) => {
              return (
                <div key={item} className="page">
                  {newAlbums
                    .slice(
                      item * NEW_ALBUM_PEG_PAGE,
                      (item + 1) * NEW_ALBUM_PEG_PAGE
                    )
                    .map((iten) => {
                      return (
                        <WYAlbumCover
                          key={iten.id}
                          info={iten}
                          size={100}
                          width={118}
                          bgp={"-570px"}
                        ></WYAlbumCover>
                      );
                    })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={(e) => pageRef.current.next()}
        ></button>
      </div>
    </NewAlbumsWrapper>
  );
});

export default WYNewAlbum;
