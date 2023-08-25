import React from "react";
import styled from "@emotion/styled";

const InvitationText = () => {
  return (
    <TextContentWrapper>
      <TitleText>Құрметті қонақтар!</TitleText>
      <ContentText>
        Ciз(дер)дi аяулы қызымыз <br /> Аселдің <br /> "Қыз ұзату" тойына
        арналған <br /> салтанатты дастарханымыздың <br />
        қадiрлi қонағы болуға шақырамыз!
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
`;

const TitleText = styled.h2``;
const ContentText = styled.h2`
  text-align: center;
`;
