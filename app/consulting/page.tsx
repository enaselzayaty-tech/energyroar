"use client";

import React from "react";

function EnergyRoarLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <svg
        width="42"
        height="42"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="EnergyROAR logo"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0" y1="0" x2="64" y2="64">
            <stop offset="0%" stopColor="#F7D046" />
            <stop offset="100%" stopColor="#C9971A" />
          </linearGradient>
        </defs>

        <rect x="2" y="2" width="60" height="60" rx="16" fill="#0B0B0B" stroke="url(#goldGradient)" strokeWidth="2" />
        <path
          d="M20 42V22H31.5C38.5 22 43 25.8 43 32C43 38.2 38.5 42 31.5 42H20ZM27 36H31C34 36 36 34.5 36 32C36 29.5 34 28 31 28H27V36Z"
          fill="url(#goldGradient)"
        />
        <path
          d="M37 42L31.5 34.5L37.4 31L45 42H37Z"
          fill="url(#goldGradient)"
          opacity="0.9"
        />
      </svg>

      <div>
        <div style={{ color: "#F5C542", fontWeight: 800, fontSize: "22px", letterSpacing: "0.5px" }}>
          EnergyROAR
        </div>
        <div style={{ color: "#B8B8B8", fontSize: "12px", letterSpacing: "1.2px", textTransform: "uppercase" }}>
          Consulting
        </div>
      </div>
    </div>
  );
}

export default function ConsultingPage() {
  return (
    <main style={styles.page}>
      <div style={styles.banner}>
        🚧 EnergyROAR Consulting Platform — Currently Under Development
      </div>

      <header style={styles.header}>
        <EnergyRoarLogo />

        <a href="mailto:info@energyroar.ca" style={styles.cta}>
          Book a Consultation
        </a>
      </header>

      <section style={styles.hero}>
        <p style={styles.eyebrow}>Strategic Energy & Resource Advisory</p>

        <h1 style={styles.title}>
          Premium consulting for energy, industrial, and resource-sector growth.
        </h1>

        <p style={styles.subtitle}>
          EnergyROAR helps clients navigate market opportunities, project strategy,
          field development thinking, and commercial positioning with clarity and precision.
        </p>

        <a href="mailto:info@energyroar.ca" style={styles.primaryButton}>
          Book a Consultation
        </a>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Services</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Strategic Advisory</h3>
            <p style={styles.cardText}>
              High-level guidance for companies evaluating growth opportunities
              and market positioning.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Energy Consulting</h3>
            <p style={styles.cardText}>
              Advisory across energy and industrial sectors with a focus on
              execution and value creation.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Project Positioning</h3>
            <p style={styles.cardText}>
              Clear, professional presentation and messaging for projects and ventures.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Expertise</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Subsurface & Reservoir</h3>
            <p style={styles.cardText}>
              Reservoir evaluation, field development planning, and subsurface
              interpretation to support technical and commercial decisions.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Energy Strategy</h3>
            <p style={styles.cardText}>
              Market positioning, asset strategy, and energy transition advisory
              for emerging and established opportunities.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Digital & Analytics</h3>
            <p style={styles.cardText}>
              Data-driven workflows, modeling support, and decision systems for
              faster, higher-quality execution.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Low-Carbon Solutions</h3>
            <p style={styles.cardText}>
              Carbon strategy, emissions reduction, and sustainable value creation
              for future-facing projects.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.contact}>
        <h2 style={styles.contactTitle}>Ready to work together?</h2>

        <p style={styles.contactText}>
          Reach out to discuss your project, opportunity, or consulting needs.
        </p>

        <a href="mailto:info@energyroar.ca" style={styles.primaryButton}>
          Book a Consultation
        </a>
      </section>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    background: "#050505",
    color: "#FFFFFF",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },

  banner: {
    width: "100%",
    padding: "12px 20px",
    textAlign: "center",
    background: "linear-gradient(90deg, #F5C542, #D39B17)",
    color: "#111111",
    fontWeight: 700,
    fontSize: "14px",
    letterSpacing: "0.4px",
    boxSizing: "border-box",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "26px 40px",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },

  cta: {
    background: "#F5C542",
    color: "#111111",
    padding: "14px 24px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: "15px",
    boxShadow: "0 6px 20px rgba(245,197,66,0.25)",
  },

  hero: {
    padding: "90px 40px 70px",
    maxWidth: "980px",
  },

  eyebrow: {
    color: "#D8A928",
    marginBottom: "14px",
    fontSize: "14px",
    fontWeight: 700,
    letterSpacing: "0.8px",
    textTransform: "uppercase",
  },

  title: {
    fontSize: "56px",
    lineHeight: 1.05,
    margin: "0 0 22px 0",
    fontWeight: 800,
    maxWidth: "900px",
  },

  subtitle: {
    color: "#CCCCCC",
    fontSize: "18px",
    lineHeight: 1.7,
    marginBottom: "34px",
    maxWidth: "760px",
  },

  primaryButton: {
    background: "#F5C542",
    color: "#111111",
    padding: "15px 26px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: 700,
    display: "inline-block",
    boxShadow: "0 6px 20px rgba(245,197,66,0.22)",
  },

  section: {
    padding: "50px 40px 40px",
  },

  sectionTitle: {
    fontSize: "34px",
    marginBottom: "28px",
    fontWeight: 800,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "22px",
  },

  card: {
    background: "rgba(255,255,255,0.03)",
    padding: "26px",
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,0.06)",
    backdropFilter: "blur(4px)",
  },

  cardTitle: {
    margin: "0 0 12px 0",
    fontSize: "22px",
    color: "#FFFFFF",
    fontWeight: 700,
  },

  cardText: {
    margin: 0,
    color: "#D0D0D0",
    lineHeight: 1.7,
    fontSize: "15px",
  },

  contact: {
    padding: "80px 40px 100px",
    textAlign: "center",
  },

  contactTitle: {
    fontSize: "36px",
    marginBottom: "14px",
    fontWeight: 800,
  },

  contactText: {
    color: "#CCCCCC",
    fontSize: "17px",
    marginBottom: "28px",
  },
};