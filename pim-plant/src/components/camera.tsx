import { useRef, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 720,
  height: 360,
  facingMode: "user",
};

const Camera = () => {
  const navigate = useNavigate();
  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
  const webcamRef = useRef<Webcam>(null);
  const [url, setUrl] = useState<string | null>(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setUrl(imageSrc);
    }
  }, [webcamRef]);
function handleSave () {
  fetch('http://localhost:3001/user-plants', {
    method: "POST",
    headers: {Authorization: "1", "Content-Type": "application/json"},
    body: JSON.stringify({plant_id:1, image:url})
  }).then(res => res.json()).then(plant => navigate('/plant/'+plant.id))

}useEffect(() => {
  setCaptureEnable(true);
}, []);

return (
  <>
    {isCaptureEnable && (
      <>
          <Webcam
            audio={false}
            width={720}
            height={360}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        <button style={{width:'50px',height:'50px', borderRadius:'180px', color:'white'}} onClick={capture}></button>
      </>
    )}
    {url && (
      <>
        <div>
          <button
            onClick={() => {
              setUrl(null);
            }}
          >
            Delete
          </button>
        </div>
        <div>
          <img src={url} alt="Screenshot" />
          <button onClick={handleSave}>Save</button>
        </div>
      </>
    )}
  </>
);
};
export default Camera