import React from "react";
import styled from "@emotion/styled";
import Line from "../img/LineBg.png";
import flower from "../img/flower.png";

const OwnersInfo = () => {
  return (
    <InformationTextWrapper>
      <TextContentWrapper>
        <img src={flower} style={{ width: "160px" }} />
        <TitleText>Той иелері</TitleText>
        <TitleName>Бейбіт & Гаухар</TitleName>
      </TextContentWrapper>
      {/* <TitleText>Қадірлі қонағымыз болыңыздар!</TitleText> */}
      <img src={Line} style={{ width: "100%" }} />
      <MainContentWrapper>
        <TitleText>
          Тойға қатысуыңызды <br /> растауыңызды сұраймыз!
          <br />
          07.10.2023 ж. дейін
        </TitleText>
      </MainContentWrapper>
    </InformationTextWrapper>
  );
};

export default OwnersInfo;

const TextContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const TitleText = styled.div`
  align-items: center;
  text-align: center;
  width: 100%;
  font-family: "BKANTKZ", Arial, sans-serif;
  font-size: 22px;
  margin: 0;
  line-height: 150%;
  font-weight: 200;
`;
const TitleName = styled.div`
  align-items: center;
  width: 100%;
  text-align: center;
  font-family: "BKANTKZ", Arial, sans-serif;
  font-size: 24px;
  letter-spacing: 2px;
  letter-spacing: 2px;
  margin: 0;
  font-weight: 200;
`;

const ContentText = styled.h2`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  line-height: 160%;
  font-weight: 200;
  text-align: center;
  font-size: 22px;
  margin: 0;
`;
const InformationTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  width: 100%;
`;
