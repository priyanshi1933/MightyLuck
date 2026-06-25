"use client";

import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function DepositCryptoModal({
  isOpen,
  onClose,
}: Props) {
  const [activeTab, setActiveTab] = useState("deposit");
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(3,8,26,0.75)",
        backdropFilter: "blur(6px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        fontFamily:"'Inter', system-ui, sans-serif",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "520px",
          background:  "linear-gradient(180deg, #0a173d 0%, #060d24 100%)",
            border: "1px solid #142554",
          borderRadius: "24px",
          padding: "32px 28px 28px 28px",
          color: "#ffffff",
          position: "relative",
          boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.5)",
          boxSizing: "border-box",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            right: "-40px",
            top: "0px",
            background: "transparent",
            border: "none",
            color: "#8fa0cc",
            cursor: "pointer",
            fontSize: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "4px",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#8fa0cc")}
        >
         <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
          </svg>
        </button>
{/* ahiya thi baki chhe */}
        <h3
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Wallet
        </h3>

        {/* Tabs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "6px",
            marginBottom: "20px",
          }}
        >
          <button>Deposit</button>
          <button>Bonuses</button>
          <button>Withdraw</button>
          <button>Transactions</button>
        </div>

        {/* Bonus */}
        <div style={{ marginBottom: "15px" }}>
          <p>1. Select a Bonus</p>
          <select
            style={{
              width: "100%",
              height: "42px",
              borderRadius: "8px",
            }}
          >
            <option>150% Reload Bonus + 30 Free Spins</option>
          </select>
        </div>

        {/* Crypto */}
        <div style={{ marginBottom: "15px" }}>
          <p>2. Select a payment method</p>
          <select
            style={{
              width: "100%",
              height: "42px",
              borderRadius: "8px",
            }}
          >
            <option>Bitcoin</option>
          </select>
        </div>

        {/* Amount */}
        <div style={{ marginBottom: "15px" }}>
          <p>3. Calculate the amount</p>

          <div
            style={{
              display: "flex",
              gap: "8px",
            }}
          >
            <input
              placeholder="100"
              style={{
                flex: 1,
                height: "42px",
              }}
            />

            <input
              value="0.00954"
              readOnly
              style={{
                flex: 1,
                height: "42px",
              }}
            />
          </div>
        </div>

        {/* Address */}
        <div style={{ marginBottom: "20px" }}>
          <p>4. BTC Deposit Address</p>

          <div
            style={{
              background: "#102C82",
              borderRadius: "8px",
              padding: "12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>bc1q7ndh...</span>

            <button
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Copy
            </button>
          </div>
        </div>

        <button
          style={{
            width: "100%",
            height: "48px",
            borderRadius: "10px",
            background: "#FFC83D",
            border: "none",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          I've completed my deposit
        </button>
      </div>
    </div>
  );
}