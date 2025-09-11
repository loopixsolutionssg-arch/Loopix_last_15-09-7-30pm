import * as React from "react";

export function HeroIllustration(props: { className?: string }) {
  return (
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className={props.className} preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0" stopColor="#7ee8fa" />
          <stop offset="1" stopColor="#60a5fa" />
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="1">
          <stop offset="0" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#00c6ff" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="800" height="600" rx="20" fill="url(#g2)" opacity="0.08" />
      <g transform="translate(60,40)">
        <rect x="0" y="0" width="420" height="260" rx="16" fill="white" opacity="0.06" />
        <rect x="20" y="20" width="380" height="40" rx="8" fill="url(#g1)" opacity="0.95" />
        <rect x="20" y="80" width="340" height="20" rx="6" fill="#ffffff" opacity="0.9" />
        <rect x="20" y="110" width="300" height="16" rx="6" fill="#ffffff" opacity="0.8" />
        <circle cx="340" cy="190" r="50" fill="url(#g2)" opacity="0.95" />
        <g transform="translate(470,30)">
          <rect x="0" y="0" width="220" height="320" rx="18" fill="#fff" opacity="0.04" />
          <circle cx="110" cy="120" r="64" fill="url(#g1)" opacity="0.95" />
        </g>
      </g>
    </svg>
  );
}

export function ServiceIllustration({ variant = 0 }: { variant?: number }) {
  const colors = ["#60a5fa", "#7ee8fa", "#a78bfa"];
  const c = colors[variant % colors.length];
  return (
    <svg viewBox="0 0 120 120" width="72" height="72" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`sgrad${variant}`} x1="0" x2="1">
          <stop offset="0" stopColor={c} stopOpacity="1" />
          <stop offset="1" stopColor="#00c6ff" stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="108" height="108" rx="16" fill={`url(#sgrad${variant})`} opacity="0.12" />
      <g transform="translate(24,24)">
        <rect x="0" y="0" width="72" height="16" rx="6" fill={c} />
        <rect x="0" y="26" width="48" height="12" rx="6" fill={c} opacity="0.9" />
        <rect x="0" y="46" width="32" height="10" rx="6" fill={c} opacity="0.8" />
      </g>
    </svg>
  );
}

export function IndustryIllustration() {
  return (
    <svg viewBox="0 0 64 64" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="56" height="48" rx="8" fill="#7ee8fa" opacity="0.12" />
      <g fill="#00A6C8">
        <rect x="10" y="20" width="12" height="12" rx="2" />
        <rect x="28" y="16" width="8" height="16" rx="2" />
        <rect x="40" y="12" width="10" height="20" rx="2" />
      </g>
    </svg>
  );
}
