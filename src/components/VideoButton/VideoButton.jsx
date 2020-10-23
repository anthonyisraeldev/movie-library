import React from 'react';
import { FaPlay } from "react-icons/fa";
import Button from '@material-ui/core/Button';
import ModalVideoMovie from '../ModalVideoMovie/ModalVideoMovie';

import './VideoButton.scss';

const VideoButton = ({ video }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const  videoMovie = () => {
    if (video.length > 0) {
      const videoKey =  video[0].key
      const videoSource =  video[0].site
      return(
        <div>
          <ModalVideoMovie
            handleOpen={ handleOpen }
            handleClose={ handleClose }
            open={ open }
            videoKey={ videoKey }
            videoSource={ videoSource }
          />
        </div>
      )
    }
  }
  return (
    <div className="box-video-button">
      <Button variant="contained" className="video-button" type="button" onClick={handleOpen}>
        <FaPlay className="video-button__icon"/>
      </Button>
     { videoMovie() }
    </div>
  )
}
VideoButton.displayName = "VideoButton";

export default VideoButton
