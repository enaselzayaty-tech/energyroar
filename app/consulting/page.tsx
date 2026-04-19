"use client";

export default function ConsultingPage() {
  return (
    <div style={styles.page}>
      <div style={styles.banner}>
        EnergyROAR Consulting Platform — Launching Soon
      </div>

      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <img
            src="/energyroar-logo.png"
            alt="EnergyROAR"
            style={styles.logo}
          />
          <span style={styles.logoText}>EnergyROAR</span>
        </div>

        <a href="mailto:info@energyroar.ca" style={styles.ctaTop}>
          Book a Consultation
        </a>
      </header>

      <section style={styles.hero}>
        <p style={styles.tag}>Strategic Energy & Resource Advisory</p>

        <h1 style={styles.title}>
          Premium consulting for energy, industrial, and resource-sector growth.
        </h1>

        <p style={styles.subtitle}>
          EnergyROAR helps clients navigate market opportunities, project
          strategy, and commercial positioning with clarity and precision.
        </p>

        <a href="mailto:info@energyroar.ca" style={styles.cta}>
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
              Clear, professional presentation and messaging for projects and
              ventures.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Expertise</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Integrated Asset Evaluation</h3>
            <p style={styles.cardText}>
              Technical and commercial review to support confident decision-making.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Field Development Planning</h3>
            <p style={styles.cardText}>
              Strategic development thinking for assets, projects, and operational growth.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Reservoir Modeling</h3>
            <p style={styles.cardText}>
              Reservoir-focused analysis and subsurface interpretation for better planning.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Digital Subsurface Transformation</h3>
            <p style={styles.cardText}>
              Modern digital workflows and analytics support for technical teams.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Energy Transition Strategy</h3>
            <p style={styles.cardText}>
              Advisory on emerging opportunities across changing energy markets.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Low-Carbon Value Creation</h3>
            <p style={styles.cardText}>
              Strategy support for emissions-aware growth and future-facing initiatives.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.contact}>
        <h2 style={styles.contactTitle}>Ready to work together?</h2>

        <p style={styles.contactText}>
          Reach out to discuss your project, opportunity, or consulting needs.
        </p>

        <a href="mailto:info@energyroar.ca" style={styles.cta}>
          Contact EnergyROAR
        </a>
      </section>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    background: "#0a0a0a",
    color: "#ffffff",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },

  banner: {
    background: "linear-gradient(90deg, #f5b942, #d89c10)",
    color: "#111111",
    textAlign: "center",
    padding: "10px 16px",
    fontWeight: 700,
    fontSize: "14px",
    letterSpacing: "0.2px",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "22px 40px",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  logo: {
    height: "55px",
    width: "auto",
    objectFit: "contain",
  },

  logoText: {
    color: "#f5b942",
    fontSize: "28px",
    fontWeight: 800,
    letterSpacing: "0.3px",
  },

  ctaTop: {
    background: "#f5b942",
    color: "#111111",
    textDecoration: "none",
    padding: "12px 18px",
    borderRadius: "10px",
    fontWeight: 700,
    boxShadow: "0 6px 18px rgba(245,185,66,0.25)",
  },

  hero: {
    padding: "80px 40px 60px",
    maxWidth: "1000px",
  },

  tag: {
    color: "#f5b942",
    marginBottom: "18px",
    fontWeight: 700,
    fontSize: "16px",
  },

  title: {
    fontSize: "64px",
    lineHeight: 1.08,
    fontWeight: 800,
    margin: "0 0 22px 0",
    maxWidth: "920px",
  },

  subtitle: {
    color: "#d0d0d0",
    marginBottom: "34px",
    lineHeight: 1.7,
    fontSize: "20px",
    maxWidth: "780px",
  },

  cta: {
    display: "inline-block",
    background: "#f5b942",
    color: "#111111",
    textDecoration: "none",
    padding: "14px 24px",
    borderRadius: "10px",
    fontWeight: 700,
    boxShadow: "0 6px 18px rgba(245,185,66,0.25)",
  },

  section: {
    padding: "50px 40px",
  },

  sectionTitle: {
    fontSize: "34px",
    marginBottom: "24px",
    fontWeight: 800,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "rgba(255,255,255,0.03)",
    padding: "24px",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.06)",
  },

  cardTitle: {
    fontSize: "22px",
    marginBottom: "12px",
    fontWeight: 700,
  },

  cardText: {
    color: "#d0d0d0",
    lineHeight: 1.7,
    fontSize: "15px",
    margin: 0,
  },

  contact: {
    padding: "80px 40px 100px",
    textAlign: "center",
  },

  contactTitle: {
    fontSize: "38px",
    marginBottom: "14px",
    fontWeight: 800,
  },

  contactText: {
    color: "#d0d0d0",
    marginBottom: "24px",
    fontSize: "18px",
  },
};