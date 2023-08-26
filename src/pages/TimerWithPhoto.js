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
    font-size: 44px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.509px;
    margin-left: 90px;
    margin-top: 260px;
    margin-bottom:42px;
  }
    @media (max-width: 400px) {
      margin-left: 74px;
    }
    @media (max-width: 375px) {
      font-size: 42px;
      margin-left: 60px;
      margin-top: 260px;
      margin-bottom:32px;
    }
    @media (max-width: 356px) {
      margin-left: 54px;
    }
    @media (max-width: 320px) {
      font-size: 36px;
      margin-left: 54px;
      margin-top: 200px;
      margin-bottom:16px;
  }
`;
const TitleDay = styled.div`
  @media (max-width: 425px) {
    color: #fff;
    font-size: 44px;
    font-style: normal;
    font-weight: 400;
    text-align: center;
    line-height: 70%;
    letter-spacing: 1.509px;
    margin: 0;
  }
  
  @media (max-width: 320px) {
    font-size: 38px;
    line-height: 70%;
    letter-spacing: 1.509px;
    margin: 0;
  }
`;
const Line = styled.div`
  @media (max-width: 425px) {
    background: rgba(255, 255, 255, 0.5);
    height: 73px;
    width: 2px;
    border-radius: 10px;
    margin: 0;
  }
  @media (max-width: 375px) {
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
    margin-top: 0;
    margin-left: 60px;
    margin-right: auto;
    gap: 20px;
    align-items: center;
    flex-direction: row;
  }
  @media (max-width: 410px) {
    margin-left: 43px;
  }
  @media (max-width: 375px) {
    display: flex;
    margin-top: 0;
    margin-left: 40px;
    gap: 16px;
    align-items: center;
    flex-direction: row;
  }
  @media (max-width: 356px) {
    margin-left: 40px;
    gap: 12px;
  }

  @media (max-width: 320px) {
    margin-left: 40px;
    gap: 12px;
  
`;

const ContentWrapper = styled.div`
  position: relative;

  @media (max-width: 425px) {
    width: 100%;
    height: 650px;
    background-image: url(${require("../img/GirlWithGrandma.png")});
  }
  @media (max-width: 375px) {
    background-image: url(${require("../img/375pxGirlWithGrandma.png")});
    height: 574px;
  }
  @media (max-width: 320px) {
    background-image: url(${require("../img/320pxGirlWithGrandma.png")});
    height: 490px;
  }
`;
