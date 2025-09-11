import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <Box component="footer" className="footer-glass" sx={{ py: 4, mt: 4 }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ xs: "flex-start", sm: "center" }} justifyContent="space-between">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <img src="https://cdn.builder.io/api/v1/image/assets%2Ff412044fdee74b4da312f40781fe7702%2F452151f601bf4767af584aa45770b5a1?format=webp&width=800" alt="Loopix Solutions" style={{ width: 40, height: 40, objectFit: 'contain', borderRadius: 8 }} onError={(e)=>{ (e.target as HTMLImageElement).src='data:image/svg+xml;utf8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2740%27 height=%2740%27%3E%3Crect width=%2740%27 height=%2740%27 fill=%27%2300A6C8%27 rx=%278%27/%3E%3Ctext x=%2720%27 y=%2724%27 text-anchor=%27middle%27 font-size=%2714%27 fill=%27%23fff%27 font-family=%27Inter,Arial,sans-serif%27%3ELS%3C/text%3E%3C/svg%3E'}} />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Loopix Solutions</Typography>
              <Typography variant="caption" color="text.secondary">Web • Automation • BI • Cloud • Integrations • Security • Support</Typography>
            </Box>
          </Box>
          <Stack direction="row" spacing={2}>
            <Link underline="none" color="text.primary" href="#">Home</Link>
            <Link underline="none" color="text.primary" href="#about">About</Link>
            <Link underline="none" color="text.primary" href="#services">Services</Link>
            <Link underline="none" color="text.primary" href="#portfolio">Portfolio</Link>
            <Link underline="none" color="text.primary" href="#contact">Contact</Link>
          </Stack>
          <Stack direction="row" spacing={1.5}>
            <Link aria-label="LinkedIn" href="https://www.linkedin.com" target="_blank" rel="noopener">
              <LinkedInIcon />
            </Link>
            <Link aria-label="Email" href="mailto:loopixsolutionssg@gmail.com">
              <EmailIcon />
            </Link>
          </Stack>
        </Stack>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 2 }}>
          © {new Date().getFullYear()} Loopix Solutions. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
