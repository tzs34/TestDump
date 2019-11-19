import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import WeekTimeline from './WeekTimeline'
import moment from 'moment';

const Transition = React.forwardRef((props, ref) => (<Slide direction="up" ref={ref} {...props} />));

const parsePromotionDates = (product) => {
  const promos =  product !== {} ? product.promotions : []
  // const regex = /(?<=-)\d{0,2}(?=T)/gm
    let dates = []

    for (let i = 0; i < promos.length; i++) {
      const promo = promos[i];
      dates.push(
        {
          value: i, 
          label: moment.utc(promo.timestamp).format("DD/MM/YY")
        }
     )
    }
  return dates;
}

const ArchiveModal = ({ open, onClose, product }) => {
  const [mark, updateMark] = useState(0);
  const promotionDates = product.length < 1 ? null : parsePromotionDates(product) 
  const screenshotURL = product.length < 1 ? null : product.promotions[mark].screenshotURL
return (
  <Dialog fullScreen={true} open={open} TransitionComponent={Transition}>
    <AppBar style={{ position: 'relative' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
          <CloseIcon />
        </IconButton>
        <Typography variant="h6">
          Archive: {product.name}
        </Typography>
      </Toolbar>
    </AppBar>
    <DialogContent>
      <img src={screenshotURL} style={{
        width: '100%',
        height: 'auto',
        display: 'block'
      }} />
    </DialogContent>
    <DialogActions>
      <Container>
        <WeekTimeline update={updateMark} promotionDates={promotionDates} />
      </Container>
    </DialogActions>
  </Dialog>
)};

export default ArchiveModal