import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import LanguageIcon from "@mui/icons-material/Language";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import InsightsIcon from "@mui/icons-material/Insights";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import HubIcon from "@mui/icons-material/Hub";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

const iconSx = { fontSize: 40 } as const;

const items = [
  { icon: <LanguageIcon sx={iconSx} />, title: "Web & App Development", desc: "Modern, user-friendly websites and custom web apps tailored to your business." },
  { icon: <PrecisionManufacturingIcon sx={iconSx} />, title: "Automation & RPA", desc: "Power Automate, RPA and workflow automation to reduce manual work and errors." },
  { icon: <InsightsIcon sx={iconSx} />, title: "Dashboards & BI", desc: "Power BI and Tableau dashboards that turn data into actionable insights." },
  { icon: <CloudQueueIcon sx={iconSx} />, title: "Cloud & DevOps", desc: "Cloud migrations, CI/CD, hosting and scalable infrastructure on AWS/Azure." },
  { icon: <HubIcon sx={iconSx} />, title: "Integrations & APIs", desc: "Connect systems—CRM, POS, accounting—through reliable APIs and middleware." },
  { icon: <SecurityIcon sx={iconSx} />, title: "Security & Compliance", desc: "Basic security audits, data handling practices and compliance guidance for SMEs." },
  { icon: <SupportAgentIcon sx={iconSx} />, title: "Managed IT & Support", desc: "Ongoing support, monitoring and maintenance so your tech just works." },
  { icon: <DesignServicesIcon sx={iconSx} />, title: "UX/UI & Branding", desc: "Design services to make your digital products clear, usable and on-brand." },
];

export default function Services() {
  return (
    <Box component="section" id="services" sx={{ py: { xs: 8, md: 10 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
          Services
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }, gap: { xs: 2, sm: 3 } }}>
          {items.map((item) => (
            <Box key={item.title} className="service-frame">
              <Paper elevation={0} className="glass-card service-glass" sx={{ p: 3, height: '100%' }}>
                <Box sx={{ mb: 2 }}>{item.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography color="text.secondary">{item.desc}</Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
