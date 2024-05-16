import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const PhotoWithHeader = () => {
  const targetDate = new Date("2024-05-20T00:19:00Z");

  const getTimeLeft = (target) => {
    const now = new Date().getTime();
    const difference = target - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      total: difference,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft = getTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.total <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <ContentWrapper>
      <MainTitleName>
        Той салтанатына дейін:
        <br />
      </MainTitleName>
      <TimerWrapper>
        <TitleNumber>
          {timeLeft.days}
          <TitleInfo>күн</TitleInfo>
        </TitleNumber>
        <Line />
        <TitleNumber>
          {timeLeft.hours} <br />
          <TitleInfo> сағат</TitleInfo>{" "}
        </TitleNumber>
        <Line />
        <TitleNumber>
          {timeLeft.minutes}
          <br />
          <TitleInfo> минут</TitleInfo>{" "}
        </TitleNumber>
        <Line />
        <TitleNumber>
          {timeLeft.seconds}
          <br />
          <TitleInfo> секунд</TitleInfo>
        </TitleNumber>
      </TimerWrapper>
    </ContentWrapper>
  );
};

// Rest of your styled components...

export default PhotoWithHeader;

const MainTitleName = styled.div`
  font-family: "BKANTKZ", Arial, sans-serif;
  align-items: center;
  width: 100%;
  text-align: center;
  @media (max-width: 425px) {
    color: #fff;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 220px;
    margin-bottom: 24px;
  }
  @media (max-width: 375px) {
    margin-top: 190px;
  }
`;
const TitleNumber = styled.div`
  @media (max-width: 425px) {
    color: #fff;
    font-family: "BKANTKZ", Arial, sans-serif;
    font-size: 26px;
    align-items: center;
    text-align: center;
    font-weight: 200;
    margin: 0;
  }

  @media (max-width: 320px) {
    font-size: 24px;
    letter-spacing: 1.509px;
  }
`;
const Line = styled.div`
  @media (max-width: 425px) {
    background: rgba(255, 255, 255, 0.5);
    height: 64px;
    width: 2px;
    border-radius: 10px;
    margin: 0;
  }
`;
const TimerWrapper = styled.div`
  @media (max-width: 425px) {
    display: flex;
    margin: 0;
    padding: 0 36px;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
  }
  @media (max-width: 375px) {
    padding: 0 24px;
  }
  @media (max-width: 320px) {
    padding: 0 12px;
  }
`;
const TitleInfo = styled.div`
  @media (max-width: 425px) {
    color: #fff;
    font-family: "BKANTKZ", Arial, sans-serif;
    font-size: 18px;
    font-weight: 300;
    margin: 0;
  }
  @media (max-width: 320px) {
    font-size: 14px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;

  @media (max-width: 425px) {
    width: 100%;
    background-size: 100% !important;
    height: 525px;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.7) 100%
      ),
      url(${require("../img/WeddingPic.png")});
    background-repeat: no-repeat;
  }
  @media (max-width: 375px) {
    height: 464px;
  }
  @media (max-width: 320px) {
    height: 395px;
  }
`;
