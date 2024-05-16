import React from "react";
import styled from "@emotion/styled";
const PhotoWithHeader = () => {
  return (
    <ContentWrapper>
      <TFirstLetter>Ф</TFirstLetter>
      <AFirstLetter>И</AFirstLetter>
      <MainTitleName>Фараби & Инабат</MainTitleName>

      <MainTitleDate>07.10.2023</MainTitleDate>
    </ContentWrapper>
  );
};

export default PhotoWithHeader;

const MainTitleName = styled.div`
  font-family: "Romulc";
  width: 100%;
  align-items: center;
  @media (max-width: 425px) {
    font-weight: 200;
    position: absolute;
    font-size: 26px;
    color: #fff;

    margin-top: 460px;
    text-align: center;
  }
  @media (max-width: 320px) {
    font-size: 24px;
    margin-top: 420px;
  }
`;
const TFirstLetter = styled.div`
  font-family: "GreatFont";
  @media (max-width: 425px) {
    font-weight: 200;
    padding: 0 20px;
    position: absolute;
    font-size: 64px;
    color: #fff;
    margin-top: 24px;
    text-align: start;
  }
`;
const AFirstLetter = styled.div`
  font-family: "GreatFont";
  /* width: 100%; */
  @media (max-width: 425px) {
    font-weight: 200;
    padding: 0 80px;
    position: absolute;
    font-size: 64px;
    color: #fff;
    margin-top: 88px;
    text-align: start;
  }
`;

const MainTitleDate = styled.div`
  @media (max-width: 425px) {
    position: absolute;
    font-family: "Romulc", Arial, sans-serif;
    font-size: 28px;
    font-weight: 200;
    color: #fff;
    width: 100%;
    align-items: center;
    margin-top: 510px;
    text-align: center;
  }
  @media (max-width: 320px) {
    font-size: 26px;
    margin-top: 460px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
  }
  @media (max-width: 425px) {
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url(${require("../img/mainPhoto.gif")});
    height: 650px;
    width: 100%;
    background-size: 100%;
  }
  @media (max-width: 375px) {
    background-size: 100% !important;
    height: 580px;
  }
  @media (max-width: 320px) {
    height: 520px;
  }
`;
