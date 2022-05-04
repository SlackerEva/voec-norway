import React, {useState, useEffect} from 'react';
import { FormControlLabel, Checkbox, FormGroup } from '@mui/material';
import { useSelector } from 'react-redux';

function Checboxes() {

  const codes = useSelector(state => state.codes.codes);

/*  useEffect(() => {
    setIsCheck(countries.map((country) => country['code']));
    if (!checked) {
      setIsCheck([]);
    }
  }, [checked, countries]);

  function handleClick(event) {
    const { id, checked } = event.target;
    if (checked) {
      setIsCheck([...isCheck, id]);
      console.log(isCheck);
    } else {
      setIsCheck(isCheck.filter(item => item !== id));
      console.log(isCheck);
    }
  }*/
  
  return (
    <FormGroup>
      {codes.map((country) => {
        return <FormControlLabel key={country['code']} control={<Checkbox  id={country['code']} />} label={country['country']} />
      })}
    </FormGroup>
  );
}

export default Checboxes;