"use client";

export default function ConsultingPage() {
  return (
    <div style={styles.page}>
      
      {/* 🔶 LAUNCHING SOON BANNER */}
      <div style={styles.banner}>
        EnergyROAR Advisory — Launching Soon
      </div>

      {/* 🔥 HEADER */}
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <img src="/energyroar-logo.png" style={styles.logo} />
          <span style={styles.logoText}>EnergyROAR</span>
        </div>

        <a href="mailto:info@energyroar.ca" style={styles.ctaTop}>
          Contact
        </a>
      </header>

      {/* 🔥 HERO */}
      <section style={styles.hero}>
        <p style={styles.tag}>Strategic Energy & Resource Advisory</p>

        <h1 style={styles.title}>
          High-impact consulting for energy, industrial, and resource-sector strategy.
        </h1>

        <p style={styles.subtitle}>
          EnergyROAR advises operators, investors, and technical teams on market positioning,
          project development, subsurface strategy, and value-focused decision-making across
          complex energy and resource opportunities.
        </p>

        <a href="mailto:info@energyroar.ca" style={styles.cta}>
          Request Advisory
        </a>
      </section>

      {/* 🔥 WHO WE ADVISE */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Who We Advise</h2>

        <div style={styles.grid}>
          <div style={styles.card}>Operators</div>
          <div style={styles.card}>Investors</div>
          <div style={styles.card}>Project Developers</div>
          <div style={styles.card}>Technical Teams</div>
        </div>
      </section>

      {/* 🔥 SERVICES */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Services</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Strategic Advisory</h3>
            <p style={styles.cardText}>
              Executive-level guidance on growth pathways, portfolio direction, and market positioning.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Project Development Support</h3>
            <p style={styles.cardText}>
              Structured thinking for complex projects, staged developments, and capital-aligned decisions.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Technical-Commercial Positioning</h3>
            <p style={styles.cardText}>
              Clear framing of technical assets for stakeholders, partners, and investment discussions.
            </p>
          </div>
        </div>
      </section>

      {/* 🔥 EXPERTISE */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Expertise</h2>

        <div style={styles.grid}>
          <div style={styles.card}>Integrated Asset Evaluation</div>
          <div style={styles.card}>Field Development Planning</div>
          <div style={styles.card}>Reservoir & Subsurface Strategy</div>
          <div style={styles.card}>Digital Subsurface Workflows</div>
          <div style={styles.card}>Energy Transition Strategy</div>
          <div style={styles.card}>Low-Carbon Value Creation</div>
        </div>
      </section>

      {/* 🔥 CONTACT */}
      <section style={styles.contact}>
        <h2 style={styles.contactTitle}>Discuss an opportunity</h2>

        <p style={styles.contactText}>
          Reach out to explore a project, partnership, or strategic advisory engagement.
        </p>

        <a href="mailto:info@energyroar.ca" style={styles.cta}>
          Contact EnergyROAR
        </a>
      </section>

    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0a0a0a",
    color: "#ffffff",
    fontFamily: "Inter, sans-serif",
  },

  banner: {
    textAlign: "center",
    padding: "8px",
    fontSize: "13px",
    color: "#d8a928",
    letterSpacing: "0.6px",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 56px",
    borderBottom: "1px solid rgba(255,255,255,0.04)",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  logo: {
    height: "56px",
  },

  logoText: {
    fontSize: "28px",
    fontWeight: 800,
    color: "#f5b942",
  },

  ctaTop: {
    padding: "10px 16px",
    borderRadius: "10px",
    background: "#f5b942",
    color: "#111",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: "14px",
  },

  hero: {
    padding: "110px 56px 70px",
    maxWidth: "900px",
  },

  tag: {
    color: "#d8a928",
    marginBottom: "16px",
    fontSize: "14px",
    textTransform: "uppercase",
    letterSpacing: "0.8px",
  },

  title: {
    fontSize: "52px",
    fontWeight: 800,
    lineHeight: 1.08,
    marginBottom: "22px",
  },

  subtitle: {
    color: "#cfcfcf",
    fontSize: "18px",
    lineHeight: 1.7,
    marginBottom: "32px",
    maxWidth: "720px",
  },

  cta: {
    background: "#f5b942",
    color: "#111",
    padding: "14px 24px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: 700,
  },

  section: {
    padding: "60px 56px",
  },

  sectionTitle: {
    fontSize: "30px",
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
    padding: "22px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.05)",
  },

  cardTitle: {
    marginBottom: "10px",
    fontWeight: 700,
  },

  cardText: {
    color: "#ccc",
    lineHeight: 1.6,
  },

  contact: {
    padding: "100px 56px",
    textAlign: "center",
  },

  contactTitle: {
    fontSize: "36px",
    marginBottom: "14px",
    fontWeight: 800,
  },

  contactText: {
    color: "#ccc",
    marginBottom: "24px",
  },
};