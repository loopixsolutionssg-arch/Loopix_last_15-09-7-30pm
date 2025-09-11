import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const points = [
  "Affordable packages for SMEs",
  "Quick delivery & reliable support",
  "Technology made simple",
];

export default function WhyChoose() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
          Why Choose Us
        </Typography>
        <Stack spacing={1.5}>
          {points.map((p) => (
            <Stack key={p} direction="row" spacing={1.5} alignItems="center">
              <CheckCircleIcon color="primary" />
              <Typography variant="h6" color="text.primary">{p}</Typography>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
