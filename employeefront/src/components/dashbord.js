import React, { useState } from 'react';
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';

function App() {
  const [open, setOpen] = useState(false);
  const [hostname, setHostname] = useState('');
  const [readAccess, setReadAccess] = useState(false);
  const [writeAccess, setWriteAccess] = useState(false);
  const [data, setData] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    setData([...data, { hostname, readAccess, writeAccess }]);
    setHostname('');
    setReadAccess(false);
    setWriteAccess(false);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Entry</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="hostname"
            label="Hostname"
            type="text"
            fullWidth
            value={hostname}
            onChange={(e) => setHostname(e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={readAccess}
                onChange={(e) => setReadAccess(e.target.checked)}
                color="primary"
              />
            }
            label="Read Access"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={writeAccess}
                onChange={(e) => setWriteAccess(e.target.checked)}
                color="primary"
              />
            }
            label="Write Access"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Hostname</TableCell>
              <TableCell>Read Access</TableCell>
              <TableCell>Write Access</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.hostname}</TableCell>
                <TableCell>{row.readAccess ? 'Yes' : 'No'}</TableCell>
                <TableCell>{row.writeAccess ? 'Yes' : 'No'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
