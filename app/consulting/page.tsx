"use client";

export default function ConsultingPage() {
  return (
    <div style={styles.page}>
      <div style={styles.banner}>EnergyROAR Advisory | Launching Soon</div>

      <header style={styles.header}>
        <div style={styles.logoWrap}>
          <img
            src="/energyroar-logo.png"
            alt="EnergyROAR"
            style={styles.logo}
          />
          <div style={styles.logoText}>EnergyROAR</div>
        </div>

        <a href="mailto:info@energyroar.ca" style={styles.contactBtn}>
          Contact
        </a>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroTextWrap}>
          <p style={styles.kicker}>Strategic Energy & Resource Advisory</p>

          <h1 style={styles.heroTitle}>
            Strategic advisory for complex energy, industrial, and capital decisions.
          </h1>

          <p style={styles.heroText}>
            EnergyROAR supports operators, investors, and technical teams with
            high-impact advisory across project development, subsurface strategy,
            drilling-informed insight, and commercially grounded execution.
          </p>

          <div style={styles.heroButtons}>
            <a href="mailto:info@energyroar.ca" style={styles.primaryBtn}>
              Request Advisory
            </a>
            <a href="#capabilities" style={styles.secondaryBtn}>
              View Capabilities
            </a>
          </div>
        </div>
      </section>

      <section id="capabilities" style={styles.section}>
        <div style={styles.sectionIntro}>
          <p style={styles.kicker}>Capabilities</p>
          <h2 style={styles.sectionTitle}>
            Focused advisory across strategy, development, drilling, and execution.
          </h2>
        </div>

        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Strategic Advisory</h3>
            <p style={styles.cardText}>
              Market positioning, portfolio thinking, opportunity framing, and
              decision support for complex energy and resource opportunities.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Project Development</h3>
            <p style={styles.cardText}>
              Structured support for technically demanding projects requiring
              capital awareness, development clarity, and execution discipline.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Technical & Drilling Advisory</h3>
            <p style={styles.cardText}>
              Field-informed perspective on drilling environments, operational
              constraints, subsurface realities, and technically grounded planning.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Energy Transition Positioning</h3>
            <p style={styles.cardText}>
              Strategic framing of lower-carbon opportunities and evolving energy
              market exposure with practical commercial awareness.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.darkSection}>
        <div style={styles.splitGrid}>
          <div style={styles.panel}>
            <p style={styles.kicker}>Global Exposure</p>
            <h2 style={styles.panelTitle}>
              Grounded perspective shaped by real-world operating environments.
            </h2>
            <p style={styles.panelText}>
              EnergyROAR integrates direct drilling and field exposure across
              multiple regions, bringing practical operational awareness to advisory
              work that involves technical complexity, execution risk, and strategic
              capital decisions.
            </p>

            <div style={styles.regionGrid}>
              <div style={styles.regionPill}>North America</div>
              <div style={styles.regionPill}>Middle East</div>
              <div style={styles.regionPill}>Africa</div>
              <div style={styles.regionPill}>Syria</div>
            </div>
          </div>

          <div style={styles.panel}>
            <p style={styles.kicker}>Positioning</p>
            <h2 style={styles.panelTitle}>
              Technical depth, strategic clarity, practical impact.
            </h2>
            <p style={styles.panelText}>
              We operate as a selective advisory platform for opportunities where
              technical complexity and strategic direction matter equally.
            </p>

            <div style={styles.bulletList}>
              <div style={styles.bulletItem}>Field-tested perspective</div>
              <div style={styles.bulletItem}>Execution-oriented thinking</div>
              <div style={styles.bulletItem}>Commercially grounded advice</div>
              <div style={styles.bulletItem}>High-value decision support</div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.sectionIntro}>
          <p style={styles.kicker}>Industries</p>
          <h2 style={styles.sectionTitle}>
            Built for high-value work across the energy and resource landscape.
          </h2>
        </div>

        <div style={styles.industryGrid}>
          <div style={styles.industryCard}>Oil & Gas</div>
          <div style={styles.industryCard}>Energy Infrastructure</div>
          <div style={styles.industryCard}>Natural Resources</div>
          <div style={styles.industryCard}>Industrial Projects</div>
        </div>
      </section>

      <section style={styles.contactSection}>
        <div style={styles.contactCard}>
          <p style={styles.kicker}>Contact</p>
          <h2 style={styles.contactTitle}>
            Discuss a project, partnership, or advisory requirement.
          </h2>
          <p style={styles.contactText}>
            For consulting inquiries and strategic discussions, contact EnergyROAR directly.
          </p>

          <a href="mailto:info@energyroar.ca" style={styles.primaryBtn}>
            info@energyroar.ca
          </a>
        </div>
      </section>
    </div>
  );
}

const styles: any = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #070707 0%, #0d0d0d 100%)",
    color: "#ffffff",
    fontFamily: "Inter, Arial, sans-serif",
  },

  banner: {
    textAlign: "center",
    background: "#f5b942",
    color: "#111111",
    padding: "10px 16px",
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "0.4px",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "26px 48px",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    background: "rgba(7,7,7,0.88)",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },

  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },

  logo: {
    height: "84px",
    width: "auto",
    objectFit: "contain",
  },

  logoText: {
    fontSize: "34px",
    fontWeight: 800,
    color: "#f5b942",
    letterSpacing: "-0.5px",
  },

  contactBtn: {
    background: "#f5b942",
    color: "#111111",
    textDecoration: "none",
    padding: "12px 22px",
    borderRadius: "999px",
    fontWeight: 700,
    fontSize: "14px",
  },

  hero: {
    padding: "90px 48px 70px",
  },

  heroTextWrap: {
    maxWidth: "980px",
  },

  kicker: {
    color: "#f5b942",
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "1px",
    textTransform: "uppercase",
    marginBottom: "18px",
  },

  heroTitle: {
    fontSize: "72px",
    lineHeight: 1.02,
    fontWeight: 800,
    letterSpacing: "-2px",
    margin: "0 0 22px 0",
    maxWidth: "1100px",
  },

  heroText: {
    fontSize: "21px",
    lineHeight: 1.75,
    color: "#d2d2d2",
    maxWidth: "780px",
    margin: "0 0 34px 0",
  },

  heroButtons: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    display: "inline-block",
    background: "#f5b942",
    color: "#111111",
    textDecoration: "none",
    padding: "15px 24px",
    borderRadius: "999px",
    fontWeight: 700,
    fontSize: "15px",
  },

  secondaryBtn: {
    display: "inline-block",
    background: "transparent",
    color: "#ffffff",
    textDecoration: "none",
    padding: "15px 24px",
    borderRadius: "999px",
    fontWeight: 700,
    fontSize: "15px",
    border: "1px solid rgba(255,255,255,0.15)",
  },

  section: {
    padding: "70px 48px",
  },

  sectionIntro: {
    maxWidth: "860px",
    marginBottom: "28px",
  },

  sectionTitle: {
    fontSize: "42px",
    lineHeight: 1.12,
    fontWeight: 800,
    letterSpacing: "-1px",
    margin: 0,
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "22px",
  },

  card: {
    background: "rgba(255,255,255,0.035)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "20px",
    padding: "30px",
    minHeight: "220px",
  },

  cardTitle: {
    fontSize: "24px",
    fontWeight: 700,
    margin: "0 0 14px 0",
    lineHeight: 1.2,
  },

  cardText: {
    fontSize: "16px",
    lineHeight: 1.8,
    color: "#cfcfcf",
    margin: 0,
  },

  darkSection: {
    padding: "20px 48px 70px",
  },

  splitGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "24px",
  },

  panel: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "24px",
    padding: "34px",
  },

  panelTitle: {
    fontSize: "36px",
    lineHeight: 1.15,
    fontWeight: 800,
    letterSpacing: "-0.8px",
    margin: "0 0 16px 0",
  },

  panelText: {
    fontSize: "17px",
    lineHeight: 1.8,
    color: "#d0d0d0",
    margin: "0 0 24px 0",
  },

  regionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "12px",
  },

  regionPill: {
    background: "#171717",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "14px",
    padding: "14px 16px",
    fontWeight: 600,
    color: "#f1f1f1",
  },

  bulletList: {
    display: "grid",
    gap: "12px",
  },

  bulletItem: {
    background: "#171717",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "14px",
    padding: "14px 16px",
    color: "#f1f1f1",
    fontWeight: 600,
  },

  industryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "18px",
  },

  industryCard: {
    background: "rgba(255,255,255,0.035)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "18px",
    padding: "26px",
    fontSize: "22px",
    fontWeight: 700,
    textAlign: "center",
  },

  contactSection: {
    padding: "20px 48px 100px",
  },

  contactCard: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "26px",
    padding: "40px",
  },

  contactTitle: {
    fontSize: "42px",
    lineHeight: 1.12,
    fontWeight: 800,
    letterSpacing: "-1px",
    margin: "0 0 16px 0",
    maxWidth: "760px",
  },

  contactText: {
    fontSize: "18px",
    lineHeight: 1.8,
    color: "#d0d0d0",
    margin: "0 0 24px 0",
    maxWidth: "720px",
  },
};