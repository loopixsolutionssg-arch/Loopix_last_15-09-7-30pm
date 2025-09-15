export type PortfolioProject = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  images: string[];
  slug?: string;
  category?: string;
};

// Centralized portfolio data so both the list and detail pages stay in sync
export const portfolioProjects: PortfolioProject[] = [
  {
    id: "restaurant",
    title: "Restaurant Online Ordering & Automation",
    subtitle: "Power Automate, Power Apps",
    description:
      "Implemented an end-to-end ordering workflow for a local restaurant: online ordering form, order routing to kitchen via Power Automate, and a lightweight Power App for staff to update order status.",
    highlights: [
      "Online ordering form integrated with Google Sheets",
      "Power Automate flow to notify kitchen and SMS updates to customers",
      "Power App for order management on tablets",
    ],
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Ff412044fdee74b4da312f40781fe7702%2F7755176693c241fa90338b2b4197442f?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Ff412044fdee74b4da312f40781fe7702%2Fd348b8fdeef74b179e0588547a7429a2?format=webp&width=800",
    ],
    category: "automation",
    slug: "restaurant-online-ordering",
  },
  {
    id: "clinic",
    title: "Clinic Patient Intake Automation",
    subtitle: "Power Platform, RPA",
    description:
      "Automated patient intake and appointment confirmations, reducing manual data entry and missed appointments.",
    highlights: [
      "Power Automate flows for appointment reminders",
      "RPA to sync records between legacy clinic systems and cloud database",
      "Secure handling of patient contact details",
    ],
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Ff412044fdee74b4da312f40781fe7702%2Fd09c85bd144749a783fd06cdf0ff7718?format=webp&width=1200",
      "https://cdn.builder.io/api/v1/image/assets%2Ff412044fdee74b4da312f40781fe7702%2F25232c2453ff460cbb153ff94c280e5c?format=webp&width=1200",
    ],
    category: "automation",
    slug: "clinic-patient-intake",
  },
  {
    id: "tuition",
    title: "Tuition Centre Website & Branding",
    subtitle: "Web Design, UX/UI, Dashboards",
    description:
      "Designed a modern, responsive website for a tuition centre including class schedules, signup forms, and integrated dashboards for enrolment analytics.",
    highlights: [
      "Responsive website with booking and payments",
      "Custom dashboards for student performance",
      "Branded assets and promotional graphics",
    ],
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Ff412044fdee74b4da312f40781fe7702%2F78fb9930572a4a3f8442f42288bdcdec?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Ff412044fdee74b4da312f40781fe7702%2F9fae76cb01b84f739e8a274b6b08540f?format=webp&width=800",
    ],
    category: "web",
    slug: "tuition-centre-website",
  },
  {
    id: "startup",
    title: "Dashboarding: Onboarding & Advertising Analytics",
    subtitle: "Power BI, Custom Dashboards",
    description:
      "A set of two production dashboards designed to help leadership and teams monitor onboarding pipelines and advertising performance in real time. The experience emphasizes clarity, benchmark tracking, and quick anomaly detection.",
    highlights: [
      "Time tracking, onboarding progress, and task completion widgets",
      "Advertising KPIs with previous-period deltas and trend lines",
      "Card-style visual hierarchy with soft shadows for scannability",
      "Modular tiles enabling future drill-downs and team views",
    ],
    // Provided attachments for this project
    images: [
      // IMG_0146 (onboarding-style dashboard)
      "https://cdn.builder.io/api/v1/image/assets%2Ff412044fdee74b4da312f40781fe7702%2F62abdde50fe14da89783fd34b980e89e?format=webp&width=1200",
      // IMG_0148 (advertising statistics dashboard)
      "https://cdn.builder.io/api/v1/image/assets%2Ff412044fdee74b4da312f40781fe7702%2F5174c78ea0d440b8b6bb60a879ef11c3?format=webp&width=1200",
    ],
    category: "dashboard",
    slug: "dashboarding-onboarding-and-advertising",
  },
];

export function findProjectById(id: string) {
  return portfolioProjects.find((p) => p.id === id || p.slug === id);
}
