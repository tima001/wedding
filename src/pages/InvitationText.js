import React from "react";
import styled from "@emotion/styled";
import flower from "../img/flower.png";

const InvitationText = () => {
  return (
    <TextContentWrapper>
        <TitleText>
            Құрметті қонақтар!
        </TitleText>
        <img src={flower} style={{ width: "160px" }} />

      <ContentText>
          Сіздерді ұлымыз <br />
        <NameText>Әділет</NameText> пен келініміз <NameText>Жанель</NameText>
          екеуінің үйлену тойына арналған<br/> ақ дастарханымыздың қадірлі<br/> қонағы болуға шақырамыз!
      </ContentText>
    </TextContentWrapper>
  );
};

export default InvitationText;

const TextContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const NameText = styled.div`
  font-family: "GreatFont2";
  color: #a11b14;
  font-size: 36px;
  line-height: 240%;
  @media (max-width: 320px) {
    font-size: 38px;
  }
`;

const TitleText = styled.div`
  font-family: "BKANTKZ", Arial, sans-serif;
  color: #a11b14;
  font-size: 24px;
  text-align: center;
  font-weight: 600;
  font-weight: 200;
`;
const ContentText = styled.h2`
  font-family: "BKANTKZ", Arial, sans-serif;
  line-height: 160%;
  font-weight: 200;
  text-align: center;
  font-size: 18px;
  margin: 0;

  @media (max-width: 320px) {
    font-size: 18px;
  }
`;
