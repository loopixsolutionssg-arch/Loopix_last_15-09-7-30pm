import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function About() {
  return (
    <Box component="section" id="about" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          About Us
        </Typography>
        <Typography variant="h6" sx={{ color: "text.secondary", maxWidth: 900 }}>
          At Loopix, we help small and growing businesses harness the power of technology without the complexity. Our mission is simple: make IT solutions affordable, scalable, and impactful.
        </Typography>
      </Container>
    </Box>
  );
}
