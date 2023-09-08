import React from "react";
import styled from "@emotion/styled";
const PhotoWithHeader = () => {
  return (
    <ContentWrapper>
      <MainTitleName>
        Assel <br /> Qyz Uzatu
      </MainTitleName>

      <MainTitleDate>05.10.2023</MainTitleDate>
    </ContentWrapper>
  );
};

export default PhotoWithHeader;

const MainTitleName = styled.h3`
  @media (max-width: 425px) {
    position: absolute;
    font-size: 72px;
    color: #fff;
    margin-left: 190px;
    margin-top: 460px;
    text-align: center;
    font-weight: 100;
  }
  @media (max-width: 387px) {
    margin-left: 160px;
  }
  @media (max-width: 375px) {
    font-size: 64px;
    margin-left: 180px;
    margin-top: 400px;
  }
  @media (max-width: 363px) {
    margin-left: 160px;
  }
  @media (max-width: 338px) {
    margin-left: 140px;
  }
  @media (max-width: 320px) {
    font-size: 54px;
    margin-left: 160px;
    margin-top: 330px;
  }
`;

const MainTitleDate = styled.h3`
  @media (max-width: 425px) {
    position: absolute;
    font-size: 64px;
    color: #fff;
    margin-left: 224px;
    margin-top: 580px;
    text-align: center;
    font-weight: 100;
  }
  @media (max-width: 387px) {
    margin-left: 200px;
  }
  @media (max-width: 375px) {
    font-size: 64px;
    margin-left: 200px;
    margin-top: 510px;
  }
  @media (max-width: 363px) {
    margin-left: 180px;
  }
  @media (max-width: 338px) {
    margin-left: 160px;
  }
  @media (max-width: 320px) {
    font-size: 48px;
    margin-left: 180px;
    margin-top: 430px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
  }
  @media (max-width: 425px) {
    background-image: url(${require("../img/mainPhoto.gif")});
    height: 650px;
    width: 100%;
    background-size: 100%;
  }
  @media (max-width: 375px) {
    background-image: url(${require("../img/375pxGirlWithHorse.png")});
    height: 574px;
  }
  @media (max-width: 320px) {
    background-image: url(${require("../img/320pxGirlWithHorse.png")});
    height: 490px;
  }
`;
