import React, { useState } from "react";
import ReactPlayer from "react-player";
import video from "../image/video.mp4";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import InfoIcon from "@mui/icons-material/Info";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

function IntrolVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setPlaying] = useState(true);
  return (
    <div>
      <div className="introl_container">
        <ReactPlayer
          width="100%"
          height="100%"
          url={video}
          loop={true}
          playing={isPlaying}
          muted={isMuted}
          className="video_introl"
        />
        <div className="introl_wraper">
          <div className="card_name">
            <span className="title-1">The Groly</span>
            <span className="title-2">Part 2</span>
          </div>
          <div className="introduce-movie">
            <span className="title-3">
              Merciless hope and nothing but ruins Song Hye-kyo will create the
              perfect misery
            </span>
          </div>
          <div className="button-introl">
            <button
              className="introl-play"
              onClick={() => setPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <PauseIcon id="PauseIcon" />
              ) : (
                <PlayArrowIcon id="PlayArrowIcon" />
              )}
              Play
            </button>
            <div className="background-info">
              <div className="background"></div>
              <button className="more-info">
                <InfoIcon className="InfoIcon" /> More Info
              </button>
            </div>
          </div>
        </div>
        <div className="vollume18">
          {isMuted ? (
            <button className="volume" onClick={() => setIsMuted(!isMuted)}>
              <VolumeOffIcon id="volume-icon" />
            </button>
          ) : (
            <button className="volume" onClick={() => setIsMuted(!isMuted)}>
              <VolumeUpIcon id="volume-icon" />
            </button>
          )}
          <div className="vollume-title">
            <div className="volume-color-1"></div>
            <div className="volume-color-2"></div>
            <span>16+</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntrolVideo;
