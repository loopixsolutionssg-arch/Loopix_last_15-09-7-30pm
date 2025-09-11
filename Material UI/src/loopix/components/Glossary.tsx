import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const glossary = [
  {
    term: "Power Apps",
    desc: "Low-code apps platform to build custom mobile and web applications quickly for internal use or customer-facing scenarios.",
  },
  {
    term: "Power Automate",
    desc: "Workflow automation service that connects apps and services to automate repetitive tasks and processes (notifications, approvals, data sync).",
  },
  {
    term: "RPA (Robotic Process Automation)",
    desc: "Automates manual, rule-based interactions with legacy systems (screen scraping, clicks, data entry) to save time and reduce errors.",
  },
  {
    term: "Power BI",
    desc: "Business intelligence service to build interactive reports and dashboards that refresh from multiple data sources.",
  },
  {
    term: "Tableau",
    desc: "A powerful data visualization platform for in-depth exploration and visual storytelling with your data.",
  },
  {
    term: "Custom Dashboards",
    desc: "Tailored dashboards combining multiple data sources, KPIs, and visualizations to support decision-making at every level.",
  },
];

export default function Glossary() {
  return (
    <Box component="section" id="glossary" sx={{ py: { xs: 6, md: 8 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>Glossary & Technologies</Typography>
        <Grid container spacing={2}>
          {glossary.map((g) => (
            <Grid item xs={12} sm={6} md={4} key={g.term}>
              <Paper className="glass-card" elevation={0} sx={{ p: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{g.term}</Typography>
                <Typography variant="body2" color="text.secondary">{g.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
