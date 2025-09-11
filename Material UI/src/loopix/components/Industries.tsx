import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import StorefrontIcon from "@mui/icons-material/Storefront";
import RealEstateAgentIcon from "@mui/icons-material/RealEstateAgent";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SchoolIcon from "@mui/icons-material/School";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import GavelIcon from "@mui/icons-material/Gavel";

const industries = [
  { icon: <StorefrontIcon />, title: "Retail Shops & Boutiques" },
  { icon: <RealEstateAgentIcon />, title: "Real Estate Agencies" },
  { icon: <FitnessCenterIcon />, title: "Gyms & Fitness Studios" },
  { icon: <SchoolIcon />, title: "Educational Institutes / Training Centers" },
  { icon: <PersonOutlineIcon />, title: "Freelancers & Consultants" },
  { icon: <ShoppingCartIcon />, title: "E-commerce / Small Online Stores" },
  { icon: <EventAvailableIcon />, title: "Event Planners & Agencies" },
  { icon: <HealthAndSafetyIcon />, title: "Healthcare & Wellness" },
  { icon: <VolunteerActivismIcon />, title: "Non-Profits & Community Groups" },
  { icon: <GavelIcon />, title: "Professional Services" },
];

export default function Industries() {
  return (
    <Box component="section" id="industries" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
          Industries We Serve
        </Typography>
        <Grid container spacing={3}>
          {industries.map((item) => (
            <Grid key={item.title} item xs={6} sm={4} md={3}>
              <Paper elevation={0} className="glass-card" sx={{ p: 3, textAlign: "center" }}>
                <Box sx={{ color: "primary.main", display: "inline-flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, borderRadius: 2, bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08), mb: 1 }}>
                  {item.icon}
                </Box>
                <Typography fontWeight={600}>{item.title}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
