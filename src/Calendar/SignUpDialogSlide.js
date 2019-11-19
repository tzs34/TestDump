import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import { positions} from '@material-ui/system';
import { relative } from 'path';
import { Link } from 'react-router-dom'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[600],
    '&:hover': {
      backgroundColor: purple[800],
    },
  },
}))(Button);

const OutlineButton = withStyles(theme => ({
  root: {
    color: purple[700],
    '&:hover': {
      color: purple[700],
    },
  },
}))(Button);

const CustomDialog = withStyles(theme => ({
  paper: {
    margin: 0,
    bottom:0,
    position:"absolute"
  }
}))(Dialog)

function SignUpDialogSlide() {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setTimeout(()=>{setOpen(true)}, 3500)
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div height={200} width={'100%'}>
      <CustomDialog
        open={open}
        TransitionComponent={Transition}
        transitionDuration={500}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        fullWidth={true}
        maxWidth={'xl'}
      >
        <DialogTitle id="alert-dialog-slide-title">Sign up to see data tailored for you</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          Sign up for free to see categories and retailers relevant to you
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <OutlineButton onClick={handleClose} >
            No, Thanks
          </OutlineButton>
          <ColorButton component={Link} to="/signup">
            Sign Up
          </ColorButton>
        </DialogActions>
      </CustomDialog>
    </div>
  );
}

export default SignUpDialogSlide