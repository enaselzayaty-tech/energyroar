"use client";

export default function ConsultingPage() {
  return (
    <div style={styles.page}>
      <div style={styles.banner}>
        EnergyROAR Advisory — Launching Soon
      </div>

      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <img
            src="/energyroar-logo.png"
            alt="EnergyROAR"
            style={styles.logo}
          />
          <div style={styles.logoText}>EnergyROAR</div>
        </div>

        <a href="mailto:info@energyroar.ca" style={styles.topButton}>
          Contact
        </a>
      </header>

      <section style={styles.hero}>
        <p style={styles.eyebrow}>
          Strategic Energy & Resource Advisory
        </p>

        <h1 style={styles.title}>
          High-impact consulting for energy, industrial, and resource-sector strategy.
        </h1>

        <p style={styles.subtitle}>
          EnergyROAR advises operators, investors, and technical teams on market positioning,
          project development, subsurface strategy, and value-focused decision-making.
        </p>

        <a href="mailto:info@energyroar.ca" style={styles.primaryButton}>
          Request Advisory
        </a>
      </section>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#070707",
    color: "#ffffff",
    fontFamily: "system-ui, sans-serif",
  },

  banner: {
    textAlign: "center",
    padding: "10px",
    background: "#f5b942",
    color: "#111",
    fontWeight: "bold",
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
    height: "50px",
  },

  logoText: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#f5b942",
  },

  topButton: {
    background: "#f5b942",
    color: "#111",
    padding: "10px 16px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "bold",
  },

  hero: {
    padding: "100px 40px",
    maxWidth: "800px",
  },

  eyebrow: {
    color: "#f5b942",
    fontSize: "12px",
    textTransform: "uppercase",
    marginBottom: "10px",
  },

  title: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
  },

  subtitle: {
    fontSize: "18px",
    color: "#ccc",
    marginBottom: "30px",
  },

  primaryButton: {
    background: "#f5b942",
    color: "#111",
    padding: "12px 20px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};