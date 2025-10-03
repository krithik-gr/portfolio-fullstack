import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaDatabase,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaArrowUp,
  FaDownload,
  FaMicrophone,
  FaComments,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { SiDjango, SiOpenai } from "react-icons/si";

export default function Home() {
  const [activeTab, setActiveTab] = useState("profile");
  const [showChatbot, setShowChatbot] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [theme, setTheme] = useState("light"); // 'light' | 'dark'

  const profileRef = useRef(null);
  const techRef = useRef(null);
  const enquiryRef = useRef(null);
  const skillsRef = useRef(null);
  const instructionRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const extraRef = useRef(null);

  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // persist theme
  useEffect(() => {
    const saved = localStorage.getItem("site-theme");
    if (saved === "dark" || saved === "light") setTheme(saved);
  }, []);
  useEffect(() => {
    localStorage.setItem("site-theme", theme);
    // apply class on root for easier CSS theming
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const bg = document.getElementById("animated-bg");
    const onMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      if (bg) bg.style.backgroundPosition = `${x * 30}px ${y * 30}px`;
    };
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  const techStack = [
  { icon: <FaPython color="#3776AB" />, name: "Python" },           // Python blue stays
  { icon: <FaReact color="#61DBFB" />, name: "React" },             // React cyan
  { icon: <FaNodeJs color="#68A063" />, name: "Node.js" },          // Node green
  { icon: <SiDjango color="#092E20" />, name: "Django" },           // Django dark green
  { icon: <FaJava color="#f89820" />, name: "Java" },               // Java orange
  { icon: <SiOpenai color="#f43f5e" />, name: "LLM" },              // LLM uses vibrant pink-red
  { icon: <FaDatabase color="#00618A" />, name: "SQL" },            // SQL deep blue
  { icon: <FaGithub color="#333" />, name: "GitHub" },              // GitHub dark gray
  { icon: <FaHtml5 color="#E34F26" />, name: "HTML" },              // HTML orange-red
  { icon: <FaCss3Alt color="#1572B6" />, name: "CSS" },             // CSS blue
  { icon: <FaJs color="#F7DF1E" />, name: "JavaScript" },           // JS yellow
];


  const scrollToRef = (ref, tab) => {
    setActiveTab(tab);
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleRecording = () => {
    setIsRecording((s) => !s);
  };

  const toggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  // Specialization cards with different animation classes
  const specializations = [
    {
      title: "AI & Machine Learning",
      desc: "Building intelligent systems with Python, Scikit-learn, and NLP",
      anim: "grad-1",
    },
    {
      title: "Full-Stack Development",
      desc: "Creating end-to-end applications with React, Django, and Node.js",
      anim: "grad-2",
    },
    {
      title: "Data Analysis",
      desc: "Extracting insights from data using SQL, Power BI, and Python",
      anim: "grad-3",
    },
    {
      title: "API Development",
      desc: "Designing and testing robust APIs with Django and testing tools",
      anim: "grad-4",
    },
  ];

  const projects = [
    {
      title: "Event Sphere",
      img: "https://i.pinimg.com/1200x/ec/a4/01/eca4010222f31b370c0640c81740b20b.jpg",
      desc: "AI-powered Event Management System with booking, chatbot, sentiment analysis, and secure payments using Django, HTML, CSS, Bootstrap.",
    },
    {
      title: "Medicare",
      img: "https://i.pinimg.com/1200x/99/a6/7b/99a67b8c7e26618d052983949408bd12.jpg",
      desc: "Medicine Recommendation System with AI-based suggestions and medical advice, deployed on Django with data visualizations and admin/user modules.",
      link: "http://51.20.32.61:8000",
    },
    {
      title: "Skullcandy E-Commerce",
      img: "https://i.pinimg.com/1200x/a2/4e/d1/a24ed1a9e230248c45b8c30df1319732.jpg",
      desc: "Django-based e-commerce platform for purchasing headphones with admin, user, and supplier modules, including cart, wishlist, and payments.",
    },
    {
      title: "Distance Measurement System",
      img: "https://via.placeholder.com/300x200?text=OpenCV+Distance",
      desc: "OpenCV and Python-based system using webcam to measure real-time distance between objects with facial detection and geometric calculations.",
    },
    {
      title: "Poem Generator",
      img: "https://via.placeholder.com/300x200?text=Poem+Generator",
      desc: "NLP project using Google Gemini API and Streamlit to generate creative poems from user prompts leveraging LLMs.",
    },
    {
      title: "Machine Learning Micro-Projects",
      img: "https://via.placeholder.com/300x200?text=ML+Projects",
      desc: "Implemented Logistic Regression for university admission prediction and Linear Regression for salary prediction using Python, Pandas, NumPy, Scikit-learn, and Streamlit.",
    },
  ];

  return (
    <div
      className="app-root"
      style={{
        fontFamily: "'Inter', 'Poppins', sans-serif",
        color: "var(--text)",
        backgroundColor: "var(--bg)",
        minHeight: "100vh",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      {/* Global styles + themed variables */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&family=Orbitron:wght@600;800&family=Poppins:wght@300;400;600;700&display=swap');

        :root {
          --nav-bg: linear-gradient(180deg,#ffffff,#f6fbff);
          --nav-text: #0b2545;
          --blue-600: #0a66d1;
          --blue-400: #2b9af3;
          --muted: #6b7b8a;
          --card: #ffffff;
          --glass: rgba(10,102,209,0.06);
          --bg: #ffffff;
          --text: #0b2545;
          --panel: #f8fbff;
          --accent: #ff0080;
        }
        /* dark theme variables (applied when html.dark exists) */
        html.dark {
          --nav-bg: linear-gradient(180deg,#031428,#021426);
          --nav-text: #e6eef9;
          --blue-600: #70a8ff;
          --blue-400: #4aa3ff;
          --muted: #9fb0c4;
          --card: #071225;
          --glass: rgba(255,255,255,0.03);
          --bg: #041026;
          --text: #dbefff;
          --panel: linear-gradient(180deg,#041323,#07203a);
          --accent: #ff7ab6;
        }

        /* small helper */
        .sr-only { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); border:0; }

        /* navbar */
        .top-nav {
          position: sticky;
          top: 12px;
          margin: 8px 12px;
          background: var(--nav-bg);
          color: var(--nav-text);
          padding: 10px 14px;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          z-index: 40;
          border-radius: 14px;
          box-shadow: 0 6px 22px rgba(9,30,66,0.06);
          align-items: center;
          flex-wrap: wrap;
        }
        .nav-left { display:flex; gap:12px; align-items:center; }
        .nav-tabs { display:flex; gap:12px; align-items:center; flex-wrap:wrap; }
        .nav-tab {
          padding: 8px 14px;
          border-radius: 22px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          background: transparent;
          color: var(--nav-text);
          font-family: 'Orbitron', sans-serif;
          transition: 0.25s;
        }
        .nav-tab.active {
          background: linear-gradient(90deg,var(--blue-600),var(--blue-400));
          color: white;
          box-shadow: 0 10px 30px rgba(10,102,209,0.12);
        }
        .theme-btn {
          padding:8px 10px;
          border-radius:10px;
          border:none;
          cursor:pointer;
          background: transparent;
          color: var(--nav-text);
          display:flex;
          align-items:center;
          gap:8px;
          font-weight:700;
        }

        /* hero */
        #animated-bg {
          padding: 80px 20px;
          text-align: center;
          background-image: linear-gradient(180deg, rgba(10,102,209,0.04), rgba(10,102,209,0.02));
          background-size: cover;
          position: relative;
          color: var(--text);
        }
        .hero-sub {
          display:inline-flex;
          align-items:center;
          gap:12px;
          background: linear-gradient(90deg, rgba(10,102,209,0.06), rgba(10,102,209,0.02));
          padding:8px 12px;
          border-radius:999px;
          margin-bottom:16px;
        }

        /* specializations gradient animations */
        .spec-card { padding:18px; border-radius:14px; color: white; position:relative; overflow:hidden; min-height:110px; display:flex; flex-direction:column; justify-content:center;}
        .spec-card .content { z-index:2; position:relative; color: #fff; }
        .spec-card::after { content:''; position:absolute; inset:0; opacity:0.18; z-index:1; mix-blend-mode:overlay; }

        @keyframes move-grad-1 {
          0% { background-position:0% 50%; }
          50% { background-position:100% 50%; }
          100% { background-position:0% 50%; }
        }
        @keyframes move-grad-2 {
          0% { transform: rotate(-1deg) scale(1); filter: hue-rotate(0deg); }
          50% { transform: rotate(1deg) scale(1.02); filter: hue-rotate(30deg); }
          100% { transform: rotate(-1deg) scale(1); filter: hue-rotate(0deg); }
        }
        @keyframes move-grad-3 {
          0% { background-position:0% 0%;}
          100% { background-position:100% 100%;}
        }
        @keyframes move-grad-4 {
          0% { filter: brightness(0.95) saturate(1); transform: translateY(0px); }
          50% { filter: brightness(1.06) saturate(1.1); transform: translateY(-6px); }
          100% { filter: brightness(0.95) saturate(1); transform: translateY(0px); }
        }

        .grad-1 { background: linear-gradient(90deg,#6dd3ff,#7b8cff,#c87cff); background-size:200% 200%; animation: move-grad-1 6s ease infinite; box-shadow: 0 10px 30px rgba(10,102,209,0.08); }
        .grad-2 { background: linear-gradient(120deg,#ff9a9e,#fecfef,#ffd6a5); background-size:200% 200%; animation: move-grad-2 5s ease infinite; box-shadow: 0 10px 30px rgba(255,90,160,0.08); color:#07203a; }
        .grad-3 { background: linear-gradient(90deg,#8ef6c9,#6bd1ff,#8ea8ff); background-size:400% 400%; animation: move-grad-3 8s linear infinite; box-shadow: 0 10px 30px rgba(0,150,200,0.06); }
        .grad-4 { background: linear-gradient(90deg,#ff7ab6,#ffb86b,#ffd36b); background-size:200% 200%; animation: move-grad-4 4s ease-in-out infinite; box-shadow: 0 12px 32px rgba(200,80,120,0.06); color:#041026; }

        /* project card hover */
        .project-card { cursor:pointer; border-radius:16px; overflow:hidden; transition: transform .28s ease, box-shadow .28s ease; background:var(--card); }
        .project-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,0.12); }

        /* chatbot bottom button centered */
        .chat-floating {
          position: fixed;
          left: 50%;
          transform: translateX(-50%);
          bottom: 18px;
          z-index: 60;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 18px;
          color: white;
          border-radius: 999px;
          cursor: pointer;
          font-weight: 700;
          font-family:'Poppins',sans-serif;
          box-shadow: 0 12px 30px rgba(10,102,209,0.18);
          border: none;
        }
        /* in dark, make slightly different gradient */
        html.dark .chat-floating { box-shadow: 0 12px 30px rgba(30,50,90,0.28); }

        footer { margin-top:60px; padding:40px 20px; background:#031428; color:#fff; text-align:center; border-top:4px solid var(--blue-600); }

        /* small responsiveness tweaks */
        @media (max-width:720px) {
          .top-nav { padding: 10px; gap:8px; }
        }
      `}</style>

      {/* Top Navbar with separate color and theme toggle */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="top-nav"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="nav-left">
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <div style={{ fontWeight: 900, fontFamily: "'Orbitron',sans-serif", color: "var(--nav-text)" }}>
              Krithik GR
            </div>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>AI Software Developer / Data Analyst</div>
          </div>

          <div style={{ width: 2 }} />

          <div className="nav-tabs" role="tablist" aria-label="Sections">
            {[
              { label: "Home", ref: profileRef, key: "profile" },
              { label: "About", ref: aboutRef, key: "about" },
              { label: "Projects", ref: projectsRef, key: "projects" },
              { label: "Experience", ref: experienceRef, key: "experience" },
              { label: "Extra", ref: extraRef, key: "extra" },
              { label: "Tech", ref: techRef, key: "tech" },
              { label: "Enquiry", ref: enquiryRef, key: "enquiry" },
              { label: "Skills", ref: skillsRef, key: "skills" },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => scrollToRef(t.ref, t.key)}
                className={`nav-tab ${activeTab === t.key ? "active" : ""}`}
                aria-current={activeTab === t.key ? "page" : undefined}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a
            href="/Krithik_GR_Resume.pdf"
            download="Krithik_GR_Resume.pdf"
            style={{
              padding: "8px 12px",
              borderRadius: 12,
              fontWeight: 700,
              textDecoration: "none",
              background: "linear-gradient(90deg,var(--blue-600),var(--blue-400))",
              color: "white",
              fontFamily: "'Orbitron', sans-serif",
              display: "inline-flex",
              gap: 8,
              alignItems: "center",
            }}
          >
            <FaDownload />
            Resume
          </a>

          <button
            onClick={toggleTheme}
            className="theme-btn"
            aria-pressed={theme === "dark"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
            <span style={{ fontSize: 13 }}>{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
        </div>
      </motion.div>

      {/* Chatbot Floating Button (Centered Bottom) */}
      <motion.button
        onClick={() => setShowChatbot(true)}
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        whileHover={{ scale: 1.03 }}
        className="chat-floating"
        style={{
          background: "linear-gradient(90deg, var(--blue-600), var(--blue-400))",
        }}
        aria-label="Open chat"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          style={{
            width: 38,
            height: 38,
            borderRadius: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255,255,255,0.12)",
            boxShadow: "inset 0 -2px 6px rgba(0,0,0,0.06)",
          }}
        >
          <FaComments size={18} />
        </motion.div>

        <div style={{ textAlign: "left", lineHeight: 1 }}>
          <div style={{ fontSize: 14 }}>Talk to us</div>
          <div style={{ fontSize: 12, opacity: 0.92 }}>AI assistant · Live</div>
        </div>
      </motion.button>

      {/* Chatbot Modal */}
      {showChatbot && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(3,12,32,0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 120,
            padding: 24,
          }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.18 }}
            style={{
              width: 420,
              maxWidth: "100%",
              height: 540,
              background: "linear-gradient(180deg, #ffffff, #f7fbff)",
              borderRadius: 16,
              boxShadow: "0 20px 50px rgba(2,6,23,0.35)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              border: "1px solid rgba(10,102,209,0.06)",
            }}
          >
            <div
              style={{
                background: "linear-gradient(90deg, var(--blue-600), var(--blue-700))",
                color: "white",
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.08)",
                  }}
                >
                  <SiOpenai size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 16 }}>Chat Assistant</div>
                  <div style={{ fontSize: 12, opacity: 0.9 }}>AI Software Developer / Data Analyst</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 8 }}>
                <button
                  onClick={toggleRecording}
                  aria-pressed={isRecording}
                  style={{
                    background: isRecording ? "rgba(255,255,255,0.14)" : "transparent",
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: 8,
                    borderRadius: 8,
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <FaMicrophone />
                </button>
                <button
                  onClick={() => setShowChatbot(false)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "white",
                    fontSize: 20,
                    cursor: "pointer",
                  }}
                  aria-label="Close chat"
                >
                  ✕
                </button>
              </div>
            </div>

            <div
              style={{
                flex: 1,
                padding: 14,
                overflowY: "auto",
                background: "linear-gradient(180deg,#f8fbff,#ffffff)",
              }}
            >
              <div
                style={{
                  alignSelf: "flex-start",
                  background: "var(--glass)",
                  color: "var(--blue-700)",
                  padding: "8px 12px",
                  borderRadius: 12,
                  marginBottom: 12,
                  maxWidth: "80%",
                  fontSize: 14,
                }}
              >
                👋 Hi, I'm an AI assistant — ask me about projects, tech, or how I can help you build.
              </div>

              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["Show projects", "Resume", "Contact", "AI features"].map((s) => (
                  <button
                    key={s}
                    style={{
                      border: "1px solid rgba(10,102,209,0.09)",
                      background: "white",
                      padding: "8px 10px",
                      borderRadius: 999,
                      fontSize: 13,
                      cursor: "pointer",
                      boxShadow: "0 6px 12px rgba(10,102,209,0.04)",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div
              style={{
                borderTop: "1px solid rgba(10,102,209,0.06)",
                padding: "10px",
                display: "flex",
                gap: 8,
                alignItems: "center",
                background: "#fff",
              }}
            >
              <button
                onClick={toggleRecording}
                style={{
                  padding: 10,
                  borderRadius: "50%",
                  background: isRecording ? "var(--blue-600)" : "rgba(10,102,209,0.06)",
                  color: isRecording ? "white" : "var(--blue-700)",
                  border: "none",
                  cursor: "pointer",
                }}
                aria-label="Toggle recording"
              >
                <FaMicrophone />
              </button>

              <input
                type="text"
                placeholder="Type a message or try: 'Show projects'"
                style={{
                  flex: 1,
                  padding: "10px 12px",
                  borderRadius: 10,
                  border: "1px solid rgba(10,102,209,0.06)",
                  fontSize: 14,
                }}
              />

              <button
                style={{
                  background: "linear-gradient(90deg,var(--blue-600),var(--blue-400))",
                  border: "none",
                  padding: "10px 14px",
                  borderRadius: 10,
                  color: "white",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Send
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Profile / Home Section */}
      <section
        ref={profileRef}
        id="animated-bg"
        style={{
          padding: "80px 20px",
          textAlign: "center",
          backgroundImage: "linear-gradient(180deg, rgba(10,102,209,0.04), rgba(10,102,209,0.02))",
          backgroundSize: "cover",
          position: "relative",
          color: "var(--text)",
        }}
      >
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ position: "relative", zIndex: 2 }}>
          {/* Animated name + role */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.06, when: "beforeChildren" } },
            }}
            style={{
              fontSize: 44,
              fontWeight: 900,
              fontFamily: "'Orbitron', sans-serif",
              marginBottom: 8,
              color: "var(--blue-700)",
            }}
          >
            <motion.span
              variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } } }}
              style={{ color: "var(--blue-600)" }}
            >
              Hi, I'm Krithik GR
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              background: "linear-gradient(90deg, rgba(10,102,209,0.06), rgba(10,102,209,0.02))",
              padding: "8px 12px",
              borderRadius: 999,
              marginBottom: 16,
            }}
          >
            <div style={{ fontWeight: 700, color: "var(--blue-700)" }}>AI Software Developer / Data Analyst</div>
            <motion.div animate={{ rotate: [0, 6, -6, 0] }} transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }} style={{ fontSize: 14, color: "var(--blue-500)", opacity: 0.9, fontWeight: 700 }}>
              ✦
            </motion.div>
          </motion.div>

          <p style={{ maxWidth: 760, margin: "10px auto 0", lineHeight: 1.75, color: "var(--muted)" }}>
            Passionate developer working at the intersection of AI/ML and full-stack engineering.
            I craft production-ready systems with Python, Django, React and scalable backend services.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 22 }}>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToRef(projectsRef, "projects");
              }}
              style={{
                padding: "12px 18px",
                borderRadius: 12,
                background: "linear-gradient(90deg,var(--blue-600),var(--blue-400))",
                color: "white",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 10px 30px rgba(10,102,209,0.12)",
              }}
            >
              View Projects
            </a>

            <button
              onClick={() => setShowChatbot(true)}
              style={{
                padding: "12px 18px",
                borderRadius: 12,
                background: "transparent",
                border: "1px solid rgba(10,102,209,0.12)",
                color: "var(--blue-700)",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Chat with us
            </button>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <motion.section ref={aboutRef} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ padding: "60px 20px", maxWidth: 900, margin: "auto" }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 14, color: "var(--blue-700)", fontFamily: "'Orbitron', sans-serif" }}>About & Education</h2>

        <p style={{ lineHeight: 1.8, marginBottom: 18, color: "var(--muted)" }}>
          👨‍💻 Passionate and motivated <b>Software Developer</b> with hands-on
          experience in <b>Python, Django, React, Node.js, and SQL</b>. Skilled
          in AI/ML and data analysis, with internship experience in both
          software development and analytics.
        </p>

        <div style={{ lineHeight: 1.8 }}>
          <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: "#0b2545" }}>Education</h3>

          <div style={{ marginBottom: 12 }}>
            🎓 <b>Marian College Kuttikkanam (Autonomous)</b> <br />
            MCA – Master of Computer Application <span style={{ float: "right", color: "#555" }}>2023 – 2025</span> <br />
            <span style={{ color: "#666" }}>SGPA: 82%</span>
          </div>

          <div style={{ marginBottom: 12 }}>
            🎓 <b>St. George’s College, Aruvithura</b> <br />
            BCA – Bachelor of Computer Application <span style={{ float: "right", color: "#555" }}>2020 – 2023</span> <br />
            <span style={{ color: "#666" }}>Percentage: 67%</span>
          </div>

          <div style={{ marginBottom: 12 }}>
            🎓 <b>St. Mary’s HSS, Vellaramkunnu</b> <br />
            Plus Two – Science Stream <span style={{ float: "right", color: "#555" }}>2018 – 2020</span> <br />
            <span style={{ color: "#666" }}>Percentage: 80%</span>
          </div>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section ref={projectsRef} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ padding: "60px 20px", maxWidth: 1000, margin: "auto", textAlign: "center" }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 22, color: "var(--blue-700)", fontFamily: "'Orbitron', sans-serif" }}>Projects Portfolio</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, padding: "20px" }}>
          {projects.map((project, i) => (
            <div
              key={i}
              onClick={() => setSelectedProject(project)}
              className="project-card"
              style={{
                cursor: "pointer",
                borderRadius: 16,
                overflow: "hidden",
                background: "var(--card)",
              }}
            >
              <img src={project.img} alt={project.title} style={{ width: "100%", height: 180, objectFit: "cover" }} />
              <div style={{ padding: 16, textAlign: "left" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, color: "var(--accent)" }}>{project.title}</h3>
                <p style={{ fontSize: 14, color: "#4b5563" }}>{project.desc.length > 90 ? project.desc.substring(0, 90) + "..." : project.desc}</p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: 8, fontSize: 13, color: "var(--accent)", textDecoration: "underline" }}>
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Project Modal */}
      {selectedProject && (
        <div onClick={() => setSelectedProject(null)} style={{ position: "fixed", inset: 0, background: "rgba(2,6,23,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200, padding: 20 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: 680, background: "var(--card)", borderRadius: 14, padding: 20, boxShadow: "0 20px 50px rgba(2,6,23,0.3)" }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--blue-700)" }}>{selectedProject.title}</h2>
            <img src={selectedProject.img} alt={selectedProject.title} style={{ width: "100%", borderRadius: 12, marginTop: 12 }} />
            <p style={{ marginTop: 12, color: "#334155" }}>{selectedProject.desc}</p>
            <div style={{ textAlign: "right", marginTop: 18 }}>
              <button onClick={() => setSelectedProject(null)} style={{ padding: "10px 14px", borderRadius: 10, background: "var(--blue-600)", border: "none", color: "white", fontWeight: 700 }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Experience */}
      <motion.section ref={experienceRef} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ padding: "60px 20px", maxWidth: 900, margin: "auto" }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16, color: "var(--blue-700)", fontFamily: "'Orbitron', sans-serif" }}>Experience</h2>

        <p style={{ lineHeight: 1.8, color: "var(--muted)" }}>
          💼 <b>Data Analyst Intern</b> — SBL Knowledge Services, Trivandrum <span style={{ color: "#555", fontStyle: "italic" }}> (Dec 2024 – Feb 2025)</span>
          <br />
          • Analyzed and interpreted large datasets to extract actionable insights. <br />
          • Performed data cleaning, preprocessing, and visualization using Excel, SQL and Power BI. <br />
          <br />
          💼 <b>AI Software Developer Intern</b> — QF Innovate, Kakkanad, Kochi <span style={{ color: "#555", fontStyle: "italic" }}>(6 Months)</span>
          <br />
          • Contributed to Rentosmart, Pillowtalk and KOSEAPP testing. <br />
          • Built AI voice interaction features and chat systems using Python and React.
        </p>
      </motion.section>

      {/* Extra Activities */}
      <motion.section ref={extraRef} initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} style={{ padding: "60px 20px", maxWidth: 900, margin: "auto" }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12, color: "var(--blue-700)", fontFamily: "'Orbitron', sans-serif" }}>Extra Activities</h2>
        <ul style={{ lineHeight: 1.8, color: "var(--muted)" }}>
          <li>💻 Coding</li>
          <li>🏏 Playing cricket</li>
          <li>🖼️ Photo editing</li>
          <li>📱 Mobile photography</li>
        </ul>
      </motion.section>

      {/* Tech Stack */}
      <section ref={techRef} style={{ padding: "60px 20px", maxWidth: 1000, margin: "auto" }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 18, color: "var(--blue-700)", fontFamily: "'Orbitron', sans-serif" }}>Tech Stack</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))", gap: 18 }}>
          {techStack.map((t) => (
            <motion.div key={t.name} whileHover={{ scale: 1.06 }} style={{ textAlign: "center", padding: 18, borderRadius: 12, background: "var(--card)", boxShadow: "0 10px 30px rgba(9,30,66,0.04)" }}>
              <div style={{ fontSize: 34, marginBottom: 8, color: "var(--blue-600)" }}>{t.icon}</div>
              <div style={{ fontWeight: 700, color: "var(--text)" }}>{t.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Specializations */}
      <section ref={skillsRef} style={{ padding: "60px 20px", maxWidth: 1000, margin: "auto" }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 22, color: "var(--blue-700)", fontFamily: "'Orbitron', sans-serif" }}>Specializations</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {specializations.map((skill, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.03 }} className={`spec-card ${skill.anim}`}>
              <div className="content">
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{skill.title}</h3>
                <p style={{ fontSize: 14 }}>{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enquiry */}
      <section ref={enquiryRef} style={{ padding: "70px 20px", maxWidth: 700, margin: "auto" }}>
        <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 14, color: "var(--blue-700)", fontFamily: "'Orbitron', sans-serif" }}>Enquiry Form</h2>
        <form method="POST" action="http://localhost:5000/send-email" style={{ display: "grid", gap: 14, background: "var(--card)", padding: 20, borderRadius: 12, boxShadow: "0 10px 30px rgba(9,30,66,0.04)" }}>
          <input name="name" placeholder="Your Name" required style={{ padding: 12, borderRadius: 10, border: "1px solid rgba(10,102,209,0.06)" }} />
          <input type="email" name="email" placeholder="Email" required style={{ padding: 12, borderRadius: 10, border: "1px solid rgba(10,102,209,0.06)" }} />
          <textarea name="message" placeholder="Message..." required style={{ padding: 12, borderRadius: 10, border: "1px solid rgba(10,102,209,0.06)", minHeight: 120 }} />
          <motion.button whileHover={{ scale: 1.03 }} type="submit" style={{ padding: 12, borderRadius: 10, border: "none", background: "linear-gradient(90deg,var(--blue-600),var(--blue-400))", color: "white", fontWeight: 800, cursor: "pointer" }}>
            Send Enquiry
          </motion.button>
        </form>
      </section>

      {/* Footer */}
      <footer style={{ marginTop: 60, padding: "40px 20px", textAlign: "center" }}>
        <h3 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 20, fontWeight: 800 }}>Krithik GR</h3>
        <p style={{ margin: "6px 0", fontSize: 14 }}>Software Developer</p>
        <p style={{ margin: "6px 0", fontSize: 13, color: "#b7c7d6" }}>📍 Idukki, Kerala</p>

        <div style={{ marginTop: 12, display: "flex", justifyContent: "center", gap: 18 }}>
          <a href="mailto:krithikgr323@gmail.com" style={{ color: "white", fontSize: 20, textDecoration: "none" }}>📧</a>
          <a href="http://linkedin.com/in/krithik-gr-631376247" target="_blank" rel="noopener noreferrer" style={{ color: "#0a66c2", fontSize: 20, textDecoration: "none" }}>🔗</a>
          <a href="https://github.com/kr-zxz" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: 20, textDecoration: "none" }}>🐙</a>
        </div>

        <p style={{ marginTop: 18, fontSize: 12, color: "#9fb0d1" }}>© {new Date().getFullYear()} Krithik GR. All Rights Reserved.</p>
      </footer>

      {/* Scroll-to-Top */}
      {showScroll && (
        <motion.button whileHover={{ scale: 1.08 }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ position: "fixed", bottom: 94, right: 28, background: "var(--blue-600)", border: "none", borderRadius: "50%", padding: 12, cursor: "pointer", boxShadow: "0 8px 24px rgba(10,102,209,0.14)", color: "white", zIndex: 100 }} aria-label="Scroll to top">
          <FaArrowUp />
        </motion.button>
      )}
    </div>
  );
}
