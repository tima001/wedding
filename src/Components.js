import "./App.css";
import PhotoWithHeader from "./pages/PhotoWithHeader";
import InformationText from "./pages/InformationText";
import TimerWithPhoto from "./pages/TimerWithPhoto";
import RoadMapContent from "./pages/RoadMapContent";
import InvitationText from "./pages/InvitationText";
import OwnersInfo from "./pages/OwnersInfo";
import FormContent from "./pages/FormContent";
import styled from "@emotion/styled";
import line from "./img/LineBg.png";

function Components() {
  return (
    <ContentWrapper>
      <PhotoWithHeader />
      <BackgroundLine src={line} alt="Background line " />
      <InvitationText />
      <BackgroundLine src={line} alt="Background line " />
      <InformationText />
      <BackgroundLine src={line} alt="Background line " />
      <RoadMapContent />
      <TimerWithPhoto />
      <OwnersInfo />
      <BackgroundLine src={line} alt="Background line " />
      <FormContent />
    </ContentWrapper>
  );
}

export default Components;

const ContentWrapper = styled.div`
  position: relative;
  top: -64px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  /* background-image: url(${require("./img/425bg.png")}); */
  background-repeat: repeat;
  background-size: cover;

  @media (max-width: 425px) {
    background-size: auto;
  }
`;
const BackgroundLine = styled.img`
  width: 100%;
`;
