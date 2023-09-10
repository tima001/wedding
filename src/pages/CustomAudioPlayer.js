import React, { useState, useRef, useEffect } from "react";
import MyMusic from "../music/dudeontheguitarHey Monro-Boiy Bulgan.mp3";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import { MusicNotesSimple, Play } from "@phosphor-icons/react";
import PlayMe from "../img/white_bold_circle.png";

// Define the keyframes animation outside of the component
const myanimation = keyframes`
  0% {
    transform: rotate(0deg);
    animation-timing-function: linear;
  }
  100% {
    transform: rotate(180deg);
  }
`;

const CustomAudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    audioRef.current.muted = isMuted;
    const playPromise = audioRef.current.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          setIsPlaying(false);
        });
    }
  }, [isMuted]);

  return (
    <MuteWrapper>
      <audio ref={audioRef} src={MyMusic}></audio>

      <PlayMeImg src={PlayMe} />
      <CircleForIcon>
        {isMuted ? (
          <MusicNotesSimple
            onClick={toggleMute}
            color="#40675A"
            size={30}
            weight="fill"
          >
            Mute
          </MusicNotesSimple>
        ) : (
          <Play onClick={toggleMute} color="#40675A" size={30} weight="fill">
            UnMute
          </Play>
        )}
      </CircleForIcon>
    </MuteWrapper>
  );
};

export default CustomAudioPlayer;

const PlayMeImg = styled.img`
  position: absolute;
  width: 75px;
  height: 75px;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
  right: 4px;
  // Apply the keyframes animation to the styled component
  ${css`
    animation: ${myanimation} 5s infinite linear;
  `}

  backface-visibility: hidden;
`;

const CircleForIcon = styled.div`
  @media (max-width: 425px) {
    z-index: 100;
    position: absolute;
    margin-top: 13px;
    position: sticky;
    margin-right: 6px;
    display: flex;
    align-items: center;
    padding: 6px;
    border: 3px solid #40675a;
    border-radius: 40px;
    background: transparent;
  }
`;

const MuteWrapper = styled.div`
  position: sticky;
  justify-content: end;
  padding-right: 12px;
  z-index: 10;
  display: flex;
  @media (max-width: 425px) {
    top: 400px;
  }
  @media (max-width: 375px) {
    top: 300px;
  }
  @media (max-width: 320px) {
    top: 250px;
  }
`;
