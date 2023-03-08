import Modal from "../modal";
import YouTube from "react-youtube";
const ModalMovie = ({ urlTrailer, onClose }) => {
  const opts = {
    height: window.innerWidth > 500 ? "390" : "200",
    width: window.innerWidth > 500 ? "640" : "300",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <Modal close={onClose}>
      {urlTrailer && (
        <YouTube videoId={urlTrailer} opts={opts} loading={"eager"} />
      )}
    </Modal>
  );
};

export default ModalMovie;
