import React, { useRef } from "react";
import styled from "@emotion/styled";
import ymaps from "ymaps";
import twogis from "../img/2gis.png";

const RoadMapContent = () => {
  const handleTwoGisClick = () => {
    // Open the URL in a new tab when the image is clicked
    window.open("https://go.2gis.com/xdce4", "_blank");
  };
  const mapRef = useRef(null);
  ymaps
    .load()
    .then((maps) => {
      const mapInstance = new maps.Map(mapRef.current, {
        center: [42.875362, 71.366954],
        zoom: 18,
      });

      const marker = new maps.Placemark([42.875362, 71.366954]);

      mapInstance.geoObjects.add(marker);
    })
    .catch((error) => console.log("Failed to load Yandex Maps", error));

  return (
    <TextContentWrapper>
      <TitleText>Қалай жетуге болады?!</TitleText>
      <ContentText>
        Ciзге ыңғайлы болу үшін <br /> осы картаны қолданыңыз
      </ContentText>
      <TwoGis onClick={handleTwoGisClick} src={twogis} />
      <MapContainer ref={mapRef}></MapContainer>
    </TextContentWrapper>
  );
};

const TextContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const TitleText = styled.h2`
  font-family: "GreatFont";
  font-size: 38px;
  margin: 0;
  margin-bottom: 12px;
  font-weight: 200;
  @media (max-width: 320px) {
    font-size: 34px;
  }
`;

const ContentText = styled.p`
  font-family: "BKANTKZ", Arial, sans-serif;
  font-size: 18px;
  line-height: 160%;
  font-weight: 200;
  text-align: center;
  margin: 0;
  margin-bottom: 40px;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
`;
const TwoGis = styled.img`
  width: 48px;
  height: 48px;
  margin-bottom: 36px;
`;

export default RoadMapContent;
