import React from "react";
import styled from "@emotion/styled";
import flower from "../img/flower.png";

const InvitationText = () => {
  return (
    <TextContentWrapper>
      <TitleText>
        Құрметті ағайын- туыс,
        <br /> бауырлар, құда-жекжат, дос-жарандар!
      </TitleText>
      <img src={flower} style={{ width: "160px" }} />

      <ContentText>
        Сіз(дер)ді балаларымыз <br />
        <NameText>Темирлан мен Әселдің</NameText>
        үйлену тойына арналған салтанатты дастарханымыздың қадірлі
        <br />
        қонағы болуға шақырамыз!
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
  font-family: "GreatFont";
  color: #a11b14;
  font-size: 42px;
  line-height: 280%;
  @media (max-width: 320px) {
    font-size: 38px;
  }
`;

const TitleText = styled.div`
  font-family: "BKANTKZ", Arial, sans-serif;
  color: #a11b14;
  font-size: 19px;
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
