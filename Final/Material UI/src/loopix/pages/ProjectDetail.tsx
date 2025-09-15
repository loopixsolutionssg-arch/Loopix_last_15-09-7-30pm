import * as React from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { findProjectById, portfolioProjects } from "../data/portfolioProjects";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "Roboto", "Helvetica", "Arial", "sans-serif"].join(", "),
  },
  colorSchemes: {
    light: {
      palette: {
        primary: { light: "#444444", main: "#000000", dark: "#000000", contrastText: "#ffffff" },
        secondary: { light: "#666666", main: "#333333", dark: "#111111", contrastText: "#ffffff" },
        text: { primary: "#000000", secondary: "#444444" },
        background: { default: "#ffffff", paper: "#ffffff" },
      },
    },
  },
});

export default function ProjectDetail() {
  const params = useParams();
  const id = params.id ?? "";
  const project = findProjectById(id) ?? portfolioProjects[0];

  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      <CssBaseline />
      <Header />
      <Box component="section" sx={{ pt: 6, pb: 10 }}>
        <Container maxWidth="lg">
          <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
            <RouterLink to="/" style={{ textDecoration: "none", color: "inherit" }}>Home</RouterLink>
            <a href="#portfolio" style={{ textDecoration: "none", color: "inherit" }}>Portfolio</a>
            <Typography color="text.primary">{project.title}</Typography>
          </Breadcrumbs>

          <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
            {project.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
            {project.subtitle}
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Paper elevation={0} className="glass-card" sx={{ p: 3 }}>
                <Box sx={{ display: "grid", gap: 2 }}>
                  <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" } }}>
                    {project.images.map((src, i) => (
                      <Box key={`${project.id}-img-${i}`} sx={{ borderRadius: 2, overflow: "hidden" }}>
                        <img src={src} alt={`${project.title} ${i + 1}`} width="100%" height="auto" />
                      </Box>
                    ))}
                  </Box>

                  <Typography sx={{ mt: 1 }}>{project.description}</Typography>

                  <Divider sx={{ my: 2 }} />
                  <Typography sx={{ fontWeight: 700 }}>Highlights</Typography>
                  <Box component="ul" sx={{ pl: 3, m: 0 }}>
                    {project.highlights.map((h) => (
                      <li key={h}><Typography component="span">{h}</Typography></li>
                    ))}
                  </Box>
                </Box>
              </Paper>

              {project.id === "startup" && (
                <Paper elevation={0} className="glass-card" sx={{ p: 3, mt: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Project story</Typography>
                  <Typography sx={{ mb: 2 }}>
                    We built two complementary dashboards under a single dashboarding initiative. The first focuses on team onboarding and work tracking. The second provides advertising analytics for growth and marketing teams. Both share a tile-based layout that keeps the most important KPIs visible at a glance while enabling drill‑downs.
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    Onboarding brings together time tracking, task progress, and scheduled activities. Widgets such as Work Time, Time Tracker and Onboarding Task keep managers aligned on who is ramping up, where bottlenecks exist, and what actions are next. A compact calendar panel provides upcoming sessions and reminders, while the right rail surfaces quick metrics like employees, hires and projects.
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    Advertising Statistics highlights paid conversions, traffic effectiveness by channel, and engagement trends. Each card contrasts the current period with the previous one using color‑coded bars and micro‑sparklines. Teams can quickly validate the impact of campaigns, track session duration, and watch bounce‑rate trends without leaving the overview.
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    Across both dashboards we used a soft, elevated card style and generous spacing for readability. Components are modular so organizations can start simple and extend with filters, drill‑through pages and role‑based views. Data sources are designed for scheduled refresh and can be wired to Power BI or a custom React front‑end.
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    <Chip label="Power BI" size="small" />
                    <Chip label="React" size="small" />
                    <Chip label="Design Systems" size="small" />
                    <Chip label="Automation" size="small" />
                  </Box>
                </Paper>
              )}
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper elevation={0} className="glass-card" sx={{ p: 3 }}>
                <Typography sx={{ fontWeight: 700, mb: 1 }}>Explore more</Typography>
                <Box sx={{ display: "grid", gap: 1 }}>
                  {portfolioProjects.filter((p) => p.id !== project.id).map((p) => (
                    <Button key={p.id} component={RouterLink} to={`/projects/${p.id}`} variant="text" color="inherit" sx={{ justifyContent: "flex-start" }}>
                      {p.title}
                    </Button>
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
