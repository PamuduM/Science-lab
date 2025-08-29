import React from "react";
import { Layout, Typography } from "antd";

const { Header, Content, Footer: AntdFooter } = Layout;
const { Text } = Typography;

const AppLayout = ({ children }) => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Header
        style={{
          backgroundColor: "#001529",
          color: "#fff",
          textAlign: "center",
          fontSize: "18px",
        }}
      >
        Science Lab Tuition
      </Header>

      {/* Content */}
      <Content
        style={{
          flex: "1 0 auto", // ensures content takes remaining space
          padding: "24px",
          background: "#f0f2f5",
        }}
      >
        {children}
      </Content>

      {/* Footer */}
      <AntdFooter
        style={{
          backgroundColor: "#001529",
          color: "#fff",
          textAlign: "center",
          padding: "16px",
          marginTop: "auto",
        }}
      >
        <Text style={{ color: "#fff" }}>
          &copy; {new Date().getFullYear()} Science Lab Tuition | All Rights Reserved
        </Text>
      </AntdFooter>
    </Layout>
  );
};

export default AppLayout;
