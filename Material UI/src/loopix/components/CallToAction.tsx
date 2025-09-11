import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";

export default function CallToAction() {
  return (
    <Box component="section" id="contact" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Stack spacing={3} alignItems={{ xs: "stretch", sm: "center" }} direction={{ xs: "column", sm: "row" }} className="glass-cta" sx={{ p: { xs: 3, sm: 4 } }}>
          <Typography variant="h6" sx={{ fontWeight: 600, flex: 1 }}>
            🚀 Let’s build something that grows with you. Connect with us today!
          </Typography>
          <Button variant="contained" color="primary" size="large" href="mailto:loopixsolutionssg@gmail.com" sx={{ borderRadius: 2 }}>
            Contact Us
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
