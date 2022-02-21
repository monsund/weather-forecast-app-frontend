import React, {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import moment from 'moment';


const DateSelect = ({date, setDate }) => {

  const handleClick = (e) => {
    console.log(e.target.value)
    setDate(e.target.value)
  }

  //TODO - Define dates here



  return (
    <Stack direction="row" spacing={2}>
      {/* <Button variant="contained" style={{'background':condition?"":""}} disableElevation color="success" value={Date.now()} onClick={handleClick}>{moment(Date.now()).format('LL')}</Button> */}
      <Button variant="contained" disableElevation color="success" value={Date.now()} onClick={handleClick}>{moment(Date.now()).format('LL')}</Button>
      <Button variant="contained" disableElevation color="success" value={Date.now() + 24*60*60*1000} onClick={handleClick}>{moment(Date.now() + 24*60*60*1000).format('LL')}</Button>
      <Button variant="contained" disableElevation color="success" value={Date.now() + 24*2*60*60*1000} onClick={handleClick}>{moment(Date.now() + 24*2*60*60*1000).format('LL')}</Button>
      <Button variant="contained" disableElevation color="success" value={Date.now() + 24*3*60*60*1000} onClick={handleClick}>{moment(Date.now() + 24*3*60*60*1000).format('LL')}</Button>
      <Button variant="contained" disableElevation color="success" value={Date.now() + 24*4*60*60*1000} onClick={handleClick}>{moment(Date.now() + 24*4*60*60*1000).format('LL')}</Button>
  </Stack>
  )
}

export default DateSelect