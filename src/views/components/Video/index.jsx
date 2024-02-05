import { useRef, useEffect } from 'react';
import './Video.css'

export default function Video() {
  const videoRefOne = useRef(null);

  useEffect(() => {
    const getUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({video: true});
        videoRefOne.current.srcObject = stream;
      } catch (err) {
        console.log(err);
      }
    };
    $("#Camera").click(()=>{
      getUserMedia()
    })
  }, []);

  return (
    <>
      <video 
        id="videoDom"
        ref={videoRefOne}
        autoPlay
        playsInline
      />
    </>
  );
}