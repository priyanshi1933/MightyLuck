



"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { setActiveNav, toggleCasino, toggleLiveCasino } from "@/app/store";

/* ── REUSABLE NAV ITEM ── */
function NavItem({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        width: "100%",
        padding: "10px 12px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        backgroundColor: active ? "rgba(255,255,255,0.08)" : "transparent",
        boxSizing: "border-box",
        textAlign: "left",
      }}
    >
      {icon}
      <span
        style={{
          color: active ? "#fff" : "#7B8EC8",
          fontSize: "13px",
          fontWeight: active ? 600 : 400,
        }}
      >
        {label}
      </span>
    </button>
  );
}

/* ── REUSABLE SUB NAV ITEM ── */
function SubNavItem({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        width: "100%",
        padding: "8px 12px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        backgroundColor: active ? "rgba(255,255,255,0.08)" : "transparent",
        boxSizing: "border-box",
        textAlign: "left",
      }}
    >
      {icon}
      <span
        style={{
          color: active ? "#fff" : "#7B8EC8",
          fontSize: "13px",
          fontWeight: active ? 600 : 400,
        }}
      >
        {label}
      </span>
    </button>
  );
}

/* ── MAIN SIDEBAR COMPONENT ── */
export default function Sidebar() {
  const dispatch = useAppDispatch();
  const { sidebarOpen, activeNav, casinoExpanded, liveCasinoExpanded } =
    useAppSelector((s) => s.ui);

  if (!sidebarOpen) return null;

  return (
    // <aside
    //   style={{
    //     backgroundColor: "#070b1e",
    //     width: "240px",
    //     position: "fixed",
    //     left: 0,
    //     top: "60px",
    //     height: "calc(100vh - 60px)",
    //     zIndex: 40,
    //     overflowY: "auto",
    //     overflowX: "hidden",
    //     display: "flex",
    //     flexDirection: "column",
    //     gap: "8px", 
    //     padding: "12px 10px",
    //     boxSizing: "border-box",
    //     fontFamily: "system-ui, -apple-system, sans-serif"
    //   }}
    // >
    <aside
  style={{
    backgroundColor: "#070b1e",

    width:
      typeof window !== "undefined" && window.innerWidth < 768
        ? "85vw"
        : "240px",

    maxWidth: "320px",

    position: "fixed",
    left: 0,
    top: "60px",

    height: "calc(100vh - 60px)",

    zIndex: 100,

    overflowY: "auto",
    overflowX: "hidden",

    display: "flex",
    flexDirection: "column",
    gap: "8px",

    padding: "12px 10px",
    boxSizing: "border-box",

    transform: sidebarOpen
      ? "translateX(0)"
      : "translateX(-100%)",

    transition: "transform 0.3s ease",

    fontFamily: "system-ui, -apple-system, sans-serif",
  }}
>
      {/* --- Top Banner Promo Block --- */}
      <div
        style={{
          background: "linear-gradient(180deg, #132252 0%, #0c1437 100%)",
          borderRadius: "12px",
          padding: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "6px"
        }}
      >
        <div style={{ display: "flex", gap: "6px" }}>
          <img src="/refer.png" alt="Refer" style={{ width: "50%", borderRadius: "8px" }} />
          <img src="/vip.png" alt="VIP" style={{ width: "50%", borderRadius: "8px" }} />
        </div>
        <img src="/winter.png" alt="Winter Rush" style={{ width: "100%", borderRadius: "8px", display: "block" }} />
      </div>

      {/* --- SINGLE UNIFIED NAVIGATION WRAPPER CARD --- */}
      <div
        style={{
          background: "linear-gradient(180deg, #101c42 0%, #090f2b 100%)",
          borderRadius: "14px",
          padding: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "6px"
        }}
      >
        {/* Separate Inner Item Box: Promotions */}
        <div
          style={{
            backgroundColor: activeNav === "Promotions" ? "transparent" : "#112F82",
            borderRadius: "10px",
            padding: "2px"
          }}
        >
          <NavItem
            icon={<img src="/promotion.png" alt="Promotions" style={{ width: "18px", height: "18px" }} />}
            label="Promotions"
            active={activeNav === "Promotions"}
            onClick={() => dispatch(setActiveNav("Promotions"))}
          />
        </div>

        {/* Separate Inner Item Box: VIP Program */}
        <div
          style={{
            backgroundColor: activeNav === "VIP Program" ? "transparent" : "#112F82",
            borderRadius: "10px",
            padding: "2px"
          }}
        >
          <NavItem
            icon={<img src="/vip-program.png" alt="VIP Program" style={{ width: "18px", height: "18px" }} />}
            label="VIP Program"
            active={activeNav === "VIP Program"}
            onClick={() => dispatch(setActiveNav("VIP Program"))}
          />
        </div>

        {/* Separate Inner Item Box: Tournaments */}
        <div
          style={{
            backgroundColor: activeNav === "Tournaments" ? "transparent" : "#112F82",
            borderRadius: "10px",
            padding: "2px"
          }}
        >
          <NavItem
            icon={<img src="/tournament.png" alt="Tournaments" style={{ width: "18px", height: "18px" }} />}
            label="Tournaments"
            active={activeNav === "Tournaments"}
            onClick={() => dispatch(setActiveNav("Tournaments"))}
          />
        </div>

        {/* Separate Inner Item Box: Casino Accordion Folder Block */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            borderRadius: "10px",
            padding: "4px",
            display: "flex",
            flexDirection: "column",
            gap: "4px"
          }}
        >
          <button
            onClick={() => dispatch(toggleCasino())}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              padding: "10px 12px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              backgroundColor: casinoExpanded ? "#1d64f2" : "transparent",
              transition: "background-color 0.2s ease",
              boxSizing: "border-box"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img src="/casino.png" alt="Casino" style={{ width: "18px", height: "18px" }} />
              <span style={{ color: "#fff", fontSize: "14px", fontWeight: 600 }}>Casino</span>
            </div>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              {casinoExpanded ? (
                <path d="M18 15L12 9L6 15" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              ) : (
                <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              )}
            </svg>
          </button>

          {/* Sub Menu Links */}
          {casinoExpanded && (
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "2px 4px", background: "#112F82", borderRadius: "8px" }}>
              {["All Games", "New Games", "Popular Games", "Original Games", "Crash Games"].map((gameType, idx) => {
                const paths = ["all-game", "new-game", "popular-game", "original-game", "crash-game"];
                return (
                  <SubNavItem
                    key={gameType}
                    icon={<img src={`/${paths[idx]}.png`} alt={gameType} style={{ width: "16px", height: "16px", opacity: 0.8 }} />}
                    label={gameType}
                    active={activeNav === gameType}
                    onClick={() => dispatch(setActiveNav(gameType))}
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* Separate Inner Item Box: Live Casino Accordion */}
        <div
          style={{
            backgroundColor: "#112F82",
            borderRadius: "10px",
            padding: "4px"
          }}
        >
          <button
            onClick={() => dispatch(toggleLiveCasino())}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              padding: "10px 12px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              backgroundColor: liveCasinoExpanded ? "#1d64f2" : "transparent",
              transition: "background-color 0.2s ease",
              boxSizing: "border-box"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img src="/live.png" alt="Live Casino" style={{ width: "18px", height: "18px" }} />
              <span style={{ color: "#fff", fontSize: "14px", fontWeight: 600 }}>Live Casino</span>
            </div>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              {liveCasinoExpanded ? (
                <path d="M18 15L12 9L6 15" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              ) : (
                <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Separate Inner Item Box: Live Support */}
        <div
          style={{
            backgroundColor: activeNav === "Live Support" ? "transparent" : "#112F82",
            borderRadius: "10px",
            padding: "2px"
          }}
        >
          <NavItem
            icon={<img src="/live-support.png" alt="Live Support" style={{ width: "18px", height: "18px" }} />}
            label="Live Support"
            active={activeNav === "Live Support"}
            onClick={() => dispatch(setActiveNav("Live Support"))}
          />
        </div>
      </div>
    </aside>
  );
}
