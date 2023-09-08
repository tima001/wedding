import React from "react";
import styled from "@emotion/styled";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
</style>;
const InvitationText = () => {
  return (
    <TextContentWrapper>
      <TitleText>Құрметті қонақтар!</TitleText>
      <ContentText>
        Ciз(дер)дi аяулы қызымыз <br /> Әселдің <br /> "Қыз ұзату" тойына
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
  gap: 12px;
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

  @media (max-width: 320px) {
    font-size: 18px;
  }
`;
