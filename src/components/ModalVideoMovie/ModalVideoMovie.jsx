import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { MdClose } from "react-icons/md";
import ReactPlayer from 'react-player';

import './ModalVideoMovie.scss';

const ModalVideoMovie = ({ handleClose, open, videoKey, videoSource }) => {
  const [ videoUrl, setVideoUrl ] = useState('');

  useEffect(() => {
    switch (videoSource) {
      case "YouTube":
        setVideoUrl(`https://youtu.be/${ videoKey }`);
        break;
      case "Vimeo":
        setVideoUrl(`https://vimeo.com/${ videoKey }`);
        break;
      default:
        break;
    }
  }, [videoKey, videoSource])

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <div className="modal-body">
        <Button variant="contained" className="modal-body__close-btn" type="button" onClick={handleClose}>
          <MdClose/>
        </Button>
        <ReactPlayer className="modal-body__video" url={ videoUrl } controls playing={ open }/>
      </div>
  </Modal>
  )
}
ModalVideoMovie.displayName = "ModalVideoMovie";

export default ModalVideoMovie
