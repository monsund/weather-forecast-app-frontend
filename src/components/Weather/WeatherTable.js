import React from 'react'
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';


const WeatherTable = ({weather}) => {
  return (
    <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Day Forecast</TableCell>
            <TableCell>Precipitation Type</TableCell>
            <TableCell>Precipitation Intensity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{weather.IconPhrase}</TableCell>
            <TableCell>{weather.PrecipitationType ? weather.PrecipitationType  : 'NA'}</TableCell>
            <TableCell>{weather.PrecipitationIntensity ? weather.PrecipitationIntensity : 'NA'}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
      </TableContainer>
    </div>
  )
}

export default WeatherTable