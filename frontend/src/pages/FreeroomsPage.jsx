import { useState, useEffect } from "react";
import { AppBar, Toolbar, InputBase, IconButton, Button, Box } from "@mui/material";
import { Search, FilterList, Sort } from "@mui/icons-material";
import Navbar from "../components/Navbar";
import BuildingGrid from "../components/BuildingGrid";

export default function FreeroomsPage() {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setBuildings(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.8em 0.8em",
        }}
      >
        <Button variant="outlined" startIcon={<FilterList />} sx={{ border: "2px solid darkorange", color: "darkorange", backgroundColor: "white", borderRadius: "8px"}}>
          Filters
        </Button>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: "1px solid lightgrey",
            borderRadius: "4px",
            padding: "4px 10px",
            width: "50%"
          }}
        >
          <Search color="action" />
          <InputBase placeholder="Search for a building..." sx={{ ml: 1, width: "100%" }} />
        </Box>

        <Button variant="outlined" startIcon={<Sort />} sx={{ border: "2px solid darkorange", color: "darkorange", backgroundColor: "white", borderRadius: "8px"}}>
          Sort
        </Button>
      </Box>
      <BuildingGrid buildings={buildings} />
    </>
  );
}
