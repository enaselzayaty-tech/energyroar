"use client";

export default function ConsultingPage() {
  return (
    <main style={styles.page}>

      {/* Banner */}
      <div style={styles.banner}>
        🚧 EnergyROAR Consulting Platform — Launching Soon
      </div>

      {/* Header */}
      <header style={styles.header}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <img
            src="/energyroar-logo.png"
            alt="EnergyROAR"
            style={{ width: "52px" }}
          />

          <div style={styles.logoText}>EnergyROAR</div>
        </div>

        <a href="mailto:info@energyroar.ca" style={styles.cta}>
          Book a Consultation
        </a>
      </header>

      {/* Hero */}
      <section style={styles.hero}>
        <p style={styles.eyebrow}>Strategic Energy & Resource Advisory</p>

        <h1 style={styles.title}>
          Premium consulting for energy, industrial, and resource-sector growth.
        </h1>

        <p style={styles.subtitle}>
          EnergyROAR helps clients navigate market opportunities, project strategy,
          and commercial positioning with clarity and precision.
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
            <h3 style={styles.cardTitle}>Strategic Advisory</h3>
            <p style={styles.cardText}>
              High-level guidance for companies evaluating growth opportunities and market positioning.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Energy Consulting</h3>
            <p style={styles.cardText}>
              Advisory across energy and industrial sectors with focus on execution and value creation.
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

      {/* Expertise */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Expertise</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Subsurface & Reservoir</h3>
            <p style={styles.cardText}>
              Reservoir evaluation, field development planning, and subsurface interpretation.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Energy Strategy</h3>
            <p style={styles.cardText}>
              Market positioning, asset strategy, and energy transition advisory.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Digital & Analytics</h3>
            <p style={styles.cardText}>
              Data-driven workflows, modeling, and decision support systems.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Low-Carbon Solutions</h3>
            <p style={styles.cardText}>
              Carbon strategy, emissions reduction, and sustainable value creation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
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

const styles: { [key: string]: any } = {
  page: {
    minHeight: "100vh",
    background: "#050505",
    color: "#FFFFFF",
    fontFamily: "Inter, sans-serif",
  },

  banner: {
    width: "100%",
    padding: "12px",
    textAlign: "center",
    background: "linear-gradient(90deg, #F5C542, #D39B17)",
    color: "#111",
    fontWeight: 700,
    fontSize: "14px",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "26px 40px",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },

  logoText: {
    fontWeight: 800,
    fontSize: "22px",
    color: "#F5C542",
  },

  cta: {
    background: "#F5C542",
    color: "#111",
    padding: "12px 20px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: 700,
  },

  hero: {
    padding: "80px 40px",
    maxWidth: "900px",
  },

  eyebrow: {
    color: "#D8A928",
    marginBottom: "10px",
    fontWeight: 700,
  },

  title: {
    fontSize: "52px",
    fontWeight: 800,
    marginBottom: "20px",
  },

  subtitle: {
    color: "#CCC",
    marginBottom: "30px",
    lineHeight: 1.6,
  },

  primaryButton: {
    background: "#F5C542",
    color: "#111",
    padding: "14px 24px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: 700,
  },

  section: {
    padding: "50px 40px",
  },

  sectionTitle: {
    fontSize: "30px",
    marginBottom: "20px",
    fontWeight: 800,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "rgba(255,255,255,0.03)",
    padding: "20px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.06)",
  },

  cardTitle: {
    fontSize: "20px",
    marginBottom: "10px",
  },

  cardText: {
    color: "#CCC",
  },

  contact: {
    padding: "80px 40px",
    textAlign: "center",
  },

  contactTitle: {
    fontSize: "34px",
    marginBottom: "10px",
    fontWeight: 800,
  },

  contactText: {
    color: "#CCC",
    marginBottom: "20px",
  },
};