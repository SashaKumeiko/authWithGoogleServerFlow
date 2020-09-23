import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import Link from '@material-ui/core/Link';

function getModalStyle() {
  const top = 50; 
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

 const PermissionModal =({beginAuth, redirectUrl}) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    beginAuth()
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div>
      <Button type="button" onClick={handleOpen}>
        Enter
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
      <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Do you allow access to your Youtube account?
      </p>
        <Link href={redirectUrl}>Allow</Link> 
        <Button onClick={handleClose}>Cancel</Button>

    </div>
      </Modal>
    </div>
  );
}

export default PermissionModal