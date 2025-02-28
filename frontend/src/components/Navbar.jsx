import { AppBar, Toolbar, InputBase, IconButton, Button, Typography, Box } from "@mui/material";
import { useState } from "react";
import logo from "../../assets/freeRoomsLogo.png"
import closed from "../../assets/freeRoomsDoorClosed.png"
import moon from "../../assets/darkMode.png"
import grids from "../../assets/gridView.png"
import map from "../../assets/map.png"
import search from "../../assets/search.png"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDoor = () => {
      setIsOpen((prev) => !prev);
    };

    return (
      <AppBar position="sticky" sx={{ bgcolor: "white", borderBottom: "1px solid lightgrey", boxShadow: "none" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", "&:hover": { filter: "brightness(0.9)" } }} onClick={toggleDoor}>
            <img src={isOpen ? logo : closed} alt="Freerooms" width={50} />
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "darkorange" }}>
              Freerooms
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            {[search, grids, map, moon].map((icon, index) => (
              <IconButton
                key={index}
                sx={{
                  border: "2px solid darkorange",
                  borderRadius: "8px",
                  "&:hover": { border: "2px solid #cc5200" },
                }}
              >
                <img src={icon} alt={`Icon-${index}`} width={20} />
              </IconButton>
            ))}
          </Box>

        </Toolbar>
      </AppBar>
    );
  }
