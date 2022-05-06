//import React, {useState, useEffect} from 'react';
import { FormControlLabel, Checkbox, FormGroup } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { checkCb } from '../store/codeSlice';

function Checboxes() {

  const dispatch = useDispatch();
  const codes = useSelector(state => state.codes.codes);
  
  return (
    <FormGroup>
      {codes.map((code) => {
        return <FormControlLabel key={code['code']} control={<Checkbox key={code['code']} checked={code.check} onChange={(e) => dispatch(checkCb({code}))}/>} label={code['country']} />
      })}
    </FormGroup>
  );
}

export default Checboxes;