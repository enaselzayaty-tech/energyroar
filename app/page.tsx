"use client";

export default function HomePage() {
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
          High-impact consulting for energy, industrial, and resource-sector
          strategy.
        </h1>

        <p style={styles.subtitle}>
          EnergyROAR advises operators, investors, and technical teams on market
          positioning, project development, subsurface strategy, and
          value-focused decision-making across complex energy and resource
          opportunities.
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
              Executive-level guidance for clients evaluating growth pathways,
              portfolio direction, market positioning, and investment-facing
              opportunities.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Energy Consulting</h3>
            <p style={styles.cardText}>
              Technical-commercial advisory across energy and industrial sectors
              with a focus on clarity, execution, and long-term value creation.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Project Positioning</h3>
            <p style={styles.cardText}>
              Clear strategic messaging, presentation support, and market-facing
              positioning for projects, ventures, and business development
              initiatives.
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
              Technical and commercial framing to support more confident
              development and capital decisions.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Field Development Planning</h3>
            <p style={styles.cardText}>
              Structured development thinking for complex projects, assets, and
              staged growth opportunities.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Reservoir & Subsurface Strategy</h3>
            <p style={styles.cardText}>
              Reservoir-focused interpretation and subsurface-informed planning
              for technically demanding opportunities.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Digital Subsurface Transformation</h3>
            <p style={styles.cardText}>
              Modern workflows, analytics support, and digital structure for
              teams seeking sharper technical execution.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Energy Transition Strategy</h3>
            <p style={styles.cardText}>
              Advisory on strategic positioning across evolving energy markets
              and transition-linked opportunities.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Low-Carbon Value Creation</h3>
            <p style={styles.cardText}>
              Strategic support for emissions-aware growth, future-facing
              initiatives, and commercially grounded low-carbon pathways.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.contact}>
        <h2 style={styles.contactTitle}>Ready to work together?</h2>

        <p style={styles.contactText}>
          Reach out to discuss a project, opportunity, or strategic advisory
          need.
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
    padding: "28px 48px",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  logo: {
    height: "64px",
    width: "auto",
    objectFit: "contain",
  },

  logoText: {
    color: "#f5b942",
    fontSize: "30px",
    fontWeight: 800,
    letterSpacing: "0.2px",
  },

  ctaTop: {
    background: "#f5b942",
    color: "#111111",
    textDecoration: "none",
    padding: "13px 20px",
    borderRadius: "12px",
    fontWeight: 700,
    fontSize: "15px",
    boxShadow: "0 8px 24px rgba(245,185,66,0.22)",
  },

  hero: {
    padding: "96px 48px 72px",
    maxWidth: "980px",
  },

  tag: {
    color: "#d8a928",
    marginBottom: "18px",
    fontWeight: 700,
    fontSize: "15px",
    letterSpacing: "0.8px",
    textTransform: "uppercase",
  },

  title: {
    fontSize: "56px",
    lineHeight: 1.06,
    fontWeight: 800,
    margin: "0 0 24px 0",
    maxWidth: "900px",
    letterSpacing: "-1.2px",
  },

  subtitle: {
    color: "#cfcfcf",
    marginBottom: "34px",
    lineHeight: 1.75,
    fontSize: "19px",
    maxWidth: "760px",
  },

  cta: {
    display: "inline-block",
    background: "#f5b942",
    color: "#111111",
    textDecoration: "none",
    padding: "15px 26px",
    borderRadius: "12px",
    fontWeight: 700,
    fontSize: "15px",
    boxShadow: "0 8px 24px rgba(245,185,66,0.22)",
  },

  section: {
    padding: "56px 48px",
  },

  sectionTitle: {
    fontSize: "34px",
    marginBottom: "24px",
    fontWeight: 800,
    letterSpacing: "-0.4px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "22px",
  },

  card: {
    background: "rgba(255,255,255,0.03)",
    padding: "26px",
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,0.06)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
  },

  cardTitle: {
    fontSize: "22px",
    marginBottom: "12px",
    fontWeight: 700,
    letterSpacing: "-0.2px",
  },

  cardText: {
    color: "#d0d0d0",
    lineHeight: 1.75,
    fontSize: "15px",
    margin: 0,
  },

  contact: {
    padding: "88px 48px 110px",
    textAlign: "center",
  },

  contactTitle: {
    fontSize: "40px",
    marginBottom: "14px",
    fontWeight: 800,
    letterSpacing: "-0.5px",
  },

  contactText: {
    color: "#d0d0d0",
    marginBottom: "24px",
    fontSize: "18px",
    lineHeight: 1.7,
  },
};