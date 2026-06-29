"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { setActiveNav, toggleCasino, toggleLiveCasino, toggleSidebar } from "@/app/store";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600"],
});

const menuTextStyle = {
  fontFamily: manrope.style.fontFamily,
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "16px",
  letterSpacing: "0.02em",
};

function NavItem({ icon, label, active, onClick }: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} style={{
      display: "flex", alignItems: "center", gap: "10px",
      width: "100%", padding: "10px 12px", borderRadius: "8px",
      border: "none", cursor: "pointer",
      backgroundColor: active ? "rgba(255,255,255,0.08)" : "transparent",
      boxSizing: "border-box", textAlign: "left",
    }}>
      {icon}
      <span style={{ ...menuTextStyle,color: active ? "#fff" : "#7B8EC8" }}>
        {label}
      </span>
    </button>
  );
}

function SubNavItem({ icon, label, active, onClick }: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} style={{
      display: "flex", alignItems: "center", gap: "10px",
      width: "100%", padding: "8px 12px", borderRadius: "8px",
      border: "none", cursor: "pointer",
      backgroundColor: active ? "rgba(255,255,255,0.08)" : "transparent",
      boxSizing: "border-box", textAlign: "left",
    }}>
      {icon}
      <span style={{ ...menuTextStyle,color: active ? "#fff" : "#7B8EC8"}}>
        {label}
      </span>
    </button>
  );
}

export default function Sidebar() {
  const dispatch = useAppDispatch();
  const { sidebarOpen, activeNav, casinoExpanded, liveCasinoExpanded } = useAppSelector((s) => s.ui);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      

      {/* Sidebar */}
      <aside style={{
        backgroundColor: "#070b1e",
        width: isMobile ? "100vw" : "240px",
        maxWidth: isMobile ? "100vw" : "320px",
        position: "fixed",
        left: 0,
        top: "60px",
        height: isMobile ? "calc(100vh - 60px - 60px)" : "calc(100vh - 60px)",
        zIndex: 100,
        overflowY: "auto",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "12px 10px",
        boxSizing: "border-box",
        transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.3s ease",
        fontFamily: manrope.style.fontFamily,
      }}>

        {/* Top Banner */}
        <div style={{
          background: "linear-gradient(180deg, #132252 0%, #0c1437 100%)",
          borderRadius: "12px", padding: "8px",
          display: "flex", flexDirection: "column", gap: "6px",
        }}>
          <div style={{ display: "flex", gap: "6px" }}>
            <img src="/refer.png" alt="Refer" style={{ width: "50%", borderRadius: "8px" }} />
            <img src="/vip.png" alt="VIP" style={{ width: "50%", borderRadius: "8px" }} />
          </div>
          <img src="/winter.png" alt="Winter Rush" style={{ width: "100%", borderRadius: "8px", display: "block" }} />
        </div>

        {/* Nav */}
        <div style={{
          background: "linear-gradient(180deg, #101c42 0%, #090f2b 100%)",
          borderRadius: "14px", padding: "8px",
          display: "flex", flexDirection: "column", gap: "6px",
        }}>

          {/* Promotions */}
          <div style={{ backgroundColor: activeNav === "Promotions" ? "transparent" : "#112F82", borderRadius: "10px", padding: "2px" }}>
            <NavItem
              icon={<img src="/promotion.png" alt="Promotions" style={{ width: "18px", height: "18px" }} />}
              label="Promotions" active={activeNav === "Promotions"}
              onClick={() => dispatch(setActiveNav("Promotions"))}
            />
          </div>

          {/* VIP Program */}
          <div style={{ backgroundColor: activeNav === "VIP Program" ? "transparent" : "#112F82", borderRadius: "10px", padding: "2px" }}>
            <NavItem
              icon={<img src="/vip-program.png" alt="VIP Program" style={{ width: "18px", height: "18px" }} />}
              label="VIP Program" active={activeNav === "VIP Program"}
              onClick={() => dispatch(setActiveNav("VIP Program"))}
            />
          </div>

          {/* Tournaments */}
          <div style={{ backgroundColor: activeNav === "Tournaments" ? "transparent" : "#112F82", borderRadius: "10px", padding: "2px" }}>
            <NavItem
              icon={<img src="/tournament.png" alt="Tournaments" style={{ width: "18px", height: "18px" }} />}
              label="Tournaments" active={activeNav === "Tournaments"}
              onClick={() => dispatch(setActiveNav("Tournaments"))}
            />
          </div>

          {/* Casino */}
          <div style={{ backgroundColor: "rgba(255,255,255,0.03)", borderRadius: "10px", padding: "4px", display: "flex", flexDirection: "column", gap: "4px" }}>
            <button
              onClick={() => dispatch(toggleCasino())}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                width: "100%", padding: "10px 12px", borderRadius: "8px",
                border: "none", cursor: "pointer",
                backgroundColor: casinoExpanded ? "#1d64f2" : "transparent",
                transition: "background-color 0.2s ease", boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img src="/casino.png" alt="Casino" style={{ width: "18px", height: "18px" }} />
                <span style={{ ...menuTextStyle,color: "#fff" }}>Casino</span>
              </div>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                {casinoExpanded
                  ? <path d="M18 15L12 9L6 15" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  : <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                }
              </svg>
            </button>

            {casinoExpanded && (
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "2px 4px", background: "#112F82", borderRadius: "8px" }}>
                {["All Games", "New Games", "Popular Games", "Original Games", "Crash Games"].map((gameType, idx) => {
                  const paths = ["all-game", "new-game", "popular-game", "original-game", "crash-game"];
                  return (
                    <SubNavItem
                      key={gameType}
                      icon={<img src={`/${paths[idx]}.png`} alt={gameType} style={{ width: "16px", height: "16px", opacity: 0.8 }} />}
                      label={gameType} active={activeNav === gameType}
                      onClick={() => dispatch(setActiveNav(gameType))}
                    />
                  );
                })}
              </div>
            )}
          </div>

          {/* Live Casino */}
          <div style={{ backgroundColor: "#112F82", borderRadius: "10px", padding: "4px" }}>
            <button
              onClick={() => dispatch(toggleLiveCasino())}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                width: "100%", padding: "10px 12px", borderRadius: "8px",
                border: "none", cursor: "pointer",
                backgroundColor: liveCasinoExpanded ? "#1d64f2" : "transparent",
                transition: "background-color 0.2s ease", boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img src="/live.png" alt="Live Casino" style={{ width: "18px", height: "18px" }} />
                <span style={{ ...menuTextStyle,color: "#fff"}}>Live Casino</span>
              </div>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                {liveCasinoExpanded
                  ? <path d="M18 15L12 9L6 15" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  : <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                }
              </svg>
            </button>
          </div>

          {/* Live Support */}
          <div style={{ backgroundColor: activeNav === "Live Support" ? "transparent" : "#112F82", borderRadius: "10px", padding: "2px" }}>
            <NavItem
              icon={<img src="/live-support.png" alt="Live Support" style={{ width: "18px", height: "18px" }} />}
              label="Live Support" active={activeNav === "Live Support"}
              onClick={() => dispatch(setActiveNav("Live Support"))}
            />
          </div>

        </div>
      </aside>

      {/* Mobile Bottom Navigation Bar */}
      {isMobile && (
        <nav style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "60px",
          backgroundColor: "#0C1F56",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          zIndex: 200,
          boxSizing: "border-box",
          padding: "0 8px",
        }}>

          {/* Menu */}
          <button
            onClick={() => dispatch(toggleSidebar())}
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}
          >
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
              <path d="M0 0H16M0 6.857H11.429M0 13.714H16M20.571 2.286L19.253 3.288C17.086 4.935 16 5.759 16 6.857C16 7.956 17.085 8.78 19.253 10.427L20.571 11.429"
                stroke={sidebarOpen ? "#FFC83D" : "white"} strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ ...menuTextStyle,color: sidebarOpen ? "#FFC83D" : "#7B8EC8"}}>Menu</span>
          </button>

          {/* Search */}
          <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="#7B8EC8" strokeWidth="2"/>
              <path d="M16.5 16.5L21 21" stroke="#7B8EC8" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span style={{...menuTextStyle, color: "#7B8EC8" }}>Search</span>
          </button>

          {/* Offers */}
          <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="7" width="20" height="14" rx="2" stroke="#7B8EC8" strokeWidth="2"/>
              <path d="M16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7" stroke="#7B8EC8" strokeWidth="2"/>
              <line x1="12" y1="11" x2="12" y2="17" stroke="#7B8EC8" strokeWidth="2"/>
              <line x1="9" y1="14" x2="15" y2="14" stroke="#7B8EC8" strokeWidth="2"/>
            </svg>
            <span style={{...menuTextStyle, color: "#7B8EC8"}}>Offers</span>
          </button>

          {/* VIP */}
          <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                stroke="#7B8EC8" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
            <span style={{ ...menuTextStyle,color: "#7B8EC8" }}>VIP</span>
          </button>

          {/* Tourneys */}
          <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M8 21h8M12 17v4M6 3H18V13C18 15.761 15.314 18 12 18C8.686 18 6 15.761 6 13V3Z"
                stroke="#7B8EC8" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M6 7H3C3 7 3 13 6 13M18 7H21C21 7 21 13 18 13" stroke="#7B8EC8" strokeWidth="2"/>
            </svg>
            <span style={{...menuTextStyle, color: "#7B8EC8" }}>Tourneys</span>
          </button>

        </nav>
      )}
    </>
  );
}