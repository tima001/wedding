import React from "react";
import styled from "@emotion/styled";
const PhotoWithHeader = () => {
  return (
    <ContentWrapper>
      <MainTitleName>
        Асель <br /> Qyz Uzatu
      </MainTitleName>

      <MainTitleDate>04.09.2023</MainTitleDate>
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
    margin-top: 540px;
    text-align: center;
    font-weight: 100;
  }
  @media (max-width: 375px) {
    position: absolute;
    font-size: 48px;
    color: #fff;
    margin-left: 150px;
    margin-top: 520px;
    text-align: center;
    font-weight: 100;
  }
  @media (max-width: 320px) {
    position: absolute;
    font-size: 42px;
    color: #fff;
    margin-left: 130px;
    margin-top: 500px;
    text-align: center;
    font-weight: 100;
  }
`;

const MainTitleDate = styled.h3`
  @media (max-width: 425px) {
    position: absolute;
    font-size: 64px;
    color: #fff;
    margin-left: 224px;
    margin-top: 660px;
    text-align: center;
    font-weight: 100;
  }
  @media (max-width: 375px) {
    position: absolute;
    font-size: 42px;
    color: #fff;
    margin-left: 165px;
    margin-top: 630px;
    text-align: center;
    font-weight: 100;
  }
  @media (max-width: 320px) {
    position: absolute;
    font-size: 36px;
    color: #fff;
    margin-left: 150px;
    margin-top: 595px;
    text-align: center;
    font-weight: 100;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  background-image: url(${require("../img/FNffAJ0aIAAE7vs.jpg")});
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    height: 840px;
  }
  @media (max-width: 425px) {
    height: 750px;
    background-position: -130px;
  }
  @media (max-width: 375px) {
    height: 700px;
    background-position: -130px;
  }
  @media (max-width: 320px) {
    height: 650px;
    background-position: -140px;
  }
`;
