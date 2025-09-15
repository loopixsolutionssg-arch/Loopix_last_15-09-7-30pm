import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

export default function Header() {
  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: 1, borderColor: "divider", bgcolor: "common.white" }}>
      <Toolbar sx={{ maxWidth: 1200, mx: "auto", width: "100%", py: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexGrow: 1 }}>
          <Box className="logo-badge" sx={{ display: "inline-flex", alignItems: "center", justifyContent: "center", mr: 1 }}>
            {/* Smart image with fallback */}
            <img src="https://cdn.builder.io/api/v1/image/assets%2Ff412044fdee74b4da312f40781fe7702%2F452151f601bf4767af584aa45770b5a1?format=webp&width=800" alt="Loopix Solutions" style={{ width: 36, height: 36, objectFit: 'contain' }} onError={(e)=>{ (e.target as HTMLImageElement).src='data:image/svg+xml;utf8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2736%27 height=%2736%27%3E%3Crect width=%2736%27 height=%2736%27 fill=%27%2300A6C8%27 rx=%278%27/%3E%3Ctext x=%2718%27 y=%2722%27 text-anchor=%27middle%27 font-size=%2714%27 fill=%27%23fff%27 font-family=%27Inter,Arial,sans-serif%27%3EL%3C/text%3E%3C/svg%3E'}} />
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: 0.2, lineHeight: 1 }}>
              Loopix Solutions
            </Typography>
            <Typography variant="caption" sx={{ display: "block", color: "text.secondary", mt: 0.25 }}>
              Web • Automation • Dashboards • Cloud • Integrations • Security • Support
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: 2 }}>
          <Link underline="none" color="text.primary" href="#about" sx={{ fontWeight: 500 }}>
            About
          </Link>
          <Link underline="none" color="text.primary" href="#services" sx={{ fontWeight: 500 }}>
            Services
          </Link>
          <Link underline="none" color="text.primary" href="#industries" sx={{ fontWeight: 500 }}>
            Industries
          </Link>
          <Link underline="none" color="text.primary" href="#portfolio" sx={{ fontWeight: 500 }}>
            Portfolio
          </Link>
          <Link underline="none" color="text.primary" href="#contact" sx={{ fontWeight: 500 }}>
            Contact
          </Link>
          <Button variant="contained" color="primary" href="#contact" sx={{ borderRadius: 2, px: 2.5 }}>
            Get Started
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
