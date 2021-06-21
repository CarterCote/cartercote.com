import React from 'react';
import Container from "./Layout"

const BackgroundVid = ({ videoSource, children, blur }) => {
  // const video = React.useRef(null);
  // React.useEffect(() => {
  //   console.log(video.current.style);
  //   video.current.style.filter = "blur(10px)";
  // }, []);
  return (
    <>
      <Container>
        <video
          style={{ filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
          autoPlay="autoplay"
          loop="loop"
          muted
          // ref={video}
          id="video-id"
          className='video' >
          {/* TODO make it accept multiple media types */}
          <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
      </video>
        {children}
    </Container>
      {/* <span id="video-bottom"></span> */}
    </>
  )
}

export default BackgroundVid
