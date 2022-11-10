import styled from "styled-components";

export const AppFooterWrapper = styled.div`
  height: 325px;
  background-color: #f2f2f2;
  color: #666;
  border-top: 1px solid #d3d3d3;
`;

export const FooterTop = styled.ul`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;

    .link {
      display: block;
      width: 45px;
      height: 45px;

      background-image: url(${require("@/assets/img/foot_enter_new2.png")});
      background-size: 220px 220px;
    }

    :nth-child(1) .link {
      background-position: -170px -5px;
    }
    :nth-child(2) .link {
      background-position: -5px -170px;
    }
    :nth-child(3) .link {
      background-position: -5px -60px;
    }
    :nth-child(4) .link {
      background-position: -60px -60px;
    }
    :nth-child(5) .link {
      background-position: -115px -115px;
    }
    :nth-child(6) .link {
      background-position: -170px -115px;
    }
    :nth-child(7) .link {
      background-position: -170px -60px;
    }

    :nth-child(1) .link:hover {
      background-position: -115px -60px;
    }
    :nth-child(2) .link:hover {
      background-position: -60px -170px;
    }
    :nth-child(3) .link:hover {
      background-position: -60px -5px;
    }
    :nth-child(4) .link:hover {
      background-position: -115px -5px;
    }
    :nth-child(5) .link:hover {
      background-position: -5px -5px;
    }
    :nth-child(6) .link:hover {
      background-position: -60px -115px;
    }
    :nth-child(7) .link:hover {
      background-position: -115px -60px;
    }
    .title {
      margin-top: 10px;
      text-align: center;
      color: rgba(0, 0, 0, 0.5);
      font-size: 12px;
    }
  }
`;

export const FooterBootom = styled.div`
  padding-top: 60px;
  .link,
  .copyright,
  .report,
  .info {
    display: flex;
    justify-content: center;
    line-height: 24px;
    .line {
      margin: 0 8px;
      color: #d9d9d9;
    }
  }
  .sep {
    margin-right: 14px;
  }
`;
