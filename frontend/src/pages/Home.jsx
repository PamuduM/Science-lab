import React from "react";
import { Button, Card, Row, Col, Grid } from "antd";
import { useNavigate } from "react-router-dom";
import {
  BookOutlined,
  ExperimentOutlined,
  ReadOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import backgroundImage from "../assets/back.jpg";

const { useBreakpoint } = Grid;

// 🎨 Common Styles
const sectionTitle = {
  textAlign: "center",
  fontSize: "36px",
  marginBottom: "50px",
  fontWeight: "bold",
};

// ✅ Hero Section
const HeroSection = () => {
  const screens = useBreakpoint();
  const navigate = useNavigate();

  const styles = {
    section: {
      textAlign: "center",
      padding: "100px 20px 80px",
      color: "white",
    },
    title: {
      fontSize: screens.md ? "48px" : "32px",
      fontWeight: "bold",
      marginBottom: "20px",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
    },
    subtitle: {
      fontSize: screens.md ? "24px" : "18px",
      marginBottom: "15px",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
    },
    description: {
      fontSize: screens.md ? "18px" : "16px",
      margin: "0 auto 40px",
      maxWidth: "600px",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
    },
    buttons: {
      gap: "20px",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    button: {
      height: "50px",
      fontSize: "16px",
      fontWeight: "600",
      borderRadius: "25px",
      padding: "0 30px",
      marginBottom: "10px",
    },
  };

  return (
    <div style={styles.section}>
      <h1 style={styles.title}>Welcome to Science Lab</h1>
      <h2 style={styles.subtitle}>Excellence in Science Education</h2>
      <p style={styles.description}>
        Join thousands of students who have achieved academic success with our
        expert-led science tuition for grades 6-11. Master complex concepts
        through our innovative teaching methods.
      </p>
      <div style={styles.buttons}>
        <Button
          type="primary"
          size="large"
          style={styles.button}
          onClick={() => navigate("/lessons")}
        >
          Start Learning
        </Button>
        <Button
          type="default"
          size="large"
          style={styles.button}
          onClick={() => navigate("/about")}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

// ✅ Services Section
const ServicesSection = () => {
  const services = [
    {
      icon: <BookOutlined style={{ fontSize: "48px", color: "#001529" }} />,
      title: "Science Lessons",
      description:
        "Comprehensive science lessons for grades 6-11 covering all major topics with easy-to-understand explanations.",
    },
    {
      icon: <ExperimentOutlined style={{ fontSize: "48px", color: "#001529" }} />,
      title: "Practical Sessions",
      description:
        "Hands-on laboratory experiments and practical sessions to reinforce theoretical knowledge.",
    },
    {
      icon: <ReadOutlined style={{ fontSize: "48px", color: "#001529" }} />,
      title: "Study Materials",
      description:
        "Access to premium study materials, notes, and resources designed for academic excellence.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: "60px 20px" }}>
      <h2 style={{ ...sectionTitle, color: "#001529" }}>Our Services</h2>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[32, 32]}>
          {services.map((service, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card
                hoverable
                style={{
                  height: "100%",
                  textAlign: "center",
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
                bodyStyle={{ padding: "40px 20px" }}
              >
                {service.icon}
                <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {service.title}
                </h3>
                <p style={{ color: "#666", lineHeight: "1.6" }}>
                  {service.description}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

// ✅ Features Section
const FeaturesSection = () => {
  const features = [
    "Expert teachers with years of experience",
    "Small class sizes for personalized attention",
    "Modern teaching methods and technology",
    "Regular assessments and progress tracking",
    "Flexible payment options available",
    "Online and offline learning modes",
  ];

  return (
    <div style={{ backgroundColor: "white", padding: "60px 20px" }}>
      <h2 style={{ ...sectionTitle, color: "#001529" }}>
        Why Choose Science Lab?
      </h2>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "left" }}>
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              fontSize: "18px",
              color: "#333",
            }}
          >
            <CheckCircleOutlined
              style={{ color: "#52c41a", marginRight: 15 }}
            />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ✅ Stats Section
const StatsSection = () => {
  const stats = [
    { number: "500+", label: "Students Taught" },
    { number: "95%", label: "Success Rate" },
    { number: "5+", label: "Years Experience" },
  ];

  return (
    <div
      style={{
        backgroundColor: "#001529",
        padding: "60px 20px",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2 style={{ ...sectionTitle, color: "white" }}>Our Achievements</h2>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Row gutter={[32, 32]}>
          {stats.map((stat, index) => (
            <Col xs={24} sm={8} key={index}>
              <div style={{ marginBottom: "30px" }}>
                <span
                  style={{
                    fontSize: "48px",
                    fontWeight: "bold",
                    color: "#40a9ff",
                    display: "block",
                  }}
                >
                  {stat.number}
                </span>
                <span style={{ fontSize: "16px", color: "#ccc" }}>
                  {stat.label}
                </span>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

// ✅ Main Home Component
const Home = () => {
  return (
    <div>
      <NavBar />
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          minHeight: "100vh",
          fontFamily: "'Helvetica Neue', sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(1.5px)",
            zIndex: 1,
          }}
        />
        <div style={{ position: "relative", zIndex: 2, paddingTop: "80px" }}>
          <HeroSection />
        </div>
      </div>
      <ServicesSection />
      <FeaturesSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Home;
