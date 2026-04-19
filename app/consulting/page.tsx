"use client";

export default function ConsultingPage() {
  return (
    <div style={styles.page}>
      
      {/* 🔶 UNDER CONSTRUCTION */}
      <div style={styles.banner}>
        EnergyROAR Consulting Platform — Launching Soon
      </div>

      {/* 🔥 HEADER */}
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <img src="/energyroar-logo.png" style={styles.logo} />
          <span style={styles.logoText}>EnergyROAR</span>
        </div>

        <button style={styles.ctaTop}>Book a Consultation</button>
      </header>

      {/* 🔥 HERO */}
      <section style={styles.hero}>
        <p style={styles.tag}>
          Strategic Energy & Resource Advisory
        </p>

        <h1 style={styles.title}>
          Premium consulting for energy,
          industrial, and resource-sector growth.
        </h1>

        <p style={styles.subtitle}>
          EnergyROAR helps clients navigate market opportunities,
          project strategy, and commercial positioning with clarity
          and precision.
        </p>

        <button style={styles.cta}>Book a Consultation</button>
      </section>

      {/* 🔥 SERVICES */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Services</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Strategic Advisory</h3>
            <p>
              High-level guidance for companies evaluating growth
              opportunities and market positioning.
            </p>
          </div>

          <div style={styles.card}>
            <h3>Energy Consulting</h3>
            <p>
              Advisory across energy and industrial sectors with
              a focus on execution and value creation.
            </p>
          </div>

          <div style={styles.card}>
            <h3>Project Positioning</h3>
            <p>
              Clear, professional presentation and messaging
              for projects and ventures.
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
          <div style={styles.card}>Reservoir Modeling</div>
          <div style={styles.card}>Digital Subsurface Transformation</div>
          <div style={styles.card}>Energy Transition Strategy</div>
          <div style={styles.card}>Low-Carbon Value Creation</div>
        </div>
      </section>

      {/* 🔥 CONTACT */}
      <section style={styles.contact}>
        <h2>Ready to work together?</h2>

        <p>
          Reach out to discuss your project, opportunity, or
          consulting needs.
        </p>

        <a href="mailto:info@energyroar.ca" style={styles.email}>
          info@energyroar.ca
        </a>
      </section>
    </div>
  );
}

const styles = {
  page: {
    background: "#0a0a0a",
    color: "white",
    minHeight: "100vh",
    fontFamily: "sans-serif",
  },

  banner: {
    background: "#f5b942",
    color: "black",
    textAlign: "center",
    padding: "8px",
    fontWeight: "600",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  logo: {
    height: "40px",
  },

  logoText: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#f5b942",
  },

  ctaTop: {
    background: "#f5b942",
    border: "none",
    padding: "10px 16px",
    borderRadius: "6px",
    fontWeight: "600",
  },

  hero: {
    padding: "80px 40px",
    maxWidth: "900px",
  },

  tag: {
    color: "#f5b942",
    marginBottom: "10px",
  },

  title: {
    fontSize: "48px",
    fontWeight: "800",
    marginBottom: "20px",
  },

  subtitle: {
    color: "#ccc",
    marginBottom: "30px",
  },

  cta: {
    background: "#f5b942",
    border: "none",
    padding: "12px 20px",
    borderRadius: "6px",
    fontWeight: "600",
  },

  section: {
    padding: "60px 40px",
  },

  sectionTitle: {
    fontSize: "28px",
    marginBottom: "30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "#111",
    padding: "20px",
    borderRadius: "10px",
    border: "1px solid #222",
  },

  contact: {
    padding: "80px 40px",
    textAlign: "center",
  },

  email: {
    color: "#f5b942",
    display: "block",
    marginTop: "10px",
  },
};