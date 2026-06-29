"use client";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import HeroBanner from "@/components/sections/HeroBanner";
import DepositStrip from "@/components/sections/DepositStrip";
import SlotsSection from "@/components/sections/SlotsSection";
import { useAppSelector } from "@/app/store/hooks";
import { useEffect, useState } from "react";
import OriginalSection from "@/components/sections/OriginalSection";
import WhyJoinSection from "@/components/sections/WhyJoinSection";
import CrashGame from "@/components/sections/CrashGame";
import GameProvider from "@/components/sections/GameProvider";
import TableGame from "@/components/sections/TableGame";
import BonusBuy from "@/components/sections/BonusBuy";
import Collection from "@/components/sections/Collection";
import RecentWinner from "@/components/sections/RecentWinner";
import AboutSection from "@/components/sections/AboutSection";
import Footer from "@/components/layout/Footer";
import AuthModal from "@/components/ui/AuthModal";
import DepositCryptoModal from "@/components/ui/DepositCryptoModal";

export default function Home() {
  const sidebarOpen = useAppSelector((s) => s.ui.sidebarOpen);
  const [isMobile, setIsMobile] = useState(false);
  const [authModal, setAuthModal] = useState(false);
  const [authTab, setAuthTab] = useState<"join" | "login">("join");
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [activeGameTab, setActiveGameTab] = useState("lobby");

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#091741",
        minHeight: "100vh",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <Navbar
        onLogin={() => {
          setAuthTab("login");
          setAuthModal(true);
        }}
        onJoin={() => {
          setAuthTab("join");
          setAuthModal(true);
        }}
        onDeposit={() => setShowDepositModal(true)}
        onLogout={()=>{
          window.location.reload();
        }}
      />
      <Sidebar />

      <main
        style={{
          marginLeft: isMobile ? "0px" : sidebarOpen ? "240px" : "0px",
          paddingTop: "60px",
          paddingBottom: isMobile ? "60px" : "0", // ← space for bottom nav
          boxSizing: "border-box",
          transition: "margin-left 0.3s ease",
        }}
      >
        <div
          style={{
            padding: isMobile ? "10px 10px 0" : "16px 16px 0",
            boxSizing: "border-box",
          }}
        >
          <HeroBanner />
        </div>

        <AuthModal isOpen={authModal} onClose={() => setAuthModal(false)} />
        <DepositCryptoModal
          isOpen={showDepositModal}
          onClose={() => setShowDepositModal(false)}
        />

        <div
          style={{
            marginTop: "12px",
            padding: isMobile ? "0 10px" : "0",
            boxSizing: "border-box",
            margin: "20px",
          }}
        >
          <DepositStrip onTabChange={(tab) => setActiveGameTab(tab)} />
        </div>

        {/* <div
          style={{
            padding: isMobile ? "0 10px 24px" : "0 16px 24px",
            boxSizing: "border-box",
          }}
        >
          <SlotsSection />
        </div>

        <div
          style={{
            padding: isMobile ? "0 10px 24px" : "0 16px 24px",
            boxSizing: "border-box",
          }}
        >
          <OriginalSection />
        </div>


        <div
          style={{
            padding: isMobile ? "0 10px 24px" : "0 16px 24px",
            boxSizing: "border-box",
          }}
        >
          <WhyJoinSection />
        </div>

        <div
          style={{
            padding: isMobile ? "0 10px 24px" : "0 16px 24px",
            boxSizing: "border-box",
          }}
        >
          <CrashGame />
        </div>

        <div
          style={{
            padding: isMobile ? "0 10px 24px" : "0 16px 24px",
            boxSizing: "border-box",
          }}
        >
          <GameProvider />
        </div>

        <div
          style={{
            padding: isMobile ? "0 10px 24px" : "0 16px 24px",
            boxSizing: "border-box",
          }}
        >
          <TableGame />
        </div>

        <div
          style={{
            padding: isMobile ? "0 10px 24px" : "0 16px 24px",
            boxSizing: "border-box",
          }}
        >
          <BonusBuy />
        </div>

        <div
          style={{
            padding: isMobile ? "0 10px 24px" : "0 16px 24px",
            boxSizing: "border-box",
          }}
        >
          <Collection />
        </div>

        <div
          style={{
            padding: isMobile ? "0 10px 24px" : "0 16px 24px",
            boxSizing: "border-box",
          }}
        >
          <RecentWinner />
        </div> */}

          <div
  style={{
    padding: isMobile ? "0 10px 24px" : "0 16px 24px",
    boxSizing: "border-box",
  }}
>
  {activeGameTab === "lobby" && (
    <>
      <SlotsSection />
      <OriginalSection />
      <WhyJoinSection />
      <CrashGame />
      <GameProvider />
      <TableGame />
      <BonusBuy />
      <Collection />
      <RecentWinner />
    </>
  )}

  {activeGameTab === "slots" && <SlotsSection />}

  {activeGameTab === "originals" && <OriginalSection />}

  {activeGameTab === "providers" && <GameProvider />}

  {activeGameTab === "collection" && <Collection />}

  {activeGameTab === "crash" && <CrashGame />}

  {activeGameTab === "table" && <TableGame />}

  {activeGameTab === "bonus" && <BonusBuy />}
</div>

        <div
          style={{
            padding: isMobile ? "0 10px 24px" : "0 16px 24px",
            boxSizing: "border-box",
          }}
        >
          <AboutSection />
        </div>
      </main>
      <div
        style={{
          marginLeft: isMobile ? "0px" : sidebarOpen ? "240px" : "0px",
          transition: "margin-left 0.3s ease",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}
