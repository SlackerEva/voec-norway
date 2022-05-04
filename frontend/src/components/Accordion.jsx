import React, {useState} from 'react';
import { Accordion, AccordionDetails, AccordionSummary, FormControlLabel, FormGroup, Typography, FormControl, Switch, Button  } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checboxes from './Checkboxes';

export default function ControlledAccordions() {

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography 
            sx={{ 
              width: '33%', 
              flexShrink: 0 
            }}
          >
            Country
          </Typography>
          <Typography sx={{ color: 'text.secondary'}}>
            Select the store's country
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
            <FormGroup sx={{ flexDirection: 'row', mb: 2, justifyContent: 'space-between'}}>
              <FormControlLabel control={<Switch />} label="Select All" />
              <Button variant="contained">
                Submit
              </Button>
            </FormGroup>
            <Checboxes />
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}