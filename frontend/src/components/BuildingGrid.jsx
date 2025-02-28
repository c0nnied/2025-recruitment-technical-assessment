import { Grid, Container, Box } from "@mui/material";
import BuildingCard from "./BuildingCard";

export default function BuildingGrid({ buildings }) {
  return (
    <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "1em",
    }}
    >
    {buildings.map((building) => (
        <BuildingCard key={building.id} building={building} />
    ))}
    </Box>
  );
}