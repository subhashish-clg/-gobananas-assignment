import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import DataTable from "./components/DataTable/DataTable";
import { Data, HeadCell } from "./components/DataTable/types";
import CircularProgress from "@mui/material/CircularProgress";

import axios from "axios";
import { useEffect, useState } from "react";

const headCells: readonly HeadCell[] = [
  {
    id: "id",
    numeric: true,
    disablePadding: false,
    label: "ID",
  },
  {
    id: "userId",
    numeric: true,
    disablePadding: false,
    label: "User ID",
  },
  {
    id: "title",
    numeric: true,
    disablePadding: false,
    label: "Title",
  },
  {
    id: "body",
    numeric: true,
    disablePadding: false,
    label: "Body",
  },
];

interface Post extends Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const [data, setData] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        setData(data.data);
      } catch {
        setData([]);
        alert("Failed to load the data.");
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Box>
      <Box>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              Data Viewer
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      {isLoading ? (
        <Box
          sx={{ minHeight: "100vh", justifyContent: "center", display: "flex" }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <DataTable
          searchableFields={["title", "body"]}
          headCells={headCells}
          rows={data}
        />
      )}
    </Box>
  );
}

export default App;
