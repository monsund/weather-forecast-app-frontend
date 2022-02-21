import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


import { fetchCitiesBySearch } from '../../api/api';

const DEFAULT_OPTIONS = [
  { cityName: 'berlin', cityKey: '178087' },
  { cityName: 'chicago', cityKey: '348308' },
  { cityName: 'delhi', cityKey: '202396' },
  { cityName: 'new york', cityKey: '349727' },
  { cityName: 'shanghai', cityKey: '106577' },
];

const CitySearchDropdown = ({setCityKey, setCityName}) => {

  const [options, setOptions] = useState(DEFAULT_OPTIONS); // dropdown options
  const [value, setValue] = useState(''); // 
  const [search, setSearch] = useState('');

  useEffect(() => {
    // function for getting list of cities on search----
    const getCitiesBySearch = async () => {
      try {
        const { data } = await fetchCitiesBySearch(search)
        setOptions(data.data)
      } catch (error) {
        console.log('getCitiesBySearch API not working', error.message)
      }
    }

    if (search === ''){
      setCityKey('')
      setOptions(DEFAULT_OPTIONS)
    }
    else
      getCitiesBySearch()

  }, [search])


  useEffect(() => {
    options.forEach(option => {
      if (value === option.cityName) {
        setCityKey(option.cityKey)
        setCityName(value)
      }
    })

    // Alternative
    // setCityKey(options.find(option=>option.cityName === value).cityKey)

  }, [value])



  return (
    <div>
      <Autocomplete
        id="asynchronous-demo"
        sx={{ width: 300 }}
        options={options.map(option => option.cityName)}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={search}
        onInputChange={(event, newInputValue) => {
          setSearch(newInputValue);
        }}
        renderInput={(params) => <TextField {...params} label="Search City" />}


      />
    </div>

  );
}

export default CitySearchDropdown;
