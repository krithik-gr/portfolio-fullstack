import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaPython, FaReact, FaDatabase, FaNodeJs, FaGithub, FaLinkedin,
  FaEnvelope, FaJava, FaHtml5, FaCss3Alt, FaJs, FaArrowUp, FaDownload
} from "react-icons/fa";
import { SiDjango, SiOpenai } from "react-icons/si";

export default function Home() {
  const [activeTab, setActiveTab] = useState("profile");
  const profileRef = useRef(null);
  const techRef = useRef(null);
  const enquiryRef = useRef(null);
  const instructionRef = useRef(null);

  // New Refs
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const extraRef = useRef(null);

  // Scroll-to-top visibility
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animated background effect
  useEffect(() => {
    const bg = document.getElementById("animated-bg");
    document.addEventListener("mousemove", (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      if (bg) bg.style.backgroundPosition = `${x * 50}px ${y * 50}px`;
    });
  }, []);

  const techStack = [
    { icon: <FaPython color="#3776AB" />, name: "Python" },
    { icon: <FaReact color="#61DBFB" />, name: "React" },
    { icon: <FaNodeJs color="#68A063" />, name: "Node.js" },
    { icon: <SiDjango color="#092E20" />, name: "Django" },
    { icon: <FaJava color="#f89820" />, name: "Java" },
    { icon: <SiOpenai color="#412991" />, name: "LLM" },
    { icon: <FaDatabase color="#00618A" />, name: "SQL" },
    { icon: <FaGithub color="#333" />, name: "GitHub" },
    { icon: <FaHtml5 color="#E34F26" />, name: "HTML" },
    { icon: <FaCss3Alt color="#1572B6" />, name: "CSS" },
    { icon: <FaJs color="#F7DF1E" />, name: "JavaScript" },
  ];

  const scrollToRef = (ref, tab) => {
    setActiveTab(tab);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: "#4a0035", backgroundColor: "#fff9c4" }}>
      {/* Tabs Navigation */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "sticky",
          top: 0,
          background: "rgba(255, 248, 220, 0.95)",
          padding: "12px 20px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          zIndex: 50,
          boxShadow: "0 4px 10px rgba(255,0,128,0.2)",
          flexWrap: "wrap",
        }}
      >
        {[
          { label: "Profile", ref: profileRef, key: "profile" },
          { label: "About", ref: aboutRef, key: "about" },
          { label: "Projects", ref: projectsRef, key: "projects" },
          { label: "Experience", ref: experienceRef, key: "experience" },
          { label: "Extra Activities", ref: extraRef, key: "extra" },
          { label: "Tech Stack", ref: techRef, key: "tech" },
          { label: "Enquiry", ref: enquiryRef, key: "enquiry" },
          { label: "Instructions", ref: instructionRef, key: "instruction" },
        ].map((t) => (
          <motion.button
            whileHover={{ scale: 1.1 }}
            key={t.key}
            onClick={() => scrollToRef(t.ref, t.key)}
            style={{
              padding: "8px 16px",
              borderRadius: "20px",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              background:
                activeTab === t.key
                  ? "linear-gradient(45deg,#ff0080,#ff8c00)"
                  : "transparent",
              color: activeTab === t.key ? "#fff" : "#4a0035",
              fontFamily: "'Orbitron', sans-serif",
              transition: "0.3s",
            }}
          >
            {t.label}
          </motion.button>
        ))}

        {/* Resume Download Button */}
        <a
          href="/Krithik_GR_Resume.pdf"
          download="Krithik_GR_Resume.pdf"
          style={{
            marginLeft: "20px",
            padding: "8px 16px",
            borderRadius: "20px",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
            background: "linear-gradient(45deg,#ff0080,#ff8c00)",
            color: "#fff",
            fontFamily: "'Orbitron', sans-serif",
            textDecoration: "none",
          }}
        >
          <FaDownload style={{ marginRight: 6 }} /> Resume
        </a>
      </motion.div>

      {/* Profile Section */}
      <section
        ref={profileRef}
        id="animated-bg"
        style={{
          padding: "80px 20px",
          textAlign: "center",
          backgroundImage:
            "url('https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          position: "relative",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.6)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: "relative", zIndex: 2 }}
        >
         <h1
  style={{
    fontSize: 56,
    fontWeight: 900,
    fontFamily: "'Orbitron', sans-serif",
    color: "linear-gradient(90deg, #ff0080, #ffcc70)",
    background: "linear-gradient(90deg, #ff0080, #ffcc70)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    position: "relative",
    display: "inline-block",
    overflow: "hidden",
    whiteSpace: "nowrap",
    animation: "typing 3.5s steps(25, end) 1, fadeIn 1s ease-in forwards",
  }}
>
  Hi, I'm Krithik GR
</h1>

<style>
{`
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }
`}
</style>

          <p style={{ maxWidth: 700, margin: "20px auto", lineHeight: 1.7 }}>
            Enthusiastic and results-driven developer specialized in AI/ML,
            Python, Django, React, Node.js and full-stack solutions.
          </p>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        ref={aboutRef}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 20px", maxWidth: 900, margin: "auto" }}
      >
        <h2
  style={{
    fontSize: 32,
    fontWeight: 800,
    marginBottom: 20,
    fontFamily: "'Orbitron', sans-serif",
    color: "#ff0080",
  }}
>
  About & Education
</h2>

{/* About Section */}
<p style={{ lineHeight: 1.8, marginBottom: 20 }}>
  👨‍💻 Passionate and motivated <b>Software Developer</b> with hands-on experience in
  <b> Python, Django, React, Node.js, and SQL</b>. Skilled in AI/ML and
  data analysis, with internship experience in both software development
  and analytics. Enthusiastic about building scalable applications,
  exploring emerging technologies, and solving real-world problems through
  innovation.
</p>

{/* Education Section */}
<div style={{ lineHeight: 1.8 }}>
  <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 10, color: "#333" }}>
    Education
  </h3>

  <div style={{ marginBottom: 12 }}>
    🎓 <b>Marian College Kuttikkanam (Autonomous)</b> <br />
    MCA – Master of Computer Application 
    <span style={{ float: "right", color: "#555" }}>2023 – 2025</span> <br />
    <span style={{ color: "#666" }}>SGPA: 82%</span>
  </div>

  <div style={{ marginBottom: 12 }}>
    🎓 <b>St. George’s College, Aruvithura</b> <br />
    BCA – Bachelor of Computer Application 
    <span style={{ float: "right", color: "#555" }}>2020 – 2023</span> <br />
    <span style={{ color: "#666" }}>Percentage: 67%</span>
  </div>

  <div style={{ marginBottom: 12 }}>
    🎓 <b>St. Mary’s HSS, Vellaramkunnu</b> <br />
    Plus Two – Science Stream 
    <span style={{ float: "right", color: "#555" }}>2018 – 2020</span> <br />
    <span style={{ color: "#666" }}>Percentage: 80%</span>
  </div>
</div>

      </motion.section>

      {/* Projects Section */}
      <motion.section
        ref={projectsRef}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 20px", maxWidth: 900, margin: "auto" }}
      >
        <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 20, fontFamily: "'Orbitron', sans-serif", color: "#ff0080" }}>Projects</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>🛒 Skullcandy E-commerce Website using Django</li>
          <li>🛒 Medicine Recommandation Systems</li>
          <li>🛒 Event Management System</li>
          <li>📊 AI Resume Analyzer with Streamlit & NLP</li>
          <li>🗣️ Real-Time Chat App with React + Node.js</li>
          <li>📷 OpenCv-Face Detection</li>
          <li>🎙️ Elevenlabs Clone</li>
          <li>💬 Pillowtalk</li>
          <li>🏠 Rentosmart</li>
          <li>🧪 Koseapp Testing</li>
        </ul>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        ref={experienceRef}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 20px", maxWidth: 900, margin: "auto" }}
      >
<h2
  style={{
    fontSize: 32,
    fontWeight: 800,
    marginBottom: 20,
    fontFamily: "'Orbitron', sans-serif",
    color: "#ff0080",
  }}
>
  Experience
</h2>

<p style={{ lineHeight: 1.8 }}>
  💼 <b>Data Analyst Intern</b> — SBL Knowledge Services, Trivandrum 
  <span style={{ color: "#555", fontStyle: "italic" }}> (Dec 2024 – Feb 2025)</span>
  <br />
  • Analyzed and interpreted large datasets to extract actionable insights. <br />
  • Performed data cleaning, preprocessing, and visualization to support
    business decision-making. <br />
  • Worked with <b>Excel, SQL Databases, and Power BI</b> for reporting
    and analysis. <br />
  • Designed and developed interactive dashboards in <b>Power BI</b>,
    enabling real-time monitoring of key business metrics. <br />
  • Collaborated with cross-functional teams to streamline data workflows
    and improve reporting efficiency. <br />
  <br />

  💼 <b>AI Software Developer Intern</b> — QF Innovate, Kakkanad, Kochi 
  <span style={{ color: "#555", fontStyle: "italic" }}> (6 Months)</span>
  <br />
  • Currently contributing to projects like <b>Rentosmart</b>, 
    <b>Pillowtalk</b>, and <b>KOSEAPP Testing</b>. <br />
  • Successfully completed <b>ElevenLabs AI Voice Interaction</b> project 
    using Python (backend) and React (frontend clone). <br />
  • Developed and deployed <b>AI-powered features</b> integrating NLP,
    speech-to-text, and chatbot functionalities. <br />
  • Conducted <b>API testing and validation</b> using <b>Postman</b> and 
    <b>Swagger</b> to ensure smooth integration and functionality across 
    services. <br />
  • Collaborated in an agile environment, contributing to full-stack 
    development and debugging processes. <br />
</p>

      </motion.section>

      {/* Extra Activities Section */}
      <motion.section
        ref={extraRef}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 20px", maxWidth: 900, margin: "auto" }}
      >
        <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 20, fontFamily: "'Orbitron', sans-serif", color: "#ff0080" }}>Extra Activities</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>💻 Coding</li>
          <li>🏏 Playing cricket</li>
          <li>🖼️ Photo editing</li>
          <li>📱 Mobile photography</li>
        </ul>
      </motion.section>

      {/* Tech Stack */}
      <section ref={techRef} style={{ padding: "60px 20px", maxWidth: 1000, margin: "auto" }}>
        <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 20, fontFamily: "'Orbitron', sans-serif", color: "#ff0080" }}>Tech Stack</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))", gap: 20 }}>
          {techStack.map((t) => (
            <motion.div
              key={t.name}
              whileHover={{ scale: 1.08, rotate: 2 }}
              style={{
                textAlign: "center",
                padding: "18px",
                borderRadius: "14px",
                background: "white",
                boxShadow: "0 8px 16px rgba(255,0,128,0.2)",
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 8 }}>{t.icon}</div>
              <div style={{ fontWeight: 600 }}>{t.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enquiry Section */}
      <section ref={enquiryRef} style={{ padding: "70px 20px", maxWidth: 700, margin: "auto" }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16, fontFamily: "'Orbitron', sans-serif", color: "#ff0080" }}>
          Enquiry Form
        </h2>
        <form
          style={{ display: "grid", gap: 16, background: "white", padding: 24, borderRadius: 16, boxShadow: "0 8px 18px rgba(255,0,128,0.2)" }}
          method="POST"
          action="http://localhost:5000/send-email"
        >
          <input name="name" placeholder="Your Name" required
            style={{ padding: "12px", borderRadius: 10, border: "1px solid #ccc" }} />
          <input type="email" name="email" placeholder="Email" required
            style={{ padding: "12px", borderRadius: 10, border: "1px solid #ccc" }} />
          <textarea name="message" placeholder="Message..." required
            style={{ padding: "12px", borderRadius: 10, border: "1px solid #ccc", minHeight: 120 }} />
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            style={{
              padding: "14px",
              borderRadius: 12,
              border: "none",
              background: "linear-gradient(45deg,#ff0080,#ff8c00)",
              color: "white",
              fontWeight: 700,
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            Send Enquiry
          </motion.button>
        </form>
      </section>
{/* Footer Section */}
<footer
  style={{
    marginTop: 60,
    padding: "40px 20px",
    background: "#111",
    color: "#fff",
    textAlign: "center",
    borderTop: "4px solid #ff0080",
  }}
>
  <h3
    style={{
      fontFamily: "'Orbitron', sans-serif",
      fontSize: 22,
      fontWeight: 700,
      marginBottom: 10,
    }}
  >
    Krithik GR
  </h3>
  <p style={{ margin: "6px 0", fontSize: 16 }}>Software Developer</p>
  <p style={{ margin: "6px 0", fontSize: 14, color: "#ccc" }}>
    📍 Idukki, Kerala
  </p>

  {/* Social Links */}
  <div style={{ marginTop: 16, display: "flex", justifyContent: "center", gap: 20 }}>
    {/* Email */}
    <a
      href="mailto:krithikgr323@gmail.com"
      style={{ color: "#ff8c00", fontSize: 20, textDecoration: "none" }}
    >
      📧
    </a>
    {/* LinkedIn */}
    <a
      href="http://linkedin.com/in/krithik-gr-631376247"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#0a66c2", fontSize: 20, textDecoration: "none" }}
    >
      🔗
    </a>
    {/* GitHub */}
    <a
      href="https://github.com/kr-zxz"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#fff", fontSize: 20, textDecoration: "none" }}
    >
      🐙
    </a>
  </div>

  {/* Bottom Text */}
  <p style={{ marginTop: 20, fontSize: 12, color: "#888" }}>
    © {new Date().getFullYear()} Krithik GR. All Rights Reserved.
  </p>
</footer>

      {/* Scroll-to-Top Button */}
      {showScroll && (
        <motion.button
          whileHover={{ scale: 1.2, rotate: 10 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            background: "linear-gradient(45deg,#ff0080,#ff8c00)",
            border: "none",
            borderRadius: "50%",
            padding: "14px",
            cursor: "pointer",
            boxShadow: "0 6px 12px rgba(255,0,128,0.4)",
            color: "white",
            fontSize: 20,
            zIndex: 100,
          }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </div>
  );
}
