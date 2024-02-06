import React, { useState } from 'react';
import { TextField, FormControlLabel, Checkbox, Button, Grid } from '@mui/material';

export default function OutlinedCard() {
  const [ip, setIp] = useState('');
  const [read, setRead] = useState(false);
  const [write, setWrite] = useState(false);
  const [superUserChecked, setSuperUserChecked] = useState(true);

  const handleIpChange = (event) => {
    setIp(event.target.value);
  };

  const handleReadChange = (event) => {
    setRead(event.target.checked);
  };

  const handleWriteChange = (event) => {
    setWrite(event.target.checked);
  };

  const handleSuperUserChange = (event) => {
    const isChecked = event.target.checked;
    setSuperUserChecked(isChecked);
  };

  const handleSubmit = (event) => {
    console.log('IP: ' + ip);
    console.log('Read: ' + read);
    console.log('Write: ' + write);
    console.log('Super user: ' + superUserChecked);
  };

  return (
    <Grid sx={{ marginTop: '2em' }}>
      <TextField
        id="outlined-basic"
        label="Host name / IP Address"
        inputProps={{ type: 'text' }}
        variant="outlined"
        placeholder="Host name / IP Address"
        required
        onChange={handleIpChange}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Read"
        onChange={handleReadChange}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Write"
        onChange={handleWriteChange}
      />
      <FormControlLabel
        required
        control={<Checkbox  checked={superUserChecked} onChange={handleSuperUserChange} />}
        label={<span style={{ color: superUserChecked ? '' : 'red' }}>Super user</span>}
      />
      <Button onClick={handleSubmit}>
        Submit
      </Button>
    </Grid>
  );
}
