"use client";

import React from "react";

export default function ConsultingPage() {
  return (
    <main style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>EnergyROAR</div>

        <a href="mailto:info@energyroar.ca" style={styles.cta}>
          Book a Consultation
        </a>
      </header>

      {/* Hero */}
      <section style={styles.hero}>
        <p style={styles.eyebrow}>Strategic Energy & Resource Advisory</p>

        <h1 style={styles.title}>
          Premium consulting for energy, industrial, and resource-sector
          growth.
        </h1>

        <p style={styles.subtitle}>
          EnergyROAR helps clients navigate market opportunities, project
          strategy, and commercial positioning with clarity and precision.
        </p>

        <a href="mailto:info@energyroar.ca" style={styles.primaryButton}>
          Book a Consultation
        </a>
      </section>

      {/* Services */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Services</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Strategic Advisory</h3>
            <p>
              High-level guidance for companies evaluating growth opportunities
              and market positioning.
            </p>
          </div>

          <div style={styles.card}>
            <h3>Energy Consulting</h3>
            <p>
              Advisory across energy and industrial sectors with a focus on
              execution and value creation.
            </p>
          </div>

          <div style={styles.card}>
            <h3>Project Positioning</h3>
            <p>
              Clear, professional presentation and messaging for projects and
              ventures.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section style={styles.contact}>
        <h2>Ready to work together?</h2>

        <p>
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
    color: "#fff",
    fontFamily: "sans-serif",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 40px",
  },

  logo: {
    fontSize: "22px",
    fontWeight: 700,
    color: "#D4AF37",
  },

  cta: {
    background: "#D4AF37",
    color: "#000",
    padding: "12px 22px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: 600,
  },

  hero: {
    padding: "80px 40px",
    maxWidth: "900px",
  },

  eyebrow: {
    color: "#D4AF37",
    marginBottom: "10px",
    fontSize: "14px",
    letterSpacing: "1px",
  },

  title: {
    fontSize: "48px",
    lineHeight: 1.1,
    marginBottom: "20px",
  },

  subtitle: {
    color: "#ccc",
    fontSize: "18px",
    marginBottom: "30px",
  },

  primaryButton: {
    background: "#D4AF37",
    color: "#000",
    padding: "14px 24px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: 600,
    display: "inline-block",
  },

  section: {
    padding: "60px 40px",
  },

  sectionTitle: {
    fontSize: "32px",
    marginBottom: "30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "#111",
    padding: "24px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.05)",
  },

  contact: {
    padding: "80px 40px",
    textAlign: "center",
  },
};