import React, { useRef } from "react";
import styled from "@emotion/styled";
import ymaps from "ymaps";
<script src="https://api-maps.yandex.ru/2.1.77/?apikey=cd23e731-4e08-47f8-9fde-467e93ccaab3&lang=ru_RU&csp=true&" type="text/javascript"></script>
const RoadMapContent = () => {
  const mapRef = useRef(null);
  ymaps
    .load()
    .then((maps) => {
      const mapInstance = new maps.Map(mapRef.current, {
        center: [42.9043219, 71.3375716],
        zoom: 15,
      });

      const marker = new maps.Placemark([42.9043219, 71.3375716]);

      mapInstance.geoObjects.add(marker);
    })
    .catch((error) => console.log("Failed to load Yandex Maps", error));

  return (
    <TextContentWrapper>
      <TitleText>Қалай жетуге болады:</TitleText>
      <ContentText>
        Ciзге ыңғайлы болу үшін <br /> осы картаны қолданыңыз
      </ContentText>
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
  font-size: 52px;
  letter-spacing: 2px;
  margin: 0;
  font-weight: 200;
`;

const ContentText = styled.p`
  font-family: "Open Sans", sans-serif;
  line-height: 160%;
  font-weight: 200;
  text-align: center;
  font-size: 22px;
  margin: 0;
  margin-bottom: 40px;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
`;

export default RoadMapContent;
