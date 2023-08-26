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
      <img src={line} alt="Background line " />
      <InvitationText />
      <img src={line} alt="Background line " />
      <InformationText />
      <img src={line} alt="Background line " />
      <RoadMapContent />
      <TimerWithPhoto />
      <OwnersInfo />
      <img src={line} alt="Background line " />
      <FormContent />
    </ContentWrapper>
  );
}

export default Components;

const ContentWrapper = styled.div`
position: relative;
top: -50px;
  display: flex;
  flex-direction: column;
  gap:48px;
  background-image: url(${require("./img/425bg.png")});
  background-repeat: repeat;
  background-size: cover;

  @media (max-width: 425px) {
    background-size: auto;
  }
`;