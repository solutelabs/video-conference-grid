import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const wrapperRef = useRef(null);

  const [videos, setVideos] = useState([
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  ]);

  const getStyle = () => {
    let repeatColumnCount = 1;
    if (videos.length > 1) {
      switch (true) {
        case videos.length <= 4:
          repeatColumnCount = 2;
          break;
        case videos.length <= 6:
          repeatColumnCount = 3;
          break;
        case videos.length <= 12:
          repeatColumnCount = 4;
          break;
        case videos.length <= 20:
          repeatColumnCount = 5;
          break;
        case videos.length <= 30:
          repeatColumnCount = 6;
          break;
        case videos.length <= 50:
          repeatColumnCount = 6;
          break;
        default:
          repeatColumnCount = 6;
          break;
      }
    }

    return {
      gridTemplateColumns: `repeat(${repeatColumnCount},1fr)`,
    };
  };

  const handleAddStream = () => {
    setVideos(videos.concat(videos[0]));
  };

  return (
    <>
      <div className="stream-wrapper">
        <div className="grid-wrapper" ref={wrapperRef} style={getStyle()}>
          {videos.map((url, idx) => {
            return (
              <video
                controls
                key={idx}
                className="daily-video-div.remote"
                src={url}
              ></video>
            );
          })}
        </div>
      </div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <button
          style={{
            background: "blue",
            color: "white",
          }}
          onClick={handleAddStream}
        >
          Add stream
        </button>
      </div>
    </>
  );
}

export default App;
