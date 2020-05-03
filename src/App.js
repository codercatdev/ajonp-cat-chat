import React from "react";
import logo from "./logo.svg";
import "./App.css";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import awsvideoconfig from "./aws-video-exports";

class VideoPlayer extends React.Component {
  componentDidMount() {
    this.player = videojs(this.videoNode, this.props);
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    return (
      <div>
        <div data-vjs-player>
          <video
            ref={(node) => {
              this.videoNode = node;
            }}
            className="video-js"
          />
        </div>
      </div>
    );
  }
}

const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [
    {
      src: awsvideoconfig.awsOutputLiveLL,
    },
  ],
};

const videoOnDemandJsOptions = {
  autoplay: true,
  controls: true,
  sources: [
    {
      src: `https://${awsvideoconfig.awsOutputVideo}/mediaConvertTest/mediaConvertTest.m3u8`,
    },
  ],
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <VideoPlayer {...videoJsOptions} />
        <VideoPlayer {...videoOnDemandJsOptions} />
      </header>
    </div>
  );
}

export default App;
