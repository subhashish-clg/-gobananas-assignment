import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

function App() {
  return (
    <Box>
      <Box>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              Photos
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
}

export default App;
