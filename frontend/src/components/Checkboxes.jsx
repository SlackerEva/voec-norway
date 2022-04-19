import React, {useState, useEffect} from 'react';
import { FormControlLabel, Checkbox, FormGroup } from '@mui/material';

function Checboxes(props) {

  const { countries, checked } = props;
  const [isCheck, setIsCheck] = useState([]);

  useEffect(() => {
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
  }
  
  return (
    <FormGroup>
      {countries.map((country) => {
        return <FormControlLabel key={country['code']} control={<Checkbox  id={country['code']} checked={isCheck.includes(country['code'])} onChange={handleClick} />} label={country['country']} />
      })}
    </FormGroup>
  );
}

export default Checboxes;