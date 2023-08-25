import React from "react";
import styled from "@emotion/styled";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
</style>;
const OwnersInfo = () => {
  return (
    <InformationTextWrapper>
      <TextContentWrapper>
        <TitleText>Той иелері</TitleText>
        <ContentText>Жанат-Айжан</ContentText>
      </TextContentWrapper>
      <TitleText>Қадірлі қонағымыз болыңыздар!</TitleText>
      <MainContentWrapper>
        <TitleText>
          Тойға қатысуыңызды <br /> растауыңызды сұраймыз!
        </TitleText>
        <TitleText>04.09.2023 ж. дейін</TitleText>
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
`;
const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const TitleText = styled.h2`
  font-size: 42px;
  letter-spacing: 2px;
  margin: 0;
  font-weight: 200;
`;

const ContentText = styled.h2`
  font-family: "Nunito", sans-serif;
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
  gap: 120px;
`;
