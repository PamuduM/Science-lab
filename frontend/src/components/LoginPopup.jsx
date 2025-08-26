import React, { useState } from "react";
import { Modal, Form, Input, Button, notification } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";

const LoginPopup = ({ isVisible, onClose, onSignupClick, onLoginSuccess }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const { data } = await login(values);
      const { token, user } = data;

      // Save user data to localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Trigger parent callback
      onLoginSuccess?.(user, token);

      notification.success({
        message: `Welcome back, ${user.fullName || "User"}!`,
      });

      // Navigate based on user role
      navigate(user.role === "teacher" ? "/admin" : "/home2");

      // Close modal after successful login
      onClose?.();
    } catch (error) {
      notification.error({
        message: "Login Failed",
        description: error.response?.data?.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={isVisible}
      onCancel={onClose}
      footer={null}
      centered
      bodyStyle={{ padding: 0 }}
      destroyOnClose
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 30,
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ marginBottom: 24, fontWeight: 700, fontSize: 22 }}>
          Welcome Back 👋
        </h2>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleLogin}
          style={{ width: "100%", maxWidth: 350 }}
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Invalid email format" },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Email"
              size="large"
              style={{ borderRadius: 12 }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              size="large"
              style={{ borderRadius: 12 }}
            />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            size="large"
            style={{ width: "100%", borderRadius: 12, fontWeight: "bold" }}
          >
            Login
          </Button>

          <Button
            type="link"
            onClick={onSignupClick}
            style={{
              marginTop: 16,
              display: "block",
              textAlign: "center",
              fontWeight: 500,
            }}
          >
            Don't have an account? Sign up
          </Button>
        </Form>
      </div>
    </Modal>
  );
};

export default LoginPopup;
