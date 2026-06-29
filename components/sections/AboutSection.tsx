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

export default function AboutSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);
   const cryptos = [
    {
      name: "BTC",
      svg: (
        <svg
          width="14"
          height="19"
          viewBox="0 0 14 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.3078 5.581C12.066 3.574 10.322 2.9561 8.15798 2.79602L8.09938 0L6.37748 0.0174098L6.41148 2.72138C5.97258 2.74032 5.53368 2.75926 5.04878 2.79053L5.01488 0.0865598L3.33904 0.09164L3.39763 2.88766C3.0508 2.88193 2.67028 2.93457 2.32344 2.92884L0 2.91014L0.0420704 4.72402C0.0420704 4.72402 1.31269 4.67953 1.26666 4.69186C1.948 4.65728 2.16336 5.09286 2.24969 5.415L2.26887 8.6162L2.3202 13.042C2.27748 13.2508 2.17971 13.6223 1.68248 13.6075C1.69481 13.6536 0.45788 13.6397 0.45788 13.6397L0.21478 15.678L2.42152 15.6293C2.81437 15.6227 3.25325 15.6037 3.64611 15.5971L3.7047 18.3932L5.38048 18.3881L5.32188 15.5921C5.77308 15.6191 6.25808 15.5879 6.65088 15.5813L6.69718 18.3313L8.37298 18.3262L8.31438 15.5302C11.1655 15.3088 13.1412 14.5821 13.362 11.9085C13.5221 9.7445 12.4898 8.8373 10.8534 8.4371C11.8503 7.9234 12.4477 7.0234 12.3078 5.581ZM10.0285 11.6179C10.0525 13.7326 6.45508 13.5619 5.32258 13.5694L5.25978 9.8373C6.39228 9.8298 9.99208 9.4572 10.0285 11.6179ZM9.16588 6.3736C9.18658 8.2918 6.17848 8.1113 5.24238 8.1155L5.17388 4.73015C6.12228 4.77199 9.13278 4.40928 9.16588 6.3736Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: "ETH",
      svg: (
        <svg
          width="12"
          height="19"
          viewBox="0 0 12 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.64868 0V6.67546L11.2971 9.20346L5.64868 0Z"
            fill="white"
          />
          <path d="M5.6484 0L0 9.20346L5.6484 6.67546V0Z" fill="white" />
          <path
            d="M5.64868 13.5483V18.0907L11.2971 10.2698L5.64868 13.5483Z"
            fill="white"
          />
          <path
            d="M5.6484 18.0907V13.5483L0 10.2698L5.6484 18.0907Z"
            fill="white"
          />
          <path
            d="M5.64868 12.482L11.2971 9.2036L5.64868 6.6756V12.482Z"
            fill="white"
          />
          <path d="M0 9.2036L5.6484 12.482V6.6756L0 9.2036Z" fill="white" />
        </svg>
      ),
    },
    {
      name: "USDT",
      svg: (
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4745 5.94266V3.57566H16.836V0H2.2548V3.57566H7.61629V5.94266C3.25699 6.14406 0 7.00026 0 8.05786C0 9.11536 3.25699 9.97156 7.61629 10.173V17.7272H11.4745V10.173C15.8339 9.97156 19.0908 9.11536 19.0908 8.05786C19.0908 7.00026 15.8339 6.14406 11.4745 5.94266ZM11.4745 9.51826C11.3743 9.51826 10.8231 9.56866 9.5705 9.56866C8.5683 9.56866 7.8668 9.51826 7.61629 9.51826C3.75799 9.36726 0.901894 8.66216 0.901894 7.85636C0.901894 7.05056 3.75799 6.39586 7.61629 6.19446V8.81326C7.8668 8.81326 8.5683 8.86356 9.5705 8.86356C10.773 8.86356 11.3743 8.81326 11.4745 8.81326V6.19446C15.3328 6.34556 18.1889 7.05056 18.1889 7.85636C18.1889 8.66216 15.3328 9.31686 11.4745 9.51826Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: "TON",
      svg: (
        <svg
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.857 5.7383C16.964 4.91391 15.729 3.65499 14.723 2.76214L14.664 2.72047C14.565 2.64094 14.453 2.57857 14.333 2.53595C11.908 2.08357 0.619002 -0.0265273 0.399002 0.000252653C0.337002 0.00890265 0.278006 0.0312729 0.226006 0.0657329L0.170006 0.110373C0.100006 0.181093 0.0469994 0.266513 0.0149994 0.360373L0 0.399063V0.610373V0.643113C1.271 4.18178 6.289 15.774 7.277 18.4942C7.336 18.6787 7.45 19.0299 7.661 19.0478H7.709C7.822 19.0478 8.304 18.4109 8.304 18.4109C8.304 18.4109 16.923 7.9585 17.795 6.8454C17.908 6.7083 18.007 6.5609 18.092 6.405C18.114 6.283 18.104 6.1575 18.063 6.0407C18.021 5.9238 17.951 5.8197 17.857 5.7383ZM10.515 6.9556L14.194 3.90499L16.351 5.8931L10.515 6.9556ZM9.086 6.7562L2.753 1.56572L13 3.45559L9.086 6.7562ZM9.658 8.1163L16.14 7.0716L8.729 16.0002L9.658 8.1163ZM1.89301 2.08357L8.557 7.7383L7.592 16.0061L1.89301 2.08357Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: "XRP",
      svg: (
        <svg
          width="22"
          height="18"
          viewBox="0 0 22 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.239 0H21.352L14.932 6.3714C12.597 8.6573 8.80396 8.6573 6.51796 6.3714L0.0489502 0H3.16196L8.02596 4.81501C9.48495 6.2741 11.868 6.2741 13.376 4.81501L18.239 0Z"
            fill="white"
          />
          <path
            d="M3.11301 17.7035H0L6.46899 11.2835C8.80399 8.99762 12.597 8.99762 14.883 11.2835L21.4 17.7035H18.288L13.375 12.8399C11.916 11.3808 9.53299 11.3808 8.02499 12.8399L3.11301 17.7035Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: "DOT",
      svg: (
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.55304 7.6181L7.63104 5.54044L8.06404 5.10759L9.05904 4.06876L12.565 7.6181L14.6 5.54044L9.05904 0L3.51904 5.54044L5.55304 7.6181Z"
            fill="white"
          />
          <path
            d="M9.07405 11.1029L11.125 9.05219L9.07405 7.00159L7.02405 9.05219L9.07405 11.1029Z"
            fill="white"
          />
          <path
            d="M12.565 10.5181L9.05904 14.0241L7.84703 12.8122L7.63104 12.5524L5.55304 10.5181L3.51904 12.5524L9.05904 18.1362L14.6 12.5524L12.565 10.5181Z"
            fill="white"
          />
          <path
            d="M2.05101 11.119L4.10201 9.0684L2.05101 7.0177L0 9.0684L2.05101 11.119Z"
            fill="white"
          />
          <path
            d="M16.085 11.1124L18.136 9.06181L16.085 7.01111L14.035 9.06181L16.085 11.1124Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: "DOGE",
      svg: (
        <svg
          width="15"
          height="17"
          viewBox="0 0 15 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.584 0.000607822H1.91701V7.2846H0V9.0687H1.91701V16.3528H7.35501C7.35501 16.3528 15 16.9982 15 8.3131C15 -0.230372 7.688 0.000607822 6.584 0.000607822ZM7.23001 13.33H4.98001V9.0688H8.35501V7.2847H4.98001V3.02336H7.125C7.928 3.02336 11.964 3.34863 11.97 8.3722C11.976 13.3957 7.80801 13.33 7.23001 13.33Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: "LTC",
      svg: (
        <svg
          width="15"
          height="18"
          viewBox="0 0 15 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.55002 14.0277L6.54901 9.3934L11.594 6.021L12.185 3.26671L7.13901 6.6529L8.57199 0H4.69699L2.61499 9.6889L0.492004 11.1133L0 13.7714L2.02899 12.415L0.985016 17.2727H13.401L14.09 14.0277H5.55002Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: "TRX",
      svg: (
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.69504 10.7313C6.69504 10.7729 6.57103 10.8145 6.48703 10.8145C6.36303 10.8145 6.07201 10.8145 5.86401 10.8145C5.19801 10.7313 4.53303 10.5234 4.03403 10.2738C3.74303 10.1491 3.53503 9.98271 3.41003 9.85801L3.32703 9.77481V9.65001C3.32703 9.44211 3.32703 9.10941 3.32703 9.02621C3.32703 8.94301 3.36803 8.85991 3.41003 8.77671C3.45203 8.73511 3.45203 8.73511 3.53503 8.73511C3.65903 8.73511 3.78402 8.77671 3.95102 8.81831C4.32502 8.94301 4.90702 9.23421 5.57202 9.60841C6.15502 9.94111 6.36302 10.1075 6.52902 10.357C6.65402 10.4402 6.69504 10.6481 6.69504 10.7313Z"
            fill="white"
          />
          <path
            d="M17.092 12.145C17.092 12.145 17.092 12.1034 17.092 12.0618C16.343 11.9786 14.264 11.9371 12.309 13.559C12.309 13.559 11.686 10.6895 8.73302 10.6895C5.78002 10.6895 4.69902 13.559 4.69902 13.559C3.03602 11.7707 0.831001 11.8955 0.0410009 12.0202V12.0618C8.9407e-07 12.5193 0.0410236 12.7272 0.0830236 12.9767C0.332024 13.8501 1.03902 14.8066 2.12102 15.7631C3.95002 17.3018 6.40401 18.4246 8.27501 18.5494C10.23 18.6742 13.1 17.5513 15.013 15.8878C15.304 15.6383 15.595 15.3472 15.844 15.0561C16.052 14.8482 16.302 14.4739 16.302 14.4739C16.302 14.4739 16.302 14.4739 16.302 14.4323C16.302 14.3907 16.343 14.3907 16.343 14.3491C16.385 14.2659 16.593 13.9332 16.593 13.8916C16.759 13.4758 16.884 13.1431 16.926 12.8104C17.092 12.5193 17.092 12.1866 17.092 12.145Z"
            fill="white"
          />
          <path
            d="M17.05 11.8124C17.05 11.6877 17.05 11.4797 17.009 11.3966C16.884 10.0242 16.51 8.8598 15.844 7.6537C15.803 7.6121 15.803 7.5706 15.761 7.529C15.761 7.529 15.761 7.529 15.761 7.4874C15.844 7.1963 16.26 5.99026 16.551 4.65947C16.967 2.78806 17.258 0.625527 16.426 0.00172712C16.426 0.00172712 15.013 -0.123043 13.141 1.74838C12.642 2.24742 12.143 2.82964 11.727 3.41186L11.602 3.37028C10.854 3.12076 10.064 2.95441 9.27399 2.91282C9.02399 2.91282 8.15099 2.91282 7.85999 2.91282C6.98599 2.95441 6.32101 3.12076 5.53101 3.37028C5.48901 3.37028 5.489 3.41186 5.448 3.41186C5.032 2.82964 4.533 2.28901 3.992 1.74838C2.037 -0.123043 0.582001 0.00172712 0.582001 0.00172712C-0.290999 0.667117 7.45058e-07 2.9544 0.457001 4.86741C0.748001 6.11502 1.12198 7.2379 1.24698 7.6537C1.24698 7.6953 1.20599 7.6953 1.20599 7.7369C0.498994 9.1925 0.124 10.5648 0 12.062C0.79 11.9372 2.99398 11.8124 4.65698 13.6007C4.65698 13.6007 5.73898 10.7312 8.69098 10.7312C11.644 10.7312 12.268 13.6007 12.268 13.6007C14.222 11.9788 16.302 12.062 17.05 12.1036C17.05 11.9788 17.05 11.8956 17.05 11.8124Z"
            fill="white"
          />
          <path
            d="M12.143 8.0695C12.143 8.0695 11.145 8.1111 11.27 7.3625C11.395 6.61393 12.144 6.48917 12.393 6.53076C12.601 6.57235 13.474 6.86345 13.308 7.5288C13.142 8.1527 12.934 8.0695 12.809 8.0695C12.684 8.0695 12.143 8.0695 12.143 8.0695Z"
            fill="white"
          />
          <path
            d="M4.90701 8.0695C4.90701 8.0695 3.90903 8.1111 4.03403 7.3625C4.15903 6.61393 4.90701 6.48917 5.15701 6.53076C5.36501 6.57235 6.23802 6.86345 6.07202 7.5288C5.90502 8.1527 5.69703 8.0695 5.57303 8.0695C5.44803 8.0695 4.90701 8.0695 4.90701 8.0695Z"
            fill="white"
          />
          <path
            d="M13.2549 11.8369H4.25903V16.5716H13.2549V11.8369Z"
            fill="white"
          />
        </svg>
      ),
    },
      {
      name: "ABC",
      svg: (
        <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.77502 0.0648799L0 1.81672V8.7592L1.77502 10.511H8.811V14.0147H5.32602V12.2629H0V15.7666L1.77502 17.5184H12.363L14.138 15.7666V8.7592L12.363 7.0074H5.32602V3.50368H8.87701V5.25552H14.204V1.75184L12.428 0H1.77502V0.0648799Z" fill="white"/>
</svg>

      ),
    },
    {
      name: "SOL",
      svg: (
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.057 5.35429C14.694 5.14635 14.226 5.14635 13.811 5.35429L10.903 7.0697L8.92999 8.1614L6.07501 9.8768C5.71101 10.0848 5.24401 10.0848 4.82901 9.8768L2.59601 8.5253C2.23301 8.3173 1.97299 7.9015 1.97299 7.4336V4.83445C1.97299 4.41858 2.18101 4.00272 2.59601 3.7428L4.82901 2.44322C5.19201 2.23528 5.65901 2.23528 6.07501 2.44322L8.30701 3.79478C8.67101 4.00272 8.92999 4.41859 8.92999 4.88644V6.6019L10.903 5.45825V3.69082C10.903 3.27495 10.696 2.85908 10.28 2.59917L6.12701 0.155948C5.76301 -0.0519825 5.29601 -0.0519825 4.88101 0.155948L0.622986 2.65115C0.207986 2.85908 0 3.27495 0 3.69082V8.5773C0 8.9931 0.207986 9.409 0.622986 9.6689L4.82901 12.1121C5.19201 12.3201 5.65901 12.3201 6.07501 12.1121L8.92999 10.4487L10.903 9.305L13.759 7.6416C14.123 7.4336 14.59 7.4336 15.005 7.6416L17.238 8.9411C17.601 9.1491 17.861 9.5649 17.861 10.0328V12.632C17.861 13.0478 17.653 13.4637 17.238 13.7236L15.057 15.0232C14.694 15.2311 14.226 15.2311 13.811 15.0232L11.578 13.7236C11.215 13.5157 10.955 13.0998 10.955 12.632V10.9685L8.98199 12.1121V13.8276C8.98199 14.2434 9.19001 14.6593 9.60501 14.9192L13.811 17.3624C14.174 17.5704 14.642 17.5704 15.057 17.3624L19.263 14.9192C19.626 14.7113 19.886 14.2954 19.886 13.8276V8.8892C19.886 8.4733 19.678 8.0574 19.263 7.7975L15.057 5.35429Z"
            fill="white"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "1136px",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        padding: isMobile ? "0 12px" : "0",
        boxSizing: "border-box",
        marginTop: "32px",
        margin: "32px auto 0 auto",
        alignItems: "center",
      }}
    >
      {/* First div — w=800, h=412, gap=24px */}
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          margin: "0 auto",
        }}
      >
        {/* Header — Jost 700, 32px, lh=120%, ls=-2% */}
        <h1
          style={{
            fontFamily: jost.style.fontFamily,
            fontWeight: 700,
            fontSize: isMobile ? "24px" : "32px",
            lineHeight: "120%",
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            margin: 0,
            maxWidth: "800px",
          }}
        >
          Play the Best Crypto Casino Games Online at Mighty Luck — Fast, Fair
          and Secure
        </h1>

        {/* Content — Manrope 500, 16px, lh=160%, color=#D2DCF7 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "800px",
            position: "relative",
            maxHeight: expanded ? "none" : isMobile ? "200px" : "none",
            overflow: expanded ? "visible" : isMobile ? "hidden" : "visible",
          }}
        >
          <p
            style={{
              fontFamily: manrope.style.fontFamily,
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "160%",
              letterSpacing: "0%",
              color: "#D2DCF7",
              margin: 0,
            }}
          >
            Step into a next-generation gaming experience where every spin, bet,
            and hand is powered by blockchain technology. At Mighty Luck Casino,
            you can explore more than 9,000 crypto casino games across slots,
            table games, live dealer games, and crash-style favorites. As one of
            the top crypto casinos online, Mighty Luck gives players instant
            withdrawals, enhanced privacy, and a secure gambling environment
            without the friction of traditional payment methods.
          </p>

          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "160%",
              letterSpacing: "0%",
              color: "#D2DCF7",
              margin: 0,
            }}
          >
            Whether you're here to play table games, explore Bitcoin casino
            games, or try the latest provably fair slots, Mighty Luck delivers
            one of the most complete online casino experiences available today.
          </p>

          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "160%",
              color: "#D2DCF7",
              margin: 0,
            }}
          >
            Ready to play games and win real crypto?
          </p>

          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "160%",
              color: "#D2DCF7",
              margin: 0,
            }}
          >
            Start playing crypto casino games at Mighty Luck Casino
          </p>

          {/* Mobile fade overlay */}
          {isMobile && !expanded && (
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "60px",
                background: "linear-gradient(to bottom, transparent, #091741)",
                pointerEvents: "none",
              }}
            />
          )}
        </div>
      </div>

      {/* Second div — w=800, h=129, gap=16px */}
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          margin: "0 auto",
        }}
      >
        {/* 2nd header — Jost 700, 24px, lh=100% */}
        <h2
          style={{
            fontFamily: jost.style.fontFamily,
            fontWeight: 700,
            fontSize: isMobile ? "20px" : "24px",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#FFFFFF",
            margin: 0,
          }}
        >
          Why Mighty Luck Is the Ultimate Place to Play Crypto Casino Games
        </h2>

        {/* 2nd content — p=24px 10px, gap=10px */}
        <div
          style={{
            paddingTop: "24px",
            paddingRight: "10px",
            paddingBottom: "24px",
            paddingLeft: "10px",
            gap: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "160%",
              color: "#D2DCF7",
              margin: 0,
            }}
          >
            Mighty Luck Casino offers the perfect blend of crypto gambling
            convenience, online casino entertainment, and world-class security.
            Compared to traditional online casinos, Mighty Luck delivers
            significantly faster payouts, more generous bonuses, and an
            unmatched selection of various games.
          </p>
        </div>

        {/* 3rd section — Massive Game Variety */}
        <h2
          style={{
            fontFamily: "Jost, sans-serif",
            fontWeight: 700,
            fontSize: isMobile ? "20px" : "24px",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#FFFFFF",
            margin: 0,
            opacity: expanded ? 1 : isMobile ? 0.4 : 1,
          }}
        >
          Massive Game Variety
        </h2>

        {(expanded || !isMobile) && (
          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "160%",
              color: "#D2DCF7",
              margin: 0,
            }}
          >
            With more than 9,000 casino games, Mighty Luck outshines crypto
            casinos and traditional casinos alike. You'll find slots from top
            providers, live dealer tables, sports betting, and provably fair
            games that guarantee transparency.
           
          </p>
        )}
          <button
        onClick={() => setExpanded(!expanded)}
        style={{
          display: "flex",
          alignItems: "center",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          marginTop: "8px",
          margin: "8px auto 0 auto",
        }}
      >
        {/* Try your image first */}
        <img
          src="/readmore.png" // ← change to your exact filename
          alt="read more"
          style={{
            width: "100px",
            height: "20px",
            objectFit: "contain",
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
          onError={(e) => {
            // Fallback if image not found
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </button>
      </div>

     <div style={{ height: '80px' }} />
   
{/* Crypto icons with glow */}
<div style={{ position: 'relative', width: '100%',marginBottom:0 }}>
     {/* Blue glow below icons */}
  <div style={{
    position: 'absolute',
    bottom: '-30px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60%',
    height: '80px',
    background: 'radial-gradient(ellipse at center, rgba(20, 99, 255, 0.4) 0%, transparent 70%)',
    pointerEvents: 'none',
    filter: 'blur(15px)',
    zIndex: 0,
  }} />
<div
       style={{
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: isMobile ? "12px" : "20px",
  padding:"16px 0",
  margin: isMobile ? "0" : "0 24px",
  flexWrap: isMobile ? "wrap" : "nowrap",
  width: "100%",
  position:"relative",
  zIndex:1,
}}
      >
        {cryptos.map((crypto) => (
          <div
            key={crypto.name}
            title={crypto.name}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              opacity: 0.85,
              transition: "opacity 0.2s",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
          >
            {crypto.svg}
          </div>
        ))}
      </div>
          </div>
             {/* HR line */}
<hr style={{
  width: '100%',
  border: 'none',
  borderTop: '1px solid rgba(255,255,255,0.08)',
  margin: '0',   
}} />
    </section>
  );
}
