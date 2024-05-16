import React from "react";
import styled from "@emotion/styled";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
</style>;
const InformationText = () => {
  return (
    <InformationTextWrapper>
      <TextContentWrapper>
        <TitleText>Той салтанаты:</TitleText>
        <ContentText>
          25 қазан сағат
          <br /> 19:00-де Той салтанаты басталады.
        </ContentText>
      </TextContentWrapper>
      <TextContentWrapper>
        <TitleText>Мекен жайымыз:</TitleText>
        <ContentText>
          Тараз қаласы <br />
            Проспект Жамбыла, 182 <br /> "Хан сарайы" рестораны
        </ContentText>
      </TextContentWrapper>
    </InformationTextWrapper>
  );
};

export default InformationText;

const TextContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.h2`
  font-family: "GreatFont";
  font-size: 38px;
  letter-spacing: 2px;
  margin: 0;
  font-weight: 200;
`;
const ContentText = styled.h2`
  font-family: "BKANTKZ", Arial, sans-serif;
  color: #a11b14;
  font-size: 18px;
  line-height: 160%;
  font-weight: 200;
  text-align: center;
  margin: 0;
`;
const InformationTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
