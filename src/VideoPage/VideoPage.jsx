import React, { useEffect, useState } from "react";
import { ImgArr } from "../assets/images/images";
import YouTube from "react-youtube";
import "./videopage.css";
import { useParams } from "react-router-dom";

function VideoPage() {
  const [thumbnails, setThumbnails] = useState([]);
  let { videoId } = useParams();
  useEffect(() => {
    let shuffledImages = ImgArr.map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
      .slice(0, 4);

    setThumbnails(shuffledImages);
  }, []);

  return (
    <div className="df videoPage">
      <div className="df playerDiv">
        <YouTube
          className="ytvideo"
          videoId={videoId}
          onEnd={(e) => {
            e.target.stopVideo();
          }}
          opts={{
            height: "100%",
            width: "100%",
            playerVars: {
              autoplay: 1,
              mute: 1,
              rel: 0,
              modestbranding: 1,
            },
          }}
        ></YouTube>
      </div>
      <div className="df fdc videoRight">
        {thumbnails &&
          thumbnails.map((thumbnail, idx) => {
            return (
              <div className="df acfs videoRecommendation" key={idx}>
                <div className="videoThumbnail">
                  <img
                    className="videoThumbnailImg"
                    src={thumbnail.img}
                    alt={thumbnail.title}
                  ></img>
                </div>
                <div className="df fdc videoDetails">
                  <div className="df fdc videoTitle">{thumbnail.title}</div>
                  <div className="df fdc videoDetail">Master Yoda</div>
                  <div className="df fdc videoDetail">0 views</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default VideoPage;
