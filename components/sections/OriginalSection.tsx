"use client";
import { useEffect, useState, useRef } from "react";

import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const originals = [
  {
    id: 1,
    image: "/o1.png",
    fallbackBg: "linear-gradient(135deg, #1a237e 0%, #283593 100%)",
  },
  {
    id: 2,
    image: "/o2.png",
    fallbackBg: "linear-gradient(135deg, #1a237e 0%, #0d1b6e 100%)",
  },
  {
    id: 3,
    image: "/o3.png",
    fallbackBg: "linear-gradient(135deg, #e65c00 0%, #f9a825 100%)",
  },
  {
    id: 4,
    image: "/o4.png",
    fallbackBg: "linear-gradient(135deg, #1b5e20 0%, #388e3c 100%)",
  },
  {
    id: 5,
    image: "/o5.png",
    fallbackBg: "linear-gradient(135deg, #4a148c 0%, #7b1fa2 100%)",
  },
  {
    id: 6,
    image: "/o6.png",
    fallbackBg: "linear-gradient(135deg, #006064 0%, #00838f 100%)",
  },
  {
    id: 7,
    image: "/o7.png",
    fallbackBg: "linear-gradient(135deg, #bf360c 0%, #e64a19 100%)",
  },
  {
    id: 8,
    image: "/o8.png",
    fallbackBg: "linear-gradient(135deg, #1a237e 0%, #283593 100%)",
  },
  {
    id: 9,
    image: "/o1.png",
    fallbackBg: "linear-gradient(135deg, #1a237e 0%, #283593 100%)",
  },
  {
    id: 10,
    image: "/o2.png",
    fallbackBg: "linear-gradient(135deg, #1a237e 0%, #0d1b6e 100%)",
  },
  {
    id: 11,
    image: "/o3.png",
    fallbackBg: "linear-gradient(135deg, #e65c00 0%, #f9a825 100%)",
  },
  {
    id: 12,
    image: "/o4.png",
    fallbackBg: "linear-gradient(135deg, #1b5e20 0%, #388e3c 100%)",
  },
  {
    id: 13,
    image: "/o5.png",
    fallbackBg: "linear-gradient(135deg, #4a148c 0%, #7b1fa2 100%)",
  },
  {
    id: 14,
    image: "/o6.png",
    fallbackBg: "linear-gradient(135deg, #006064 0%, #00838f 100%)",
  },
  {
    id: 15,
    image: "/o7.png",
    fallbackBg: "linear-gradient(135deg, #bf360c 0%, #e64a19 100%)",
  },
  {
    id: 16,
    image: "/o8.png",
    fallbackBg: "linear-gradient(135deg, #1a237e 0%, #283593 100%)",
  },
];

function GameCard({
  image,
  fallbackBg,
  isMobile,
}: {
  image: string;
  fallbackBg: string;
  isMobile: boolean;
}) {
  return (
    <div
      style={{
        position: "relative",
        width: isMobile ? "120px" : "155px",
        height: isMobile ? "165px" : "200px",
        borderRadius: "12px",
        overflow: "hidden",
        flexShrink: 0,
        cursor: "pointer",
        background: fallbackBg,
      }}
    >
      <img
        src={image}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
    </div>
  );
}

export default function OriginalSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const scrollLeft = () => {
  scrollRef.current?.scrollBy({
    left: -350,
    behavior: "smooth",
  });
};

const scrollRight = () => {
  scrollRef.current?.scrollBy({
    left: 350,
    behavior: "smooth",
  });
};
  return (
    <section
      style={{
        marginTop: "20px",
        paddingLeft: isMobile ? "12px" : "0",
        paddingRight: isMobile ? "12px" : "0",
      }}
    >
      {/* Section header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "12px",
        }}
      >
        {/* Left: icon + title */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.2252 0.645233C10.4247 0.425721 10.6309 0.279379 10.9103 0.166297L11.3094 0H16.3782C21.3937 0 21.4602 0 21.8327 0.13969C22.0988 0.239468 22.3183 0.385809 22.5312 0.605322C22.7706 0.851441 22.8771 1.02439 22.9569 1.31042C23.0234 1.54324 23.05 1.81596 23.0301 1.99557C23.0101 2.18847 22.1853 4.12417 20.6886 7.48337C19.4181 10.337 18.3671 12.7118 18.3538 12.7583C18.3338 12.8182 18.9325 12.8381 21.2008 12.8381H21.2008C24.0811 12.8381 24.0811 12.8381 24.4136 12.9978C24.5932 13.0776 24.8527 13.2639 24.9857 13.4102C25.1121 13.5499 25.2717 13.8226 25.3449 14.0022C25.438 14.2483 25.458 14.4412 25.4314 14.7339C25.4114 14.9534 25.3449 15.2328 25.285 15.3459C25.2252 15.4656 22.5644 18.6985 19.3715 22.5299C16.1786 26.3681 13.4779 29.5676 13.3715 29.6408C13.2584 29.7206 13.0522 29.8337 12.9059 29.8936C12.7595 29.9534 12.5001 30 12.3205 30C12.1343 30 11.8682 29.9335 11.6553 29.8404C11.4691 29.7472 11.183 29.541 11.0234 29.3747C10.8438 29.1752 10.7108 28.949 10.6442 28.7162C10.591 28.5299 10.5445 28.3104 10.5445 28.2373C10.5445 28.1641 10.9835 26.1087 12.5068 19.2306L5.92141 19.1907L5.55555 19.0177C5.356 18.918 5.09657 18.7251 4.97684 18.5854C4.86376 18.439 4.71742 18.1929 4.6642 18.0266C4.60433 17.8603 4.55777 17.5942 4.55777 17.4279C4.55777 17.2151 5.32274 14.8271 7.24513 9.04656C9.90588 1.07095 9.9458 0.957871 10.2252 0.645233Z"
              fill="#FFC83D"
            />
          </svg>

          <span
            style={{
              color: "#ffffff",
              fontSize: isMobile ? "14px" : "16px",
              fontWeight: 800,
              fontFamily: jost.style.fontFamily,
              letterSpacing: "0.04em",
            }}
          >
            ORIGINALS{" "}
            <span
              style={{
                color: "#ffffff",
                fontSize: isMobile ? "14px" : "16px",
                fontWeight: 800,
                fontFamily: jost.style.fontFamily,
                letterSpacing: "0.04em",
              }}
            >
              (14)
            </span>
          </span>
        </div>

        {/* Right: View all + arrows */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            onClick={() => setShowAll(!showAll)}
            style={{
              color: "#4d8dff",
              fontSize: "13px",
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {showAll ? "Show less" : "View all"}
          </span>
          {!isMobile && (
            <>
              <button
              onClick={scrollLeft}
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "6px",
                  backgroundColor: "#1a2a5a",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <button
              onClick={scrollRight}
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "6px",
                  backgroundColor: "#1a56db",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Game cards row */}
      <div
      ref={scrollRef}
        style={{
          display: "flex",
          flexWrap: showAll ? "wrap" : "nowrap",
          gap: "12px",
          overflowX: showAll ? "hidden" : "auto",
          paddingBottom: "8px",
          scrollbarWidth: "none",
          justifyContent: showAll ? "flex-start" : "initial",
          scrollBehavior:"smooth",
        }}
      >
        {(showAll || !isMobile ? originals : originals.slice(0, 4)).map(
          (slot) => (
            <GameCard
              key={slot.id}
              image={slot.image}
              fallbackBg={slot.fallbackBg}
              isMobile={isMobile}
            />
          ),
        )}
      </div>
    </section>
  );
}
