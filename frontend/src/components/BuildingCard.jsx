import { Card, CardMedia, Typography, Box } from "@mui/material";

export default function BuildingCard({ building }) {
  return (
    <Card sx={{ width: "18em", height: "20em", position: "relative", borderRadius: "8px", overflow: "hidden" }}>
      <CardMedia
        component="img"
        image={building.building_picture}
        alt={building.name}
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 140, 0, 0.5)",
            opacity: 0,
            "&:hover": { opacity: 1 },
          }}
        />

      <Box sx={{
        position: "absolute",
        top: "0.5em",
        right: "0.5em",
        backgroundColor: "white",
        padding: 1.2,
        borderRadius: "15px",
        display: "flex",
        alignItems: "center"
      }}>
        <Box sx={{
          width: "0.6em",
          height: "0.6em",
          backgroundColor: "green",
          borderRadius: "50%",
          marginRight: "0.6em"
        }}/>

        <Typography sx={{ fontSize: "0.6em", fontWeight: "bold" }}>{`${building.rooms_available} rooms available`}</Typography>
      </Box>

      <Box sx={{
        position: "absolute",
        bottom: "0.5em",
        left: "50%",
        backgroundColor: "darkorange",
        padding: 1,
        transform: "translateX(-50%)",
        width: "89%",
        borderRadius: "8px"
      }}>
        <Typography sx={{ color: "white", paddingLeft: 1, fontSize: "0.7em" }}>{building.name}</Typography>
      </Box>
    </Card>
  );
}