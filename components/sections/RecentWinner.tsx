"use client";
import { useEffect, useState, useRef } from "react";

const winners = [
  { id: 1, game: "Sweet Bonanza Super Scatter", image: "/w1.png", username: "Alb****", time: "14:16 PM", payout: "$126.1", positive: true },
  { id: 2, game: "Honey Money Multiplier", image: "/w2.png", username: "Tra****", time: "14:16 PM", payout: "$15.2", positive: true },
  { id: 3, game: "Dragon Tiger", image: "/w3.png", username: "Hid*****", time: "14:15 PM", payout: "$77.08", positive: true },
  { id: 4, game: "Eleven Fortune", image: "/w4.png", username: "Gin***", time: "14:15 PM", payout: "$0.00", positive: false },
  { id: 5, game: "Honey Money Multiplier", image: "/w5.png", username: "Tra****", time: "14:15 PM", payout: "$11.23", positive: true },
  { id: 6, game: "XO Paradise", image: "/w6.png", username: "Amr*****", time: "14:15 PM", payout: "$67.88", positive: true },
];

export default function RecentWinner() {
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  // All variables INSIDE component
  const thumbWidth = 100; // percentage width of thumb (%)
  
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll > 0) {
      setScrollPercent(el.scrollLeft / maxScroll);
    }
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Thumb width as % of track (287/544 = ~52%)
  const thumbWidthPercent = 52;
  const maxThumbPercent = 100 - thumbWidthPercent;

  return (
    <section style={{
      marginTop: "20px",
      paddingLeft: isMobile ? "12px" : "0",
      paddingRight: isMobile ? "12px" : "0",
    }}>

      {/* Section title */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M6.59082 0.0639711C5.96424 0.233982 5.35543 0.77913 5.12181 1.37944C5.01069 1.66506 4.98792 1.86069 4.96539 2.723L4.93905 3.73222L2.74975 3.74893C0.643825 3.76493 0.554355 3.77015 0.398588 3.88646C0.0151266 4.17266 -0.00587692 4.24477 0.000928702 5.25094C0.0429358 11.4233 3.30576 16.9493 7.87779 18.5913C8.20904 18.7102 8.38716 18.8202 8.64049 19.062C9.48386 19.8671 10.7814 20.8129 11.9481 21.473L12.4611 21.7633L12.4615 23.3901L12.4619 25.0169H12.0743C10.5904 25.0169 9.1803 26.1589 8.81685 27.655C8.77379 27.8324 8.73806 28.2808 8.73747 28.6516C8.73653 29.2585 8.7502 29.348 8.87434 29.5475C8.9502 29.6694 9.11413 29.8211 9.23868 29.8846C9.45916 29.997 9.60994 30 14.9847 30C20.3594 30 20.5102 29.997 20.7307 29.8846C20.8552 29.8211 21.0192 29.6694 21.095 29.5475C21.2192 29.348 21.2328 29.2585 21.2319 28.6516C21.2313 28.2808 21.1956 27.8324 21.1525 27.655C20.7891 26.1589 19.3789 25.0169 17.895 25.0169H17.5075L17.5084 23.3901L17.5093 21.7633L17.9904 21.4995C19.0475 20.9198 20.2713 20.0446 21.2349 19.1794C21.6345 18.8206 21.7772 18.7319 22.1736 18.5965C25.5736 17.4348 28.3937 13.9528 29.5086 9.54008C29.8898 8.03097 29.9589 7.49286 29.9885 5.80119C30.0188 4.06796 30.0194 4.07071 29.5948 3.85427C29.3752 3.7423 29.2521 3.73626 27.1968 3.73626H25.0304L25.004 2.72499C24.9814 1.85817 24.9589 1.66559 24.8466 1.37681C24.6643 0.90828 24.2268 0.446144 23.7377 0.205549L23.3476 0.0136128L15.1032 0.0024155C8.69376 -0.00631954 6.79933 0.00739857 6.59082 0.0639711ZM4.96903 8.93918C4.99367 12.0029 5.00552 12.3179 5.11881 12.9209C5.21785 13.448 5.46391 14.3048 5.69682 14.9335C5.75408 15.0881 5.18822 14.51 4.80734 14.0248C3.5114 12.374 2.6049 10.3339 2.17433 8.09915C2.05095 7.45874 1.95268 6.68747 1.88163 5.80277L1.86637 5.61224H3.40433H4.94228L4.96903 8.93918ZM28.1852 5.86316C28.1852 6.22276 28.0272 7.44754 27.8876 8.17079C27.39 10.7471 26.1023 13.3276 24.5618 14.8352L24.213 15.1766L24.4697 14.4087C24.9515 12.9676 24.9691 12.7873 25.0003 8.96849L25.0277 5.61224H26.6065H28.1852V5.86316Z" fill="#FFC83D"/>
</svg>

        <span style={{ color: "#ffffff", fontSize: isMobile ? "14px" : "16px", fontWeight: 800, fontFamily: "Jost, Inter, sans-serif", letterSpacing: "0.04em" }}>
          RECENT WINNERS
        </span>
      </div>

      {/* Custom scrollbar — mobile only */}
      {isMobile && (
        <div style={{ marginBottom: '12px' }}>
          <div style={{
            width: '100%',
            height: '10px',
            borderRadius: '100px',
            backgroundColor: '#D2DCF7',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              width: `${thumbWidthPercent}%`,
              height: '12px',
              borderRadius: '100px',
              backgroundColor: '#1463FF',
              position: 'absolute',
              top: '-1px',
              left: `${scrollPercent * maxThumbPercent}%`,
              transition: 'left 0.05s ease',
            }} />
          </div>
        </div>
      )}

      {/* Scrollable wrapper */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          overflowX: isMobile ? 'auto' : 'hidden',
          overflowY: 'visible',
          width: '100%',
          WebkitOverflowScrolling: 'touch' as any,
          scrollbarWidth: 'none' as any,
          msOverflowStyle: 'none' as any,
        }}
      >
        <style>{`div[data-winner-scroll]::-webkit-scrollbar { display: none; }`}</style>

        {/* Inner — min width forces scroll */}
        <div style={{
          minWidth: isMobile ? '600px' : '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}>

          {/* Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            padding: '0 20px',
            height: '20px',
            alignItems: 'center',
          }}>
            <span style={{ color: '#FFFFFF', fontSize: '12px', fontWeight: 700, fontFamily: 'Jost, Inter, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase' }}>GAME</span>
            <span style={{ color: '#FFFFFF', fontSize: '12px', fontWeight: 700, fontFamily: 'Jost, Inter, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase' }}>USERNAME</span>
            <span style={{ color: '#FFFFFF', fontSize: '12px', fontWeight: 700, fontFamily: 'Jost, Inter, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase' }}>TIME</span>
            <span style={{ color: '#FFFFFF', fontSize: '12px', fontWeight: 700, fontFamily: 'Jost, Inter, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase', textAlign: 'right' }}>PAYOUT</span>
          </div>

          {/* Rows */}
          {winners.map((winner) => (
            <div
              key={winner.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr 1fr',
                paddingTop: '12px',
                paddingBottom: '12px',
                paddingLeft: '20px',
                paddingRight: '20px',
                alignItems: 'center',
                backgroundColor: '#0C1F56',
                borderRadius: '8px',
                cursor: 'pointer',
                height: '60px',
                boxSizing: 'border-box',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0f2575')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0C1F56')}
            >
              {/* Game */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '6px', overflow: 'hidden', flexShrink: 0, backgroundColor: '#1a2a5a' }}>
                  <img
                    src={winner.image}
                    alt={winner.game}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
                <span style={{ color: '#ffffff', fontSize: '13px', fontFamily: 'Inter, sans-serif', fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {winner.game}
                </span>
              </div>

              {/* Username */}
              <span style={{ color: '#FFFFFF', fontSize: '13px', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                {winner.username}
              </span>

              {/* Time */}
              <span style={{ color: '#FFFFFF', fontSize: '13px', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                {winner.time}
              </span>

              {/* Payout */}
              <span style={{ color: winner.positive ? '#00DD29' : '#7795E8', fontSize: '13px', fontFamily: 'Inter, sans-serif', fontWeight: 700, textAlign: 'right' }}>
                {winner.payout}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}