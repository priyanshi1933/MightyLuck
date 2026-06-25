"use client";
import { useState, useEffect } from "react";
import { X, Eye, EyeOff, ChevronDown } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<"join" | "login">("join");
  const [showPassword, setShowPassword] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    countryCode: "+380",
  });

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleJoin=()=>{
    localStorage.setItem("user",JSON.stringify(formData));
    alert("Account created successfully!");
    onClose();
  }

  const handleLogin=()=>{
    const savedUser=localStorage.getItem("user");
    if(!savedUser){
      alert("No account found");
      return;
    }
    const user=JSON.parse(savedUser);
    if(user.email === loginData.email && user.password===loginData.password){
      localStorage.setItem("isLoggedIn","true");
      localStorage.setItem("user", JSON.stringify(user));
      window.dispatchEvent(new Event("authChanged"));
      alert("Login Successful");
      onClose();
    }else{
      alert("Invalid email or password");
    }
  }

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.7)",
          zIndex: 200,
          backdropFilter: "blur(4px)",
        }}
      />
 
      {/* Wrapper */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 201,
          overflow: "visible",
          width: "90%",
          maxWidth: "750px",
        }}
      >
        <div
  style={{
    position: "relative",
    width: "100%",
    background: "#07194D",
    borderRadius: "16px",
  }}
>
        {/* Close button */}
        {!isMobile && (
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "-12px",
              right: "-12px",
              background: "rgba(20,35,90,0.95)",
              border: "1px solid #6B7DB8",
              borderRadius: "50%",
              width: "28px",
              height: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 999,
            }}
          >
            <X size={16} color="white" />
          </button>
        )}

        {/* Modal */}
        <div
          style={{
            position: "relative",
            // top: isMobile ? 0 : "50%",
            // left: isMobile ? 0 : "50%",
            // transform: isMobile ? "none" : "translate(-50%, -50%)",
            zIndex: 201,
            width:  "100%",
            height: isMobile ? "100vh" : "auto",
            maxWidth:  "750px",
            borderRadius: isMobile ? "0" : "16px",
            overflow: "hidden",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
            background: "#07194D",
            maxHeight: "95vh",
          }}
        >
          {isMobile && (
            <>
              {/* Header */}
              <div
                style={{
                  padding: "10px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  background: "#07194D",
                }}
              >
                <button
                  onClick={onClose}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#fff",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  ←
                </button>

                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    borderRadius: "10px",
                    overflow: "hidden",
                    background: "#17398D",
                  }}
                >
                  <button
                    onClick={() => setActiveTab("join")}
                    style={{
                      flex: 1,
                      height: "42px",
                      border: "none",
                      background:
                        activeTab === "join" ? "#2463FF" : "transparent",
                      color: "#fff",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Join Now
                  </button>

                  <button
                    onClick={() => setActiveTab("login")}
                    style={{
                      flex: 1,
                      height: "42px",
                      border: "none",
                      background:
                        activeTab === "login" ? "#2463FF" : "transparent",
                      color: "#fff",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Log In
                  </button>
                </div>
              </div>

              {/* Purple Divider */}
              <div
                style={{
                  height: "2px",
                  background: "#C000FF",
                }}
              />
            </>
          )}
          {/* Left: Banner */}
          <div
            style={{
              width: isMobile ? "100%" : "45%",
              height: isMobile ? "180px" : "auto",
              minHeight: isMobile ? "auto" : "500px",
              position: "relative",
              background:
                "linear-gradient(135deg, #0a1a5c 0%, #1a1060 50%, #060520 100%)",
              flexShrink: 0,
            }}
          >
            <img
              src="/login.png"
              alt="banner"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center bottom",
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>

          {/* Right: Form */}
          <div
            style={{
              flex: 1,
              backgroundColor: "#0c1f56",
              padding: "24px",
              boxSizing: "border-box",
              overflowY: "auto",
              position: "relative",
              minHeight: "500px",
            }}
          >
            {/* Logo */}
            {!isMobile && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  marginBottom: "20px",
                }}
              >
                <svg
                  width="25"
                  height="19"
                  viewBox="0 0 25 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.4041 5.46628L17.825 8.1451C17.6234 8.22774 17.3936 8.14913 17.2828 7.96168L12.8785 0.215476C12.7072 -0.0767951 12.2799 -0.0707478 12.1186 0.227571L7.50073 7.98183C7.3939 8.17937 7.15202 8.26402 6.94441 8.17534L0.609172 5.46628C0.266509 5.31914 -0.0902639 5.64366 0.0205977 5.99842L3.7657 17.9251C3.82214 18.1065 3.99146 18.2315 4.18295 18.2315L20.2155 18.2355C20.399 18.2355 20.5622 18.1206 20.6267 17.9493L24.9806 6.02059C25.1096 5.66382 24.7568 5.32317 24.4061 5.46628H24.4041ZM15.1804 11.2492L12.0481 16.7923C12.0037 16.8709 11.8868 16.8407 11.8828 16.752L11.7558 13.3959H10.6613V13.3838C10.6331 13.3878 10.6049 13.3959 10.5746 13.3959H8.30296C8.23645 13.3959 8.19412 13.3233 8.22435 13.2649L11.6006 7.01028C11.7195 6.80468 11.9372 6.67971 12.173 6.67971H14.4447C14.5112 6.67971 14.5535 6.75228 14.5233 6.81073L12.1972 11.1182H15.1018C15.1703 11.1182 15.2127 11.1908 15.1784 11.2512L15.1804 11.2492Z"
                    fill="url(#paint0_linear_1420_4119)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1420_4119"
                      x1="2.99975"
                      y1="9.11867"
                      x2="21.6769"
                      y2="9.11867"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFC727" />
                      <stop offset="1" stopColor="#F49600" />
                    </linearGradient>
                  </defs>
                </svg>

                <span
                  style={{
                    fontWeight: 900,
                    fontSize: "14px",
                    letterSpacing: "0.08em",
                    color: "#ffffff",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  MIGHTY{" "}
                  <span
                    style={{
                      background: "linear-gradient(90deg, #FFD85A, #FFB800)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    LUCK
                  </span>
                </span>
              </div>
            )}

            {/* Tabs */}
            {!isMobile && (
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#091540",
                  borderRadius: "8px",
                  padding: "4px",
                  marginBottom: "20px",
                }}
              >
                <button
                  onClick={() => setActiveTab("join")}
                  style={{
                    flex: 1,
                    padding: "10px",
                    borderRadius: "6px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor:
                      activeTab === "join" ? "#1463FF" : "transparent",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "14px",
                    fontFamily: "Inter, sans-serif",
                    transition: "background-color 0.2s",
                  }}
                >
                  Join Now
                </button>
                <button
                  onClick={() => setActiveTab("login")}
                  style={{
                    flex: 1,
                    padding: "10px",
                    borderRadius: "6px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor:
                      activeTab === "login" ? "#1463FF" : "#112F82",
                    color: activeTab === "login" ? "#ffffff" : "#8899cc",
                    fontWeight: 700,
                    fontSize: "14px",
                    fontFamily: "Inter, sans-serif",
                    transition: "background-color 0.2s",
                  }}
                >
                  Log In
                </button>
              </div>
            )}

            {activeTab === "join" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {/* Username */}
                <input
                  placeholder="User name"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  style={{
                    width: "100%",
                    height: "44px",
                    backgroundColor: "#112F82",
                    border: "none",
                    borderRadius: "8px",
                    padding: "0 16px",
                    color: "#ffffff",
                    fontSize: "14px",
                    fontFamily: "Inter, sans-serif",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />

                {/* First + Last name */}
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    style={{
                      flex: 1,
                      height: "44px",
                      backgroundColor: "#112F82",
                      border: "none",
                      borderRadius: "8px",
                      // padding: "0 16px",
                      padding: "4px",
                      color: "#ffffff",
                      fontSize: "14px",
                      fontFamily: "Inter, sans-serif",
                      outline: "none",
                    }}
                  />
                  <input
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    style={{
                      flex: 1,
                      height: "44px",
                      backgroundColor: "#112F82",
                      border: "none",
                      borderRadius: "8px",
                      // padding: "0 16px",
                      padding: "4px",
                      color: "#ffffff",
                      fontSize: "14px",
                      fontFamily: "Inter, sans-serif",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Email */}
                <input
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  style={{
                    width: "100%",
                    height: "44px",
                    backgroundColor: "#112F82",
                    border: "none",
                    borderRadius: "8px",
                    padding: "0 16px",
                    color: "#ffffff",
                    fontSize: "14px",
                    fontFamily: "Inter, sans-serif",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />

                {/* Password */}
                <div style={{ position: "relative" }}>
                  <input
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    style={{
                      width: "100%",
                      height: "44px",
                      backgroundColor: "#112F82",
                      border: "none",
                      borderRadius: "8px",
                      padding: "0 44px 0 16px",
                      color: "#ffffff",
                      fontSize: "14px",
                      fontFamily: "Inter, sans-serif",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "#8899cc",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>

                {/* Phone */}
                <div style={{ display: "flex", gap: "8px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      backgroundColor: "#112F82",
                      borderRadius: "8px",
                      padding: "0 12px",
                      height: "44px",
                      cursor: "pointer",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 2.0625C13.5312 1.15625 11.8438 0.625 10 0.625V2.0625H15Z"
                        fill="#ED4C5C"
                      />
                      <path
                        d="M10 3.5H16.75C16.2187 2.96875 15.625 2.46875 15 2.0625H10V3.5Z"
                        fill="white"
                      />
                      <path
                        d="M10 4.9375H17.9062C17.5625 4.40625 17.1875 3.9375 16.7812 3.5H10V4.9375Z"
                        fill="#ED4C5C"
                      />
                      <path
                        d="M10 6.375H18.6563C18.4375 5.875 18.1875 5.375 17.9063 4.9375H10V6.375Z"
                        fill="white"
                      />
                      <path
                        d="M10 7.8125H19.125C19 7.3125 18.8438 6.84375 18.6563 6.375H10V7.8125Z"
                        fill="#ED4C5C"
                      />
                      <path
                        d="M10 9.28125H19.3438C19.3125 8.78125 19.2187 8.3125 19.125 7.84375H10V9.28125Z"
                        fill="white"
                      />
                      <path
                        d="M19.3438 9.28125H10V10H0.625C0.625 10.25 0.625 10.4687 0.65625 10.7187H19.3438C19.375 10.4687 19.375 10.25 19.375 10C19.375 9.75 19.375 9.5 19.3438 9.28125Z"
                        fill="#ED4C5C"
                      />
                      <path
                        d="M0.875 12.1563H19.125C19.25 11.6875 19.3125 11.2188 19.3438 10.7188H0.65625C0.6875 11.1875 0.75 11.6875 0.875 12.1563Z"
                        fill="white"
                      />
                      <path
                        d="M1.34375 13.5937H18.6563C18.8438 13.125 19 12.6562 19.125 12.1562H0.875C1 12.6562 1.15625 13.125 1.34375 13.5937Z"
                        fill="#ED4C5C"
                      />
                      <path
                        d="M2.09375 15.0312H17.9063C18.1875 14.5625 18.4375 14.0938 18.6563 13.5938H1.34375C1.5625 14.0938 1.8125 14.5625 2.09375 15.0312Z"
                        fill="white"
                      />
                      <path
                        d="M3.21875 16.4688H16.7812C17.1875 16.0313 17.5938 15.5312 17.9062 15.0312H2.09375C2.40625 15.5625 2.8125 16.0313 3.21875 16.4688Z"
                        fill="#ED4C5C"
                      />
                      <path
                        d="M4.96875 17.9062H15.0312C15.6875 17.5 16.25 17 16.7812 16.4688H3.21875C3.75 17.0312 4.34375 17.5 4.96875 17.9062Z"
                        fill="white"
                      />
                      <path
                        d="M10 19.375C11.8438 19.375 13.5625 18.8438 15.0312 17.9062H4.96875C6.4375 18.8438 8.15625 19.375 10 19.375Z"
                        fill="#ED4C5C"
                      />
                      <path
                        d="M5 2.0625C4.34375 2.46875 3.75 2.96875 3.21875 3.5C2.78125 3.9375 2.40625 4.4375 2.09375 4.9375C1.8125 5.40625 1.53125 5.875 1.34375 6.375C1.15625 6.84375 1 7.3125 0.875 7.8125C0.75 8.28125 0.6875 8.75 0.65625 9.25C0.625 9.5 0.625 9.75 0.625 10H10V0.625C8.15625 0.625 6.46875 1.15625 5 2.0625Z"
                        fill="#428BC1"
                      />
                      <path
                        d="M7.8125 0.9375L7.96875 1.40625H8.4375L8.0625 1.71875L8.1875 2.1875L7.8125 1.90625L7.4375 2.1875L7.5625 1.71875L7.1875 1.40625H7.65625L7.8125 0.9375ZM9.0625 2.8125L9.21875 3.28125H9.6875L9.3125 3.59375L9.4375 4.0625L9.0625 3.78125L8.6875 4.0625L8.8125 3.59375L8.4375 3.28125H8.90625L9.0625 2.8125ZM6.5625 2.8125L6.71875 3.28125H7.1875L6.8125 3.59375L6.9375 4.0625L6.5625 3.78125L6.1875 4.0625L6.3125 3.59375L5.9375 3.28125H6.40625L6.5625 2.8125ZM7.8125 4.6875L7.96875 5.15625H8.4375L8.0625 5.46875L8.1875 5.9375L7.8125 5.65625L7.4375 5.9375L7.5625 5.46875L7.1875 5.15625H7.65625L7.8125 4.6875ZM5.3125 4.6875L5.46875 5.15625H5.9375L5.5625 5.46875L5.6875 5.9375L5.3125 5.65625L4.9375 5.9375L5.0625 5.46875L4.6875 5.15625H5.15625L5.3125 4.6875ZM2.8125 4.6875L2.96875 5.15625H3.4375L3.0625 5.46875L3.1875 5.9375L2.8125 5.65625L2.4375 5.9375L2.5625 5.46875L2.1875 5.15625H2.65625L2.8125 4.6875ZM9.0625 6.5625L9.21875 7.03125H9.6875L9.3125 7.34375L9.4375 7.8125L9.0625 7.53125L8.6875 7.8125L8.8125 7.34375L8.4375 7.03125H8.90625L9.0625 6.5625ZM6.5625 6.5625L6.71875 7.03125H7.1875L6.8125 7.34375L6.9375 7.8125L6.5625 7.53125L6.1875 7.8125L6.3125 7.34375L5.9375 7.03125H6.40625L6.5625 6.5625ZM4.0625 6.5625L4.21875 7.03125H4.6875L4.3125 7.34375L4.4375 7.8125L4.0625 7.53125L3.6875 7.8125L3.8125 7.34375L3.4375 7.03125H3.90625L4.0625 6.5625ZM7.8125 8.4375L7.96875 8.90625H8.4375L8.0625 9.21875L8.1875 9.6875L7.8125 9.40625L7.4375 9.6875L7.5625 9.21875L7.1875 8.90625H7.65625L7.8125 8.4375ZM5.3125 8.4375L5.46875 8.90625H5.9375L5.5625 9.21875L5.6875 9.6875L5.3125 9.40625L4.9375 9.6875L5.0625 9.21875L4.6875 8.90625H5.15625L5.3125 8.4375ZM2.8125 8.4375L2.96875 8.90625H3.4375L3.0625 9.21875L3.1875 9.6875L2.8125 9.40625L2.4375 9.6875L2.5625 9.21875L2.1875 8.90625H2.65625L2.8125 8.4375ZM3.6875 4.0625L4.0625 3.78125L4.4375 4.0625L4.28125 3.59375L4.65625 3.28125H4.1875L4.0625 2.8125L3.90625 3.28125H3.46875L3.84375 3.5625L3.6875 4.0625ZM1.1875 7.8125L1.5625 7.53125L1.9375 7.8125L1.78125 7.34375L2.15625 7.03125H1.71875L1.5625 6.5625L1.40625 7.03125H1.09375C1.09375 7.0625 1.0625 7.09375 1.0625 7.125L1.3125 7.3125L1.1875 7.8125Z"
                        fill="white"
                      />
                    </svg>

                    <span
                      style={{
                        color: "#ffffff",
                        fontSize: "13px",
                        fontFamily: "Manrope, sans-serif",
                      }}
                    >
                      {formData.countryCode}
                    </span>
                    <ChevronDown size={14} color="#8899cc" />
                  </div>
                  <input
                    placeholder="Phone Number"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    style={{
                      flex: 1,
                      height: "44px",
                      backgroundColor: "#112F82",
                      border: "none",
                      borderRadius: "8px",
                      padding: "0 16px",
                      color: "#ffffff",
                      fontSize: "14px",
                      fontFamily: "Inter, sans-serif",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Terms */}
                <p
                  style={{
                    color: "#8899cc",
                    fontSize: "11px",
                    fontFamily: "Manrope, sans-serif",
                    margin: 0,
                    lineHeight: "160%",
                  }}
                >
                  By clicking "Join Now", I confirm that I'm over 18 years old
                  and agree to Mighty Luck' T&C along with the Privacy Policy
                </p>

                {/* Submit */}
                <button
                  onClick={handleJoin}
                  style={{
                    width: "100%",
                    height: "48px",
                    backgroundColor: "#FFC83D",
                    color: "#1A1404",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: 700,
                    fontFamily: "Manrope, sans-serif",
                    cursor: "pointer",
                    marginTop: "4px",
                  }}
                >
                  Join with a 350% Bonus
                </button>

                {/* Support */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    flexWrap: "nowrap",
                    marginTop: "8px",
                    width: "100%",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.9625 0.000382023C8.41562 -0.00274298 8.66875 0.012882 9.00625 0.062882C9.25313 0.097257 9.60625 0.159757 9.79688 0.203507C9.9875 0.244132 10.325 0.341007 10.5469 0.416007C10.7688 0.491007 11.0813 0.609757 11.2344 0.678507C11.3875 0.750382 11.6625 0.887882 11.8438 0.984757C12.025 1.08163 12.2906 1.24413 12.4375 1.34101C12.5844 1.43788 12.8438 1.63163 13.0156 1.76913C13.1875 1.90663 13.475 2.16601 13.6531 2.34413C13.8313 2.52226 14.0906 2.80976 14.2281 2.98163C14.3656 3.15351 14.5594 3.41288 14.6562 3.55976C14.7531 3.70663 14.9156 3.97226 15.0125 4.15351C15.1094 4.33476 15.2469 4.60976 15.3188 4.76288C15.3875 4.91601 15.5125 5.24726 15.5938 5.49726C15.6781 5.74726 15.7812 6.12538 15.825 6.34101C15.8687 6.55663 15.925 6.90038 15.9531 7.10663C15.9781 7.31288 16 7.70663 16 7.98163C16 8.25663 15.9781 8.65663 15.9531 8.87226C15.925 9.08788 15.8687 9.43788 15.825 9.65351C15.7812 9.86913 15.6781 10.2473 15.5938 10.4973C15.5125 10.7473 15.3875 11.0785 15.3188 11.2316C15.2469 11.3848 15.1094 11.6598 15.0125 11.841C14.9156 12.0223 14.7531 12.2879 14.6562 12.4348C14.5594 12.5816 14.3656 12.841 14.2281 13.0129C14.0906 13.1848 13.8313 13.4723 13.6531 13.6504C13.475 13.8285 13.1875 14.0879 13.0156 14.2254C12.8438 14.3629 12.5844 14.5566 12.4375 14.6535C12.2906 14.7504 12.025 14.9129 11.8438 15.0098C11.6625 15.1066 11.3875 15.2441 11.2344 15.316C11.0813 15.3848 10.7688 15.5035 10.5469 15.5785C10.325 15.6535 9.9875 15.7504 9.79688 15.791C9.60625 15.8348 9.25313 15.8973 9.00625 15.9316C8.69063 15.9785 8.40312 15.9973 8 15.9973C7.59688 15.9973 7.30937 15.9785 6.99062 15.9316C6.74687 15.8973 6.39375 15.8348 6.20312 15.791C6.0125 15.7504 5.675 15.6535 5.45312 15.5785C5.22813 15.5035 4.91875 15.3848 4.76562 15.316C4.6125 15.2441 4.3375 15.1066 4.15625 15.0098C3.975 14.9129 3.70937 14.7504 3.5625 14.6535C3.41563 14.5566 3.15625 14.3629 2.98438 14.2254C2.8125 14.0879 2.525 13.8285 2.34687 13.6504C2.16875 13.4723 1.90938 13.1848 1.77188 13.0129C1.63437 12.841 1.44062 12.5816 1.34375 12.4348C1.24688 12.2879 1.08438 12.0223 0.9875 11.841C0.890625 11.6598 0.753125 11.3848 0.68125 11.2316C0.6125 11.0785 0.4875 10.7473 0.40625 10.4973C0.321875 10.2473 0.21875 9.86913 0.175 9.65351C0.13125 9.43788 0.075 9.09413 0.046875 8.88788C0.021875 8.68163 0 8.28788 0 8.01288C0 7.73788 0.021875 7.33788 0.046875 7.12226C0.075 6.90663 0.13125 6.55663 0.175 6.34101C0.21875 6.12538 0.321875 5.74726 0.40625 5.49726C0.4875 5.24726 0.6125 4.91601 0.68125 4.76288C0.753125 4.60976 0.890625 4.33476 0.9875 4.15351C1.08438 3.97226 1.24688 3.70663 1.34375 3.55976C1.44062 3.41288 1.63437 3.15351 1.77188 2.98163C1.90938 2.80976 2.16875 2.52226 2.34687 2.34413C2.525 2.16601 2.8125 1.90663 2.98438 1.76913C3.15625 1.63163 3.41563 1.43788 3.5625 1.34101C3.70937 1.24413 3.975 1.08163 4.15625 0.984757C4.3375 0.887882 4.6125 0.750382 4.76562 0.678507C4.91875 0.609757 5.25 0.484757 5.5 0.403507C5.75 0.322257 6.09375 0.225382 6.26562 0.187882C6.4375 0.150382 6.75313 0.094132 6.96875 0.062882C7.23438 0.022257 7.55 0.00350702 7.95937 0.000382023H7.9625ZM7.00313 1.32538C6.82188 1.35038 6.50625 1.41601 6.3 1.46913C6.09375 1.51913 5.77188 1.62226 5.58125 1.69726C5.39062 1.77226 5.11875 1.89413 4.97188 1.96601C4.825 2.04101 4.6 2.16601 4.47188 2.24413C4.34375 2.32538 4.09062 2.50351 3.90937 2.63788C3.72812 2.77538 3.425 3.04101 3.2375 3.23163C3.04688 3.41913 2.78125 3.72226 2.64375 3.90351C2.50937 4.08476 2.33125 4.33788 2.25 4.46601C2.17188 4.59413 2.04688 4.81913 1.97187 4.96601C1.9 5.11288 1.77813 5.38476 1.70312 5.57538C1.62812 5.76601 1.525 6.08788 1.475 6.29413C1.42188 6.50038 1.35313 6.82226 1.325 7.01288C1.2875 7.25663 1.27188 7.54413 1.27188 7.99726C1.27188 8.45038 1.2875 8.73788 1.325 8.98163C1.35313 9.17226 1.42188 9.49413 1.475 9.70038C1.525 9.90663 1.62812 10.2285 1.70312 10.4191C1.77813 10.6098 1.9 10.8816 1.97187 11.0285C2.04688 11.1754 2.17188 11.4004 2.25 11.5285C2.33125 11.6566 2.50937 11.9098 2.64375 12.091C2.78125 12.2723 3.04688 12.5754 3.2375 12.7629C3.425 12.9535 3.72812 13.2191 3.90937 13.3566C4.09062 13.491 4.34375 13.6691 4.47188 13.7504C4.6 13.8285 4.825 13.9535 4.97188 14.0285C5.11875 14.1004 5.39062 14.2223 5.58125 14.2973C5.77188 14.3723 6.09375 14.4754 6.3 14.5254C6.50625 14.5785 6.82812 14.6473 7.01875 14.6754C7.2625 14.7129 7.55 14.7285 8.00313 14.7285C8.45625 14.7285 8.74375 14.7129 8.9875 14.6754C9.17813 14.6473 9.5 14.5785 9.70625 14.5254C9.9125 14.4754 10.2344 14.3723 10.425 14.2973C10.6156 14.2223 10.8875 14.1004 11.0344 14.0285C11.1813 13.9535 11.4062 13.8285 11.5344 13.7504C11.6625 13.6691 11.9156 13.491 12.0969 13.3566C12.2781 13.2191 12.5813 12.9535 12.7688 12.7629C12.9594 12.5754 13.225 12.2723 13.3625 12.091C13.4969 11.9098 13.675 11.6566 13.7563 11.5285C13.8344 11.4004 13.9594 11.1754 14.0344 11.0285C14.1062 10.8816 14.2281 10.6098 14.3031 10.4191C14.3781 10.2285 14.4812 9.90663 14.5312 9.70038C14.5844 9.49413 14.6531 9.17226 14.6812 8.98163C14.7188 8.73788 14.7344 8.45038 14.7344 7.99726C14.7344 7.54413 14.7188 7.25663 14.6812 7.01288C14.6531 6.82226 14.5844 6.50038 14.5312 6.29413C14.4812 6.08788 14.3781 5.76601 14.3031 5.57538C14.2281 5.38476 14.1062 5.11288 14.0344 4.96601C13.9594 4.81913 13.8344 4.59413 13.7563 4.46601C13.675 4.33788 13.4969 4.08476 13.3625 3.90351C13.225 3.72226 12.9594 3.41913 12.7688 3.23163C12.5813 3.04101 12.2781 2.77538 12.0969 2.63788C11.9156 2.50351 11.6625 2.32538 11.5344 2.24413C11.4062 2.16601 11.1813 2.04101 11.0344 1.96601C10.8875 1.89413 10.6062 1.76913 10.4094 1.69413C10.2125 1.61601 9.8875 1.51288 9.69063 1.46288C9.49375 1.41288 9.19063 1.35038 9.01875 1.32538C8.84688 1.29726 8.45312 1.26913 8.14375 1.26288C7.83438 1.25976 7.525 1.25976 7.45625 1.26601C7.3875 1.27226 7.18438 1.30038 7.00313 1.32538ZM8.08125 4.04101C8.45625 4.05038 8.55625 4.06288 8.76875 4.13476C8.90625 4.18163 9.09688 4.26288 9.19063 4.31601C9.28438 4.36913 9.44063 4.47226 9.53438 4.54413C9.62813 4.61601 9.7625 4.73788 9.83125 4.81288C9.90312 4.88788 10.0063 5.01913 10.0656 5.10663C10.125 5.19101 10.2156 5.36288 10.2719 5.48163C10.3281 5.60038 10.3969 5.79101 10.4281 5.90351C10.4688 6.05038 10.4844 6.21913 10.4844 6.51288C10.4844 6.80663 10.4688 6.97538 10.4281 7.12226C10.3969 7.23476 10.325 7.43163 10.2625 7.55976C10.2031 7.68788 10.0938 7.87851 10.0219 7.98163C9.94688 8.08476 9.80937 8.23788 9.71875 8.32538C9.625 8.40976 9.45625 8.54101 9.34688 8.61601C9.23438 8.68788 9.02812 8.79413 8.62813 8.95038V9.51288C8.62813 10.0348 8.625 10.0848 8.55937 10.2129C8.51875 10.291 8.43437 10.3973 8.36875 10.4473C8.25625 10.5379 8.22813 10.5441 8.00313 10.5441C7.77813 10.5441 7.75 10.5379 7.6375 10.4473C7.57187 10.3973 7.4875 10.291 7.44688 10.2129C7.37813 10.0785 7.37813 10.0504 7.37813 9.16913C7.37813 8.36601 7.38437 8.24726 7.43437 8.13788C7.46562 8.06913 7.54688 7.96601 7.61562 7.91288C7.68125 7.85663 7.77188 7.80351 7.81563 7.79413C7.85938 7.78476 8 7.76288 8.12813 7.74726C8.26875 7.72851 8.4375 7.68163 8.55 7.62851C8.65312 7.57851 8.8 7.47226 8.87813 7.39413C8.95625 7.31601 9.05625 7.17851 9.10625 7.08476C9.15312 6.99413 9.20625 6.82851 9.225 6.71601C9.25313 6.56601 9.25313 6.45976 9.225 6.30976C9.20625 6.19726 9.15312 6.03163 9.10312 5.94101C9.05625 5.84726 8.95625 5.70976 8.87813 5.63163C8.8 5.55351 8.64688 5.44413 8.53438 5.39101C8.34688 5.30038 8.30625 5.29413 8.00313 5.29413C7.7 5.29413 7.65938 5.30038 7.47188 5.39101C7.35938 5.44413 7.20625 5.55351 7.12813 5.63163C7.05 5.70976 6.94688 5.84726 6.9 5.94101C6.84375 6.04726 6.8 6.19413 6.78125 6.35663C6.7625 6.49413 6.72813 6.66601 6.70312 6.73788C6.675 6.82538 6.6125 6.90976 6.525 6.98163C6.45312 7.04413 6.34375 7.10038 6.28438 7.11288C6.225 7.12226 6.10313 7.12226 6.01875 7.11288C5.90938 7.10038 5.82812 7.06601 5.75313 7.00663C5.69375 6.95663 5.6125 6.85351 5.57188 6.77538C5.50625 6.65351 5.5 6.60663 5.5125 6.37226C5.52187 6.22538 5.55313 6.01601 5.58125 5.90351C5.60938 5.79101 5.67812 5.60038 5.73438 5.48163C5.79063 5.36288 5.88125 5.19101 5.94063 5.10663C6 5.01913 6.10313 4.88788 6.175 4.81288C6.24375 4.73788 6.37813 4.61601 6.47188 4.54413C6.56563 4.47226 6.72188 4.36913 6.81563 4.31601C6.90938 4.26288 7.07812 4.19101 7.19063 4.15351C7.30313 4.11601 7.45 4.07226 7.51875 4.05976C7.5875 4.04413 7.84063 4.03476 8.08125 4.04101ZM7.99375 11.0598C8.10312 11.0598 8.2375 11.0785 8.29062 11.1004C8.34687 11.1254 8.44687 11.191 8.51562 11.2504C8.58125 11.3098 8.66562 11.4129 8.7 11.4816C8.75 11.5723 8.76562 11.6629 8.76562 11.8254C8.76562 11.9879 8.75 12.0785 8.7 12.1691C8.66562 12.2379 8.58125 12.341 8.51562 12.4004C8.44687 12.4598 8.34687 12.5254 8.29062 12.5504C8.2375 12.5723 8.10625 12.591 8.00313 12.591C7.9 12.591 7.76875 12.5723 7.7125 12.5504C7.65938 12.5254 7.55937 12.4598 7.49062 12.4004C7.425 12.341 7.34063 12.2379 7.30625 12.1691C7.25625 12.0785 7.24062 11.9879 7.24062 11.8254C7.24062 11.6629 7.25625 11.5723 7.30625 11.4816C7.34063 11.4129 7.425 11.3098 7.49062 11.2504C7.55937 11.191 7.65313 11.1254 7.70625 11.1035C7.75625 11.0816 7.8875 11.0629 7.99375 11.0598Z"
                      fill="#7795E8"
                    />
                  </svg>
                  {/* Text */}
                  <span
                    style={{
                      color: "#7795E8",
                      fontSize: "10px",
                      whiteSpace: "nowrap",
                      fontFamily: "Manrope, sans-serif",
                    }}
                  >
                    Having problems?{" "}
                    <a
                      href="#"
                      style={{
                        color: "#FFC727",
                        textDecoration: "none",
                        fontWeight: 600,
                        fontSize: "10px",
                        fontFamily: "Manrope, sans-serif",
                      }}
                    >
                      Contact support
                    </a>
                  </span>
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {/* Email */}
                <input
                  placeholder="Email or Username"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                  style={{
                    width: "100%",
                    height: "44px",
                    backgroundColor: "#112F82",
                    border: "none",
                    borderRadius: "8px",
                    padding: "0 16px",
                    color: "#ffffff",
                    fontSize: "14px",
                    fontFamily: "Inter, sans-serif",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />

                {/* Password */}
                <div style={{ position: "relative" }}>
                  <input
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    style={{
                      width: "100%",
                      height: "44px",
                      backgroundColor: "#112F82",
                      border: "none",
                      borderRadius: "8px",
                      padding: "0 44px 0 16px",
                      color: "#ffffff",
                      fontSize: "14px",
                      fontFamily: "Inter, sans-serif",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "#8899cc",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>

                {/* Forgot password */}
                <a
                  href="#"
                  style={{
                    color: "#1463FF",
                    fontSize: "12px",
                    fontFamily: "Inter, sans-serif",
                    textDecoration: "none",
                    textAlign: "right",
                  }}
                >
                  Forgot password?
                </a>

                {/* Login button */}
                <button
                  onClick={handleLogin}
                  style={{
                    width: "100%",
                    height: "48px",
                    backgroundColor: "#1463FF",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "15px",
                    fontWeight: 700,
                    fontFamily: "Jost, sans-serif",
                    cursor: "pointer",
                    marginTop: "4px",
                  }}
                >
                  Log In
                </button>

                {/* Support */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    flexWrap: "nowrap",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.9625 0.000382023C8.41562 -0.00274298 8.66875 0.012882 9.00625 0.062882C9.25313 0.097257 9.60625 0.159757 9.79688 0.203507C9.9875 0.244132 10.325 0.341007 10.5469 0.416007C10.7688 0.491007 11.0813 0.609757 11.2344 0.678507C11.3875 0.750382 11.6625 0.887882 11.8438 0.984757C12.025 1.08163 12.2906 1.24413 12.4375 1.34101C12.5844 1.43788 12.8438 1.63163 13.0156 1.76913C13.1875 1.90663 13.475 2.16601 13.6531 2.34413C13.8313 2.52226 14.0906 2.80976 14.2281 2.98163C14.3656 3.15351 14.5594 3.41288 14.6562 3.55976C14.7531 3.70663 14.9156 3.97226 15.0125 4.15351C15.1094 4.33476 15.2469 4.60976 15.3188 4.76288C15.3875 4.91601 15.5125 5.24726 15.5938 5.49726C15.6781 5.74726 15.7812 6.12538 15.825 6.34101C15.8687 6.55663 15.925 6.90038 15.9531 7.10663C15.9781 7.31288 16 7.70663 16 7.98163C16 8.25663 15.9781 8.65663 15.9531 8.87226C15.925 9.08788 15.8687 9.43788 15.825 9.65351C15.7812 9.86913 15.6781 10.2473 15.5938 10.4973C15.5125 10.7473 15.3875 11.0785 15.3188 11.2316C15.2469 11.3848 15.1094 11.6598 15.0125 11.841C14.9156 12.0223 14.7531 12.2879 14.6562 12.4348C14.5594 12.5816 14.3656 12.841 14.2281 13.0129C14.0906 13.1848 13.8313 13.4723 13.6531 13.6504C13.475 13.8285 13.1875 14.0879 13.0156 14.2254C12.8438 14.3629 12.5844 14.5566 12.4375 14.6535C12.2906 14.7504 12.025 14.9129 11.8438 15.0098C11.6625 15.1066 11.3875 15.2441 11.2344 15.316C11.0813 15.3848 10.7688 15.5035 10.5469 15.5785C10.325 15.6535 9.9875 15.7504 9.79688 15.791C9.60625 15.8348 9.25313 15.8973 9.00625 15.9316C8.69063 15.9785 8.40312 15.9973 8 15.9973C7.59688 15.9973 7.30937 15.9785 6.99062 15.9316C6.74687 15.8973 6.39375 15.8348 6.20312 15.791C6.0125 15.7504 5.675 15.6535 5.45312 15.5785C5.22813 15.5035 4.91875 15.3848 4.76562 15.316C4.6125 15.2441 4.3375 15.1066 4.15625 15.0098C3.975 14.9129 3.70937 14.7504 3.5625 14.6535C3.41563 14.5566 3.15625 14.3629 2.98438 14.2254C2.8125 14.0879 2.525 13.8285 2.34687 13.6504C2.16875 13.4723 1.90938 13.1848 1.77188 13.0129C1.63437 12.841 1.44062 12.5816 1.34375 12.4348C1.24688 12.2879 1.08438 12.0223 0.9875 11.841C0.890625 11.6598 0.753125 11.3848 0.68125 11.2316C0.6125 11.0785 0.4875 10.7473 0.40625 10.4973C0.321875 10.2473 0.21875 9.86913 0.175 9.65351C0.13125 9.43788 0.075 9.09413 0.046875 8.88788C0.021875 8.68163 0 8.28788 0 8.01288C0 7.73788 0.021875 7.33788 0.046875 7.12226C0.075 6.90663 0.13125 6.55663 0.175 6.34101C0.21875 6.12538 0.321875 5.74726 0.40625 5.49726C0.4875 5.24726 0.6125 4.91601 0.68125 4.76288C0.753125 4.60976 0.890625 4.33476 0.9875 4.15351C1.08438 3.97226 1.24688 3.70663 1.34375 3.55976C1.44062 3.41288 1.63437 3.15351 1.77188 2.98163C1.90938 2.80976 2.16875 2.52226 2.34687 2.34413C2.525 2.16601 2.8125 1.90663 2.98438 1.76913C3.15625 1.63163 3.41563 1.43788 3.5625 1.34101C3.70937 1.24413 3.975 1.08163 4.15625 0.984757C4.3375 0.887882 4.6125 0.750382 4.76562 0.678507C4.91875 0.609757 5.25 0.484757 5.5 0.403507C5.75 0.322257 6.09375 0.225382 6.26562 0.187882C6.4375 0.150382 6.75313 0.094132 6.96875 0.062882C7.23438 0.022257 7.55 0.00350702 7.95937 0.000382023H7.9625ZM7.00313 1.32538C6.82188 1.35038 6.50625 1.41601 6.3 1.46913C6.09375 1.51913 5.77188 1.62226 5.58125 1.69726C5.39062 1.77226 5.11875 1.89413 4.97188 1.96601C4.825 2.04101 4.6 2.16601 4.47188 2.24413C4.34375 2.32538 4.09062 2.50351 3.90937 2.63788C3.72812 2.77538 3.425 3.04101 3.2375 3.23163C3.04688 3.41913 2.78125 3.72226 2.64375 3.90351C2.50937 4.08476 2.33125 4.33788 2.25 4.46601C2.17188 4.59413 2.04688 4.81913 1.97187 4.96601C1.9 5.11288 1.77813 5.38476 1.70312 5.57538C1.62812 5.76601 1.525 6.08788 1.475 6.29413C1.42188 6.50038 1.35313 6.82226 1.325 7.01288C1.2875 7.25663 1.27188 7.54413 1.27188 7.99726C1.27188 8.45038 1.2875 8.73788 1.325 8.98163C1.35313 9.17226 1.42188 9.49413 1.475 9.70038C1.525 9.90663 1.62812 10.2285 1.70312 10.4191C1.77813 10.6098 1.9 10.8816 1.97187 11.0285C2.04688 11.1754 2.17188 11.4004 2.25 11.5285C2.33125 11.6566 2.50937 11.9098 2.64375 12.091C2.78125 12.2723 3.04688 12.5754 3.2375 12.7629C3.425 12.9535 3.72812 13.2191 3.90937 13.3566C4.09062 13.491 4.34375 13.6691 4.47188 13.7504C4.6 13.8285 4.825 13.9535 4.97188 14.0285C5.11875 14.1004 5.39062 14.2223 5.58125 14.2973C5.77188 14.3723 6.09375 14.4754 6.3 14.5254C6.50625 14.5785 6.82812 14.6473 7.01875 14.6754C7.2625 14.7129 7.55 14.7285 8.00313 14.7285C8.45625 14.7285 8.74375 14.7129 8.9875 14.6754C9.17813 14.6473 9.5 14.5785 9.70625 14.5254C9.9125 14.4754 10.2344 14.3723 10.425 14.2973C10.6156 14.2223 10.8875 14.1004 11.0344 14.0285C11.1813 13.9535 11.4062 13.8285 11.5344 13.7504C11.6625 13.6691 11.9156 13.491 12.0969 13.3566C12.2781 13.2191 12.5813 12.9535 12.7688 12.7629C12.9594 12.5754 13.225 12.2723 13.3625 12.091C13.4969 11.9098 13.675 11.6566 13.7563 11.5285C13.8344 11.4004 13.9594 11.1754 14.0344 11.0285C14.1062 10.8816 14.2281 10.6098 14.3031 10.4191C14.3781 10.2285 14.4812 9.90663 14.5312 9.70038C14.5844 9.49413 14.6531 9.17226 14.6812 8.98163C14.7188 8.73788 14.7344 8.45038 14.7344 7.99726C14.7344 7.54413 14.7188 7.25663 14.6812 7.01288C14.6531 6.82226 14.5844 6.50038 14.5312 6.29413C14.4812 6.08788 14.3781 5.76601 14.3031 5.57538C14.2281 5.38476 14.1062 5.11288 14.0344 4.96601C13.9594 4.81913 13.8344 4.59413 13.7563 4.46601C13.675 4.33788 13.4969 4.08476 13.3625 3.90351C13.225 3.72226 12.9594 3.41913 12.7688 3.23163C12.5813 3.04101 12.2781 2.77538 12.0969 2.63788C11.9156 2.50351 11.6625 2.32538 11.5344 2.24413C11.4062 2.16601 11.1813 2.04101 11.0344 1.96601C10.8875 1.89413 10.6062 1.76913 10.4094 1.69413C10.2125 1.61601 9.8875 1.51288 9.69063 1.46288C9.49375 1.41288 9.19063 1.35038 9.01875 1.32538C8.84688 1.29726 8.45312 1.26913 8.14375 1.26288C7.83438 1.25976 7.525 1.25976 7.45625 1.26601C7.3875 1.27226 7.18438 1.30038 7.00313 1.32538ZM8.08125 4.04101C8.45625 4.05038 8.55625 4.06288 8.76875 4.13476C8.90625 4.18163 9.09688 4.26288 9.19063 4.31601C9.28438 4.36913 9.44063 4.47226 9.53438 4.54413C9.62813 4.61601 9.7625 4.73788 9.83125 4.81288C9.90312 4.88788 10.0063 5.01913 10.0656 5.10663C10.125 5.19101 10.2156 5.36288 10.2719 5.48163C10.3281 5.60038 10.3969 5.79101 10.4281 5.90351C10.4688 6.05038 10.4844 6.21913 10.4844 6.51288C10.4844 6.80663 10.4688 6.97538 10.4281 7.12226C10.3969 7.23476 10.325 7.43163 10.2625 7.55976C10.2031 7.68788 10.0938 7.87851 10.0219 7.98163C9.94688 8.08476 9.80937 8.23788 9.71875 8.32538C9.625 8.40976 9.45625 8.54101 9.34688 8.61601C9.23438 8.68788 9.02812 8.79413 8.62813 8.95038V9.51288C8.62813 10.0348 8.625 10.0848 8.55937 10.2129C8.51875 10.291 8.43437 10.3973 8.36875 10.4473C8.25625 10.5379 8.22813 10.5441 8.00313 10.5441C7.77813 10.5441 7.75 10.5379 7.6375 10.4473C7.57187 10.3973 7.4875 10.291 7.44688 10.2129C7.37813 10.0785 7.37813 10.0504 7.37813 9.16913C7.37813 8.36601 7.38437 8.24726 7.43437 8.13788C7.46562 8.06913 7.54688 7.96601 7.61562 7.91288C7.68125 7.85663 7.77188 7.80351 7.81563 7.79413C7.85938 7.78476 8 7.76288 8.12813 7.74726C8.26875 7.72851 8.4375 7.68163 8.55 7.62851C8.65312 7.57851 8.8 7.47226 8.87813 7.39413C8.95625 7.31601 9.05625 7.17851 9.10625 7.08476C9.15312 6.99413 9.20625 6.82851 9.225 6.71601C9.25313 6.56601 9.25313 6.45976 9.225 6.30976C9.20625 6.19726 9.15312 6.03163 9.10312 5.94101C9.05625 5.84726 8.95625 5.70976 8.87813 5.63163C8.8 5.55351 8.64688 5.44413 8.53438 5.39101C8.34688 5.30038 8.30625 5.29413 8.00313 5.29413C7.7 5.29413 7.65938 5.30038 7.47188 5.39101C7.35938 5.44413 7.20625 5.55351 7.12813 5.63163C7.05 5.70976 6.94688 5.84726 6.9 5.94101C6.84375 6.04726 6.8 6.19413 6.78125 6.35663C6.7625 6.49413 6.72813 6.66601 6.70312 6.73788C6.675 6.82538 6.6125 6.90976 6.525 6.98163C6.45312 7.04413 6.34375 7.10038 6.28438 7.11288C6.225 7.12226 6.10313 7.12226 6.01875 7.11288C5.90938 7.10038 5.82812 7.06601 5.75313 7.00663C5.69375 6.95663 5.6125 6.85351 5.57188 6.77538C5.50625 6.65351 5.5 6.60663 5.5125 6.37226C5.52187 6.22538 5.55313 6.01601 5.58125 5.90351C5.60938 5.79101 5.67812 5.60038 5.73438 5.48163C5.79063 5.36288 5.88125 5.19101 5.94063 5.10663C6 5.01913 6.10313 4.88788 6.175 4.81288C6.24375 4.73788 6.37813 4.61601 6.47188 4.54413C6.56563 4.47226 6.72188 4.36913 6.81563 4.31601C6.90938 4.26288 7.07812 4.19101 7.19063 4.15351C7.30313 4.11601 7.45 4.07226 7.51875 4.05976C7.5875 4.04413 7.84063 4.03476 8.08125 4.04101ZM7.99375 11.0598C8.10312 11.0598 8.2375 11.0785 8.29062 11.1004C8.34687 11.1254 8.44687 11.191 8.51562 11.2504C8.58125 11.3098 8.66562 11.4129 8.7 11.4816C8.75 11.5723 8.76562 11.6629 8.76562 11.8254C8.76562 11.9879 8.75 12.0785 8.7 12.1691C8.66562 12.2379 8.58125 12.341 8.51562 12.4004C8.44687 12.4598 8.34687 12.5254 8.29062 12.5504C8.2375 12.5723 8.10625 12.591 8.00313 12.591C7.9 12.591 7.76875 12.5723 7.7125 12.5504C7.65938 12.5254 7.55937 12.4598 7.49062 12.4004C7.425 12.341 7.34063 12.2379 7.30625 12.1691C7.25625 12.0785 7.24062 11.9879 7.24062 11.8254C7.24062 11.6629 7.25625 11.5723 7.30625 11.4816C7.34063 11.4129 7.425 11.3098 7.49062 11.2504C7.55937 11.191 7.65313 11.1254 7.70625 11.1035C7.75625 11.0816 7.8875 11.0629 7.99375 11.0598Z"
                      fill="#7795E8"
                    />
                  </svg>
                  {/* Text */}
                  <span
                    style={{
                      color: "Caption dark",
                      fontSize: "10px",
                      whiteSpace: "nowrap",
                      fontFamily: "Manrope, sans-serif",
                    }}
                  >
                    Having problems?{" "}
                    <a
                      href="#"
                      style={{
                        color: "#FFC727",
                        textDecoration: "none",
                        fontWeight: 600,
                        fontSize: "10px",
                        fontFamily: "Manrope, sans-serif",
                      }}
                    >
                      Contact support
                    </a>
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
