import React, {memo, useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {getTopBannerAction} from "./store/actionCreators";

 const WYRecommend = memo((props)=> {
     // react-thunk请求 hook shallowEqual浅层比较
     const {topBanners} = useSelector(state=>({
         topBanners:state.recommend.topBanners
     }),shallowEqual)
     console.log(topBanners)
     const dispatch = useDispatch();
     useEffect(() => {
         dispatch(getTopBannerAction())
     }, [dispatch])
     return <div>WYRecommend:{topBanners.length}</div>;
 });

export default WYRecommend;
