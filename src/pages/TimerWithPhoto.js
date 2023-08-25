import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const PhotoWithHeader = () => {
  const targetDate = new Date("2023-10-04T00:18:00Z");

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
        Қыз ұзату тойына дейін:
        <br />
      </MainTitleName>
      <TimerWrapper>
        <TitleDay>
          {timeLeft.days}
          <br />
          күн
        </TitleDay>
        <Line />
        <TitleDay>
          {timeLeft.hours} <br /> сағат
        </TitleDay>
        <Line />
        <TitleDay>
          {timeLeft.minutes}
          <br /> минут
        </TitleDay>
        <Line />
        <TitleDay>
          {timeLeft.seconds}
          <br /> секунд
        </TitleDay>
      </TimerWrapper>
    </ContentWrapper>
  );
};

// Rest of your styled components...

export default PhotoWithHeader;

const MainTitleName = styled.h3`
  @media (max-width: 425px) {
    color: #fff;
    font-family: KZ Balmoral;
    font-size: 43.103px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.509px;
    margin-left: 85px;
    margin-top: 260px;
  }
  @media (max-width: 375px) {
    position: absolute;
    font-size: 48px;
    color: #fff;
    margin-left: 150px;
    margin-top: 520px;
    text-align: center;
    font-weight: 100;
  }
  @media (max-width: 320px) {
    position: absolute;
    font-size: 42px;
    color: #fff;
    margin-left: 130px;
    margin-top: 500px;
    text-align: center;
    font-weight: 100;
  }
`;
const TitleDay = styled.div`
  @media (max-width: 425px) {
    color: #fff;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    text-align: center;
    line-height: 70%;
    letter-spacing: 1.509px;
    margin: 0;
  }
`;
const Line = styled.h3`
  @media (max-width: 425px) {
    background: rgba(255, 255, 255, 0.5);
    height: 73px;
    width: 2px;
    border-radius: 10px;
    margin: 0;
  }
`;
const TimerWrapper = styled.h3`
  @media (max-width: 425px) {
    display: flex;
    margin-top: 0;
    margin-left: 40px;
    gap: 20px;
    align-items: center;
    flex-direction: row;
  }
`;

const ContentWrapper = styled.div`
  position: relative;

  @media (max-width: 425px) {
    width: 100%;
    height: 650px;
    background-image: url(${require("../img/GirlWithGrandma.png")});
  }
  @media (max-width: 375px) {
    height: 700px;
    background-position: -130px;
  }
  @media (max-width: 320px) {
    height: 650px;
    background-position: -140px;
  }
`;
