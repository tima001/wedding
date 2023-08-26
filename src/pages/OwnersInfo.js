import React from "react";
import styled from "@emotion/styled";
  import Line from '../img/LineBg.png'
  import flower from '../img/flower.png'
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
</style>;
const OwnersInfo = () => {
  return (
    <InformationTextWrapper>
      <TextContentWrapper>
        <img src={flower} style={{width: '160px' }}/>
        <TitleText>Той иелері</TitleText>
        <TitleText>Жанат-Айжан</TitleText>
      </TextContentWrapper>
      {/* <TitleText>Қадірлі қонағымыз болыңыздар!</TitleText> */}
      <img src={Line} style={{width:'100%'}}/>
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
  @media(max-width:320px){
    font-size: 36px;
    
  }
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
  gap: 80px;
`;
