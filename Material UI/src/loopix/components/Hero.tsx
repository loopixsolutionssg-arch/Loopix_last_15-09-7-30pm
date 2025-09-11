import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import SmartImage from "./SmartImage";
import Paper from "@mui/material/Paper";

const HERO_IMG = "https://cdn.builder.io/api/v1/image/assets%2Ff412044fdee74b4da312f40781fe7702%2F5eedba306feb4bff8c7e0a8e065e43e3";
const HERO_SECOND = "https://cdn.builder.io/api/v1/image/assets%2Ff412044fdee74b4da312f40781fe7702%2F3f99507fc02b4499829eca90b3daa890";

export default function Hero() {
  return (
    <Box component="section" sx={{ bgcolor: (theme) => alpha(theme.palette.primary.main, 0.06), py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="center" justifyContent="space-between">
          <Box sx={{ flex: 1 }}>
            <Typography component="h1" variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
              Simplifying IT for Small Business Growth
            </Typography>
            <Typography variant="h6" sx={{ color: "text.secondary", mb: 3 }}>
              Affordable web, automation, dashboards, cloud, integrations, security, and ongoing IT support for SMEs
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button variant="contained" color="primary" size="large" href="#contact" sx={{ borderRadius: 2 }}>
                Get Started
              </Button>
              <Button variant="outlined" color="primary" size="large" href="#services" sx={{ borderRadius: 2 }}>
                Explore Services
              </Button>
            </Stack>
          </Box>
          <Box sx={{ flex: 1, width: "100%", maxWidth: 520, mx: "auto" }}>
            <Box className="glass-hero" sx={{ aspectRatio: "4 / 3", width: "100%", borderRadius: 3, p: 2 }}>
              <SmartImage src={HERO_IMG} alt="Loopix hero" style={{ width: '100%', height: '100%', borderRadius: 12, objectFit: 'cover' }} />
            </Box>
          </Box>
        </Stack>
      </Container>
      {/* Secondary banner*/}
      <Box sx={{ mt: 4 }}>
        <Container maxWidth="lg">
          <Paper elevation={0} className="glass-card" sx={{ overflow: 'hidden' }}>
            <SmartImage src={HERO_SECOND} alt="Loopix showcase" style={{ width: '100%', height: 'auto', alignSelf: 'stretch', display: 'block', flexGrow: 0 }} />
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}
