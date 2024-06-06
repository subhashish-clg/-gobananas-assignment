import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import DataTable from "./components/DataTable";

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

      <DataTable />
    </Box>
  );
}

export default App;
