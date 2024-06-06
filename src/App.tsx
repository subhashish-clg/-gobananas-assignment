import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import DataTable from "./components/DataTable/DataTable";
import { Data, HeadCell } from "./components/DataTable/types";
import axios from "axios";
import { useEffect, useState } from "react";

function createData(
  id: number,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
): Data {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        setData(data.data);
      } catch {
        setData([]);
      }
    };

    fetchData();
  }, []);

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

      <DataTable
        searchableFields={["title", "body"]}
        headCells={headCells}
        rows={data}
      />
    </Box>
  );
}

export default App;
