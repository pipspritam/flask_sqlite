import React, { useEffect, useState } from 'react';

import { Grid, Typography, Button, Input, TextField, Autocomplete , Box, Dialog} from '@mui/material';
import Loading from './Loading';

const dropdownOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

export default function OutlinedCard() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [loader, setLoader] = useState(false);

  const handleLoader = () => {
    setLoader(true);
  }

  return (
    <>
      <Box boxShadow={3} borderRadius={5} bgcolor="#fff" p={2} mb={2} minHeight="200px">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ marginBottom: '1em' }}>NFS Export Mount Path</Typography>

            <Autocomplete
              disablePortal
              sx={{ width: '70%', marginBottom: '1em' }}
              options={dropdownOptions}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => <TextField {...params} label="NFS Export Path" />}
              onChange={(event, value) => setSelectedOption(value)}
            />

            <Button type="submit" variant="contained" onClick={handleLoader}>
              Find
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ marginBottom: '1em' }}>Total Size = 300 GB</Typography>
            <Typography variant="h5" sx={{ marginBottom: '1em' }}>Used Size = 100 GB</Typography>
            <Typography variant="h5" >Available Size = 200 GB</Typography>
          </Grid>
        </Grid>
      </Box>

      {loader && (
        <Dialog open PaperProps={{ style: { backgroundColor: 'transparent', boxShadow: 'none' } }}>
          <Loading />
        </Dialog>
      )}

      <Grid container>
        <Grid item xs={12} md={6}>
          <Box boxShadow={3} borderRadius={5} bgcolor="#fff" p={2} mb={2} minHeight="200px" >
            <TextField
              id="outlined-basic"
              label="Enter Size in GB"
              inputProps={{ type: 'number' }}
              variant="outlined"
              placeholder="Enter Size in GB"
              sx={{ marginBottom: '1em', width: '70%' }}
            />
            <TextField
              id="outlined-basic"
              label="Purpose"
              variant="outlined"
              placeholder="Purpose"
              sx={{ marginBottom: '1em', width: '70%' }}
            />
            <br></br>

            <Button type="submit" variant="contained"  >
              Increase
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
