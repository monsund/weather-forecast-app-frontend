import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import moment from 'moment';

import './dateSelectStyles.css';


const DateSelect = ({ date, setDate }) => {

  

  const handleClick = (e) => {
    console.log(e.target.value)
    setDate(e.target.value)
  }

  //Dates to forecast---
  const totalNoOfDates = [1, 2, 3, 4, 5]
  const [forecastDate, setForecastDate] = useState(Date.now())
  let dateIncrementFactor = 0;

  return (
    <>
      <Stack direction="row" spacing={2}>
        {totalNoOfDates.map(element => (
          <>
            <Button className="button" variant="contained" disableElevation color="success" value={forecastDate + (dateIncrementFactor * 24 * 60 * 60 * 1000)} onClick={handleClick}>{moment(forecastDate + (dateIncrementFactor * 24 * 60 * 60 * 1000)).format('LL')}</Button>
            <div className="date-increment-factor">{dateIncrementFactor++}</div>
          </>
        ))}
      </Stack>
    </>
  )
}

export default DateSelect


//<Stack direction="row" spacing={2}>
 //       {/* <Button variant="contained" style={{'background':condition?"":""}} disableElevation color="success" value={Date.now()} onClick={handleClick}>{moment(Date.now()).format('LL')}</Button> */}
   //     <Button variant="contained" disableElevation color="success" value={Date.now()} onClick={handleClick}>{moment(Date.now()).format('LL')}</Button>
     //   <Button variant="contained" disableElevation color="success" value={Date.now() + 24 * 60 * 60 * 1000} onClick={handleClick}>{moment(Date.now() + 24 * 60 * 60 * 1000).format('LL')}</Button>
       // <Button variant="contained" disableElevation color="success" value={Date.now() + 24 * 2 * 60 * 60 * 1000} onClick={handleClick}>{moment(Date.now() + 24 * 2 * 60 * 60 * 1000).format('LL')}</Button>
        //<Button variant="contained" disableElevation color="success" value={Date.now() + 24 * 3 * 60 * 60 * 1000} onClick={handleClick}>{moment(Date.now() + 24 * 3 * 60 * 60 * 1000).format('LL')}</Button>
        //<Button variant="contained" disableElevation color="success" value={Date.now() + 24 * 4 * 60 * 60 * 1000} onClick={handleClick}>{moment(Date.now() + 24 * 4 * 60 * 60 * 1000).format('LL')}</Button>
//</Stack>