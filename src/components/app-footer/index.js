import React, { memo, Fragment } from "react";
import { footerLinks, footerImages } from "../../common/local-data";

import { AppFooterWrapper, FooterTop, FooterBootom } from "./style";
const WYAppFooter = memo(() => {
  return (
    <AppFooterWrapper>
      <div className="wrap-v2 content">
        <FooterTop className="top">
          {footerImages.map((item, index) => {
            return (
              <li className="item" key={item.link}>
                <a
                  className="link"
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                </a>
                <span className="title">{item.title}</span>
              </li>
            );
          })}
        </FooterTop>
        <FooterBootom className="bottom">
          <div className="link">
            {footerLinks.map((item, index) => {
              return (
                <Fragment key={item.title}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                  {footerLinks.length - 1 !== index && (
                    <span className="line">|</span>
                  )}
                </Fragment>
              );
            })}
          </div>
          <div className="copyright">
            <span className="sep">廉正举报</span>
            <span className="sep">
              不良信息举报邮箱:
              <a
                href="51jubao@service.netease.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                51jubao@service.netease.com
              </a>
            </span>
            <span>客服热线：95163298</span>
          </div>
          <div className="report">
            <span>互联网宗教信息服务许可证：浙（2022）0000120</span>
            <span className="sep">
              <a
                href="https://beian.miit.gov.cn/#/Integrated/index"
                rel="noopener noreferrer"
                target="_blank"
              >
                粤B2-20090191-18 工业和信息化部备案管理系统网站
              </a>
            </span>
            <span>
              <a
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"
                rel="noopener noreferrer"
                target="_blank"
              >
                浙公网安备 33010902002564号
              </a>
            </span>
          </div>
          <div className="info">
            <span>网易公司版权所有©1997-2022</span>
            <span>
              杭州乐读科技有限公司运营：
              <a
                href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png"
                rel="noopener noreferrer"
                target="_blank"
              >
                浙网文[2021] 1186-054号
              </a>
            </span>
          </div>
        </FooterBootom>
      </div>
    </AppFooterWrapper>
  );
});

export default WYAppFooter;
