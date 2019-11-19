import React, { useState, useEffect } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import PromoTimeline from './PromoTimeline'
import ArchiveModal from './ArchiveModal';
import SignUpDialogSlide from './SignUpDialogSlide';

import { getPromotionsData } from '../service/promotion'
import moment from 'moment';

const generateDates = (weeks = 12) => {
  const dates = []
  const start = moment().startOf('week')
  for(let i = 0; i < weeks; i++) {
    const date = moment(start).subtract(i, 'weeks')
    dates.push(date)
  }

  dates.reverse()

  return dates
}

const Calendar = (props) => {
  const [open, updateOpen] = useState(false);
  const [loading, updateLoading] = useState(true);
  const [data, updateData] = useState([])
  const [selectedProduct, updateSelectedProduct] = useState([]);
  const [filterValue, updateFilterValue] = useState('');

  const timeline = generateDates()

  const handlePromoClick = (promo) => {
    updateOpen(true)
    updateSelectedProduct(promo)
  }

  const handleFilterChange= (e) => {
    updateFilterValue(e.target.value)
  }

  const handleFilterClick = () => {
    getPromotionsData(filterValue).then(res => {
      updateData(res)
    })
  }

  const handleModalClose = () => {
    updateOpen(false)
  }

  const handleReturn = (ev) => {
    if (ev.key === 'Enter') {
      handleFilterClick()
    }
  }

  useEffect(() => {
    getPromotionsData().then(res => {
      updateData(res)
    })
  }, [])

  return (
    <Container maxWidth={1800} style={{marginTop: 50}}>
      <Box style={{
        width: '100%'
      }}>
        <TextField
          label="Filter"
          variant="outlined"
          onKeyPress={handleReturn}
          onChange={handleFilterChange}
          style={{width: '100%'}}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="filter"
                  onClick={handleFilterClick}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Box>
      <Paper style={{marginTop: 10}}>
        <Table size="small" stickyHeader style={{tableLayout: 'fixed'}}>
          <TableHead>
            <TableRow>
              <TableCell component="th" style={{width: '400px'}}>Product</TableCell>
              {timeline.map((date, idx) => (
                <TableCell key={`${date.format()}_${idx}`}component="th">{date.format('DD/MM')}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((el, idx) => (
              <TableRow key={`${el.retailer}_${idx}`}>
                <TableCell style={{borderRight: '1px solid #eaeaea'}} component="th" scope="row">
                  <Box alignItems="center" display="flex">
                    <img width={24} height={24} src={`https://static.ef.uk.com/latest/images/retailer/${el.retailer.toLowerCase()}.png`} />
                    <img width={40} height={40} src={Array.isArray(el.imageURL) ? el.imageURL[0] : el.imageURL} />
                    {el.name}
                  </Box>
                </TableCell>
                <PromoTimeline onClick={() => handlePromoClick(el)} timeline={timeline} promotions={el.promotions} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <ArchiveModal 
        open={open} 
        onClose={handleModalClose}
        product={selectedProduct}
      />
      <SignUpDialogSlide />
    </Container>
  )
}

export default Calendar
