"use client";

import { useEffect, useState } from "react";

import { Jost } from "next/font/google";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600"],
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

// Mock database for carousel slides
const BANNER_SLIDES = [
  {
    id: 1,
    image: "/cartoon.jpg",
    subtitle: "Get LUCKY with our exclusive",
    titleLine1: "250% WELCOME",
    titleLine2: "BONUS!",
    showCta: true,
  },
  {
    id: 2,
    image: "/cartoon.jpg",
    subtitle: "Discover new weekly games",
    titleLine1: "100 FREE",
    titleLine2: "SPINS WEEKLY",
    showCta: false,
  },
  {
    id: 3,
    image: "/cartoon.jpg",
    subtitle: "Level up your gaming tier",
    titleLine1: "VIP REWARDS",
    titleLine2: "NOW LIVE!",
    showCta: false,
  },
];

export default function HeroBanner() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle responsive window checks
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle Auth detection from localStorage
  useEffect(() => {
    const checkAuth = () => {
      const savedUser = localStorage.getItem("user");
      const loggedInStatus = localStorage.getItem("isLoggedIn");
      if (savedUser && loggedInStatus === "true") {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    checkAuth();
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  // Auto-play timer loop logic for sliding animations
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
    }, 5000); // Transitions slide every 5 seconds

    return () => clearInterval(slideTimer);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "12px",
      }}
    >
      {/* Primary Image Display Panel Window */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: isMobile ? "280px" : "356px",
          borderRadius: "16px",
          overflow: "hidden",
          backgroundColor: "#030817",
        }}
      >
        {/* Dynamic Animated Sliding Tracks Wrapper Container */}
        <div
          style={{
            display: "flex",
            width: `${BANNER_SLIDES.length * 100}%`,
            height: "100%",
            transform: `translateX(-${(currentSlide * 100) / BANNER_SLIDES.length}%)`,
            transition: "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
          }}
        >
          {BANNER_SLIDES.map((slide) => (
            <div
              key={slide.id}
              style={{
                position: "relative",
                width: `${100 / BANNER_SLIDES.length}%`,
                height: "100%",
                overflow: "hidden",
              }}
            >
              {/* Background Graphic Node Layer */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url("${slide.image}")`,
                  backgroundSize: "cover",
                  backgroundPosition: isMobile ? "center" : "left center",
                  backgroundRepeat: "no-repeat",
                  maskImage: isMobile
                    ? "linear-gradient(90deg, rgba(0,0,0,0.15) 0%, #000 40%, #000 100%)"
                    : "linear-gradient(90deg, transparent 0%, #000 35%, #000 75%, transparent 100%)",
                  WebkitMaskImage: isMobile
                    ? "linear-gradient(90deg, rgba(0,0,0,0.15) 0%, #000 40%, #000 100%)"
                    : "linear-gradient(90deg, transparent 0%, #000 35%, #000 75%, transparent 100%)",
                }}
              />

              {/* Dark Color Gradient Overlay Canvas Shield */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: isMobile
                    ? "linear-gradient(90deg, rgba(6,12,43,.95) 0%, rgba(6,12,43,.75) 50%, rgba(6,12,43,.25) 100%)"
                    : "linear-gradient(90deg, #060c2b 0%, rgba(6,12,43,0.6) 25%, transparent 50%)",
                }}
              />

              {/* Banner Marketing Text Elements Context Frame */}
              <div
                style={{
                  position: "absolute",
                  zIndex: 10,
                  top: isMobile ? "50%" : "101px",
                  left: isMobile ? "20px" : "40px",
                  transform: isMobile ? "translateY(-50%)" : "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: isMobile ? "12px" : "24px",
                  maxWidth: isMobile ? "75%" : "unset",
                }}
              >
                {/* Subtitle */}
                <p
                  style={{
                    fontFamily: jost.style.fontFamily,
                    fontWeight: 500,
                    fontSize: isMobile ? "18px" : "28px",
                    lineHeight: "100%",
                    letterSpacing: "0",
                    color: "#FFFFFF",
                    margin: 0,
                  }}
                >
                  {slide.subtitle.includes("LUCKY") ? (
                    <>
                      Get{" "}
                      <span style={{ color: "#FFBF1F", fontWeight: 500 }}>
                        LUCKY
                      </span>{" "}
                      with our exclusive
                    </>
                  ) : (
                    slide.subtitle
                  )}
                </p>

                {/* Heading Text Line Block */}
                <h1
                  style={{
                    fontFamily: jost.style.fontFamily,
                    fontWeight: 800,
                    fontSize: isMobile ? "28px" : "48px",
                    lineHeight: "100%",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  {slide.titleLine1}
                  <br />
                  {slide.titleLine2}
                </h1>

                <button
                  style={{
                    width: isMobile ? "100px" : "120px",
                    height: isMobile ? "36px" : "40px",
                    backgroundColor: "#FFBF1F",
                    color: "#060c2b",
                    border: "none",
                    borderRadius: "8px",
                    fontWeight: 700,
                    fontSize: isMobile ? "13px" : "14px",
                    fontFamily: manrope.style.fontFamily,
                    cursor: "pointer",
                    letterSpacing:"0.02em",
                    textAlign:"center",
                    boxShadow: "0 4px 12px rgba(251,168,25,0.3)",
                  }}
                >
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Slide Dot Navigation Pagination - Placed BELOW the image section container */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          alignItems: "center",
          width: "100%",
          paddingTop: "4px",
        }}
      >
        {BANNER_SLIDES.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => setCurrentSlide(dotIndex)}
            aria-label={`Go to slide ${dotIndex + 1}`}
            style={{
              padding: 0,
              border: "none",
              cursor: "pointer",
              borderRadius: "50%",
              // Uses exact color '#D2DCF7' with differing opacities for active/inactive states
              backgroundColor: "#D2DCF7",
              opacity: currentSlide === dotIndex ? "1" : "0.3",
              width: "6px",
              height: "6px",
              transition: "opacity 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
