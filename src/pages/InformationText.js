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
          05 қазан сағат <br /> 19:00-де басталады.
        </ContentText>
      </TextContentWrapper>
      <TextContentWrapper>
        <TitleText>Мекен жайымыз:</TitleText>
        <ContentText>
          Тараз қаласы <br /> Әль-Фараби көшесі 1 <br /> "Бекзат" рестораны
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
  font-size: 52px;
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
  gap: 60px;
`;
