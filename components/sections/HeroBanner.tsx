// export default function HeroBanner() {
//   return (
//     <section
//       style={{
//         position: "relative",
//         width: "100%",
//         height: "356px",
//         borderRadius: '0 16px 16px 16px',
//         overflow: "hidden",
//         backgroundColor: '#030817',
//         boxSizing: "border-box",
//       }}
//     >
//       {/* Background image — right side only */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,

//           backgroundImage: 'url("/cartoon.jpg")',
//           backgroundSize: "cover",
//           backgroundPosition: "left center",
//           backgroundRepeat: "no-repeat",

//           // Fade BOTH left and right edges
//           maskImage:
//             "linear-gradient(90deg, transparent 0%, #000 35%, #000 75%, transparent 100%)",
//           WebkitMaskImage:
//             "linear-gradient(90deg, transparent 0%, #000 35%, #000 75%, transparent 100%)",
//         }}
//       />

//       {/* Dark overlay on left for text contrast */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background:
//             "linear-gradient(90deg, #060c2b 0%, rgba(6,12,43,0.6) 25%, transparent 50%)",
//         }}
//       />

//       {/* Text content */}
//       <div
//         style={{
//           position: "absolute",
//           zIndex: 10,
//           top: "101px",
//           left: "40px",
//           display: "flex",
//           flexDirection: "column",
//           gap: "24px",
//         }}
//       >
//         {/* Subtitle */}
//         <p
//           style={{
//             fontFamily: "Jost, system-ui, sans-serif",
//             fontWeight: 500,
//             fontSize: "28px",
//             lineHeight: "100%",
//             color: "#ffffff",
//             margin: 0,
//           }}
//         >
//           Get&nbsp;
//           <span style={{ color: "#fba819", fontWeight: 800 }}>LUCKY</span>
//           &nbsp;with our exclusive
//         </p>

//         {/* Main heading */}
//         <h1
//           style={{
//             fontFamily: "Jost, system-ui, sans-serif",
//             fontWeight: 800,
//             fontSize: "64px",
//             lineHeight: "100%",
//             color: "#FFFFFF",
//             textTransform: "uppercase",
//             margin: 0,
//           }}
//         >
//           250% WELCOME <br /> BONUS!
//         </h1>

//         {/* CTA Button */}
//         <button
//           style={{
//             width: "120px",
//             height: "40px",
//             backgroundColor: "#fba819",
//             color: "#060c2b",
//             border: "none",
//             borderRadius: "8px",
//             fontWeight: 700,
//             fontSize: "14px",
//             fontFamily: "Jost, system-ui, sans-serif",
//             cursor: "pointer",
//             boxShadow: "0 4px 12px rgba(251,168,25,0.3)",
//           }}
//         >
//           Join Now
//         </button>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useState } from "react";

export default function HeroBanner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: isMobile ? "280px" : "356px",
        borderRadius: "0 16px 16px 16px",
        overflow: "hidden",
        backgroundColor: "#030817",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: 'url("/cartoon.jpg")',
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

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: isMobile
            ? "linear-gradient(90deg, rgba(6,12,43,.95) 0%, rgba(6,12,43,.75) 50%, rgba(6,12,43,.25) 100%)"
            : "linear-gradient(90deg, #060c2b 0%, rgba(6,12,43,0.6) 25%, transparent 50%)",
        }}
      />

      {/* Content */}
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
            fontFamily: "Jost, system-ui, sans-serif",
            fontWeight: 500,
            fontSize: isMobile ? "14px" : "28px",
            lineHeight: "1.2",
            color: "#fff",
            margin: 0,
          }}
        >
          Get{" "}
          <span
            style={{
              color: "#fba819",
              fontWeight: 800,
            }}
          >
            LUCKY
          </span>{" "}
          with our exclusive
        </p>

        {/* Heading */}
        <h1
          style={{
            fontFamily: "Jost, system-ui, sans-serif",
            fontWeight: 800,
            fontSize: isMobile ? "28px" : "64px",
            lineHeight: "1",
            color: "#fff",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          250% WELCOME
          <br />
          BONUS!
        </h1>

        {/* CTA */}
        <button
          style={{
            width: isMobile ? "100px" : "120px",
            height: isMobile ? "36px" : "40px",
            backgroundColor: "#fba819",
            color: "#060c2b",
            border: "none",
            borderRadius: "8px",
            fontWeight: 700,
            fontSize: isMobile ? "13px" : "14px",
            fontFamily: "Jost, system-ui, sans-serif",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(251,168,25,0.3)",
          }}
        >
          Join Now
        </button>
      </div>
    </section>
  );
}