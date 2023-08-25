import "./App.css";
import PhotoWithHeader from "./pages/PhotoWithHeader";
import InvitationText from "./pages/InvitationText";
import styled from "@emotion/styled";

function App() {
  return (
    <ContentWrapper>
      <PhotoWithHeader />
      <InvitationText />
      {/*
      <RoadMapContent/>
     <TimerWithPhoto/>
     <OwnersInfo>
     <FormContent/> */}
    </ContentWrapper>
  );
}

export default App;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;
