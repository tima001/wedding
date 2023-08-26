import React, { useState, useRef, useEffect } from "react";
import MyMusic from '../music/dudeontheguitarHey Monro-Boiy Bulgan.mp3';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import styled from "@emotion/styled";

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
      <CircleForIcon>
        {isMuted ? (
          <VolumeOffOutlinedIcon
            style={{ fontSize: '30px', color: '#4598F7' }}
            onClick={toggleMute}
          >
            Unmute
          </VolumeOffOutlinedIcon>
        ) : (
          <VolumeUpOutlinedIcon
            style={{ fontSize: '30px', color: '#4598F7' }}
            onClick={toggleMute}
          >
            Mute
          </VolumeUpOutlinedIcon>
        )}
      </CircleForIcon>
    </MuteWrapper>
  );
};

export default CustomAudioPlayer;

const CircleForIcon = styled.div`
  @media (max-width: 425px) {
    display: flex;
    align-items: center;
    padding: 4px;
    border: 3px solid;
    border-radius: 40px;
    background: #fff;
  }
`;

const MuteWrapper = styled.div`
  position: sticky;
  justify-content: end;
  padding-right: 12px;
  z-index: 10;
  display: flex;
  color: #4598f7;
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
