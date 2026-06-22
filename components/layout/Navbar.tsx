// 'use client';
// import { useAppDispatch } from '@/app/store/hooks';
// import { toggleSidebar } from '@/app/store';

// export default function Navbar() {
//   const dispatch = useAppDispatch();

//   return (
//     <header
//       style={{
//         backgroundColor: '#0C1F56',
//         height: '60px',
//         borderBottom: '1px solid rgba(255,255,255,0.08)',
//         padding: '10px 24px',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         width: '100%',
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         zIndex: 50,
//         boxSizing: 'border-box',
//       }}
//     >
//       {/* LEFT + CENTER grouped */}
//       <div style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>

//         {/* Hamburger */}
//         <button
//           onClick={() => dispatch(toggleSidebar())}
//           style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', flexShrink: 0, }}
//         >
//           <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path
//               d="M0 0H16M0 6.857H11.429M0 13.714H16M20.571 2.286L19.253 3.288C17.086 4.935 16 5.759 16 6.857C16 7.956 17.085 8.78 19.253 10.427L20.571 11.429"
//               stroke="white"
//               strokeWidth="1.71429"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>

//         {/* Logo */}
//         <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 ,position: 'relative'}}>
//            <div style={{
//   position: 'absolute',
//   left: '30px',
//   bottom: '-30px',     // push below instead of top
//   top: 'auto',
//   width: '70px',
//   height: '70px',
//   borderRadius: '50%',
//   backgroundColor: '#1463FF',
//   filter: 'blur(22px)',
//   opacity: 0.6,
//   pointerEvents: 'none',
//   zIndex: 0,
// }} />
//           <svg style={{ position: 'relative', zIndex: 1 }} width="34" height="26" viewBox="103 14 36 27" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <defs>
//       <linearGradient id="logoGold" x1="108.005" y1="27.3753" x2="133.35" y2="27.3753" gradientUnits="userSpaceOnUse">
//         <stop stopColor="#FFD85A" />
//         <stop offset="1" stopColor="#FFB800" />
//       </linearGradient>
//     </defs>
//     <path
//       d="M137.051 22.4185L128.123 26.054C127.849 26.1662 127.537 26.0595 127.387 25.8051L121.41 15.2924C121.177 14.8958 120.597 14.904 120.378 15.3088L114.111 25.8325C113.966 26.1006 113.638 26.2154 113.356 26.0951L104.758 22.4185C104.293 22.2188 103.809 22.6592 103.96 23.1407L109.042 39.3269C109.119 39.5731 109.349 39.7427 109.608 39.7427L131.367 39.7482C131.616 39.7482 131.838 39.5923 131.925 39.3597L137.834 23.1708C138.009 22.6866 137.53 22.2243 137.054 22.4185H137.051ZM124.534 30.2668L120.283 37.7895C120.222 37.8962 120.064 37.8552 120.058 37.7348L119.886 33.1801H118.401V33.1637C118.362 33.1692 118.324 33.1801 118.283 33.1801H115.2C115.11 33.1801 115.052 33.0817 115.093 33.0023L119.675 24.5139C119.837 24.2349 120.132 24.0653 120.452 24.0653H123.535C123.625 24.0653 123.683 24.1638 123.642 24.2431L120.485 30.089H124.427C124.52 30.089 124.577 30.1875 124.531 30.2695L124.534 30.2668Z"
//       fill="url(#logoGold)"
//     />
//   </svg>

//           <span style={{
//     position: 'relative',
//     zIndex: 1,
//     fontWeight: 900,
//     fontSize: '15px',
//     letterSpacing: '0.08em',
//     color: '#ffffff',
//     fontFamily: 'Inter, sans-serif',
//     textTransform: 'uppercase',
//     whiteSpace: 'nowrap',
//   }}>
//     MIGHTY{' '}
//     <span style={{
//       background: 'linear-gradient(90deg, #FFD85A 0%, #FFB800 100%)',
//       WebkitBackgroundClip: 'text',
//       WebkitTextFillColor: 'transparent',
//       backgroundClip: 'text',
//     }}>
//       LUCK
//     </span>
//   </span>
//         </div>

//         {/* Search */}
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '10px',
//           backgroundColor: '#112F82',
//           borderRadius: '8px',
//           padding: '0 16px',
//           height: '40px',
//           width: '280px',
//           flexShrink: 0,
//         }}>
//           <svg width="16" height="16" viewBox="359 21 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M365.561 22.0388C364.172 22.2143 362.858 22.8596 361.862 23.8563C359.976 25.7423 359.467 28.6013 360.592 30.9876C361.522 32.9595 363.377 34.3239 365.508 34.6031C367.088 34.8102 368.707 34.4042 369.999 33.4765C370.152 33.3662 370.289 33.276 370.302 33.276C370.316 33.276 371.361 34.3092 372.625 35.572C375.047 37.992 375.05 37.9943 375.329 37.9952C375.467 37.9956 375.737 37.8822 375.82 37.7891C375.91 37.6875 376 37.4552 376 37.3241C376 37.0449 375.998 37.0423 373.577 34.6196C372.314 33.3557 371.281 32.312 371.281 32.3003C371.281 32.2886 371.372 32.15 371.484 31.9922C372.261 30.8948 372.654 29.6705 372.656 28.3463C372.658 26.6335 372.001 25.049 370.789 23.8445C369.835 22.8959 368.657 22.2947 367.311 22.0692C366.887 21.9981 366.004 21.9828 365.561 22.0388ZM367.061 23.3833C368.487 23.6123 369.704 24.3828 370.476 25.5458C371.051 26.4108 371.315 27.2757 371.318 28.3057C371.32 28.8016 371.284 29.1022 371.171 29.5569C370.731 31.3153 369.32 32.7253 367.562 33.1654C367.107 33.2792 366.807 33.3146 366.311 33.3129C365.281 33.3094 364.416 33.0455 363.551 32.4709C362.171 31.5538 361.341 29.9996 361.341 28.3288C361.34 27.4883 361.513 26.784 361.904 26.027C362.536 24.804 363.659 23.8936 365.014 23.5049C365.585 23.3411 366.47 23.2884 367.061 23.3833Z"
//               fill="white"
//               opacity="0.5"
//             />
//           </svg>
//           <input
//             type="text"
//             placeholder="What are you looking for?"
//             style={{
//               background: 'transparent',
//               border: 'none',
//               outline: 'none',
//               color: '#BBCAF3',
//               fontSize: '13px',
//               width: '100%',
//               fontFamily: 'Inter, sans-serif',
//             }}
//           />
//         </div>

//       </div>

//       {/* RIGHT: Login + Join */}
//       <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
//         <button style={{
//           backgroundColor: '#1463FF',
//           color: '#ffffff',
//           border: 'none',
//           borderRadius: '8px',
//           width: '99px',
//           height: '40px',
//           fontSize: '14px',
//           fontWeight: 700,
//           cursor: 'pointer',
//           fontFamily: 'Inter, sans-serif',
//         }}>
//           Login
//         </button>
//         <button style={{
//           backgroundColor: '#FFC83D',
//           color: '#1A1404',
//           border: 'none',
//           borderRadius: '8px',
//           width: '90px',
//           height: '40px',
//           fontSize: '14px',
//           fontWeight: 700,
//           cursor: 'pointer',
//           fontFamily: 'Inter, sans-serif',
//         }}>
//           Join
//         </button>
//       </div>

//     </header>
//   );
// }

'use client';
import { useAppDispatch } from '@/app/store/hooks';
import { toggleSidebar } from '@/app/store';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const dispatch = useAppDispatch();
  const [isMobile, setIsMobile] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <header
      style={{
        backgroundColor: '#0C1F56',
        height: '60px',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: isMobile ? '10px 12px' : '10px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 50,
        boxSizing: 'border-box',
      }}
    >
      {/* LEFT + CENTER grouped */}
      <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '12px' : '50px' }}>

        {/* Hamburger */}
        <button
          onClick={() => dispatch(toggleSidebar())}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
            <path
              d="M0 0H16M0 6.857H11.429M0 13.714H16M20.571 2.286L19.253 3.288C17.086 4.935 16 5.759 16 6.857C16 7.956 17.085 8.78 19.253 10.427L20.571 11.429"
              stroke="white"
              strokeWidth="1.71429"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0, position: 'relative' }}>
          <div style={{
            position: 'absolute',
            left: '30px',
            bottom: '-30px',
            top: 'auto',
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            backgroundColor: '#1463FF',
            filter: 'blur(22px)',
            opacity: 0.6,
            pointerEvents: 'none',
            zIndex: 0,
          }} />

          <svg style={{ position: 'relative', zIndex: 1 }} width="34" height="26" viewBox="103 14 36 27" fill="none">
            <defs>
              <linearGradient id="logoGold" x1="108.005" y1="27.3753" x2="133.35" y2="27.3753" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFD85A" />
                <stop offset="1" stopColor="#FFB800" />
              </linearGradient>
            </defs>
            <path
              d="M137.051 22.4185L128.123 26.054C127.849 26.1662 127.537 26.0595 127.387 25.8051L121.41 15.2924C121.177 14.8958 120.597 14.904 120.378 15.3088L114.111 25.8325C113.966 26.1006 113.638 26.2154 113.356 26.0951L104.758 22.4185C104.293 22.2188 103.809 22.6592 103.96 23.1407L109.042 39.3269C109.119 39.5731 109.349 39.7427 109.608 39.7427L131.367 39.7482C131.616 39.7482 131.838 39.5923 131.925 39.3597L137.834 23.1708C138.009 22.6866 137.53 22.2243 137.054 22.4185H137.051ZM124.534 30.2668L120.283 37.7895C120.222 37.8962 120.064 37.8552 120.058 37.7348L119.886 33.1801H118.401V33.1637C118.362 33.1692 118.324 33.1801 118.283 33.1801H115.2C115.11 33.1801 115.052 33.0817 115.093 33.0023L119.675 24.5139C119.837 24.2349 120.132 24.0653 120.452 24.0653H123.535C123.625 24.0653 123.683 24.1638 123.642 24.2431L120.485 30.089H124.427C124.52 30.089 124.577 30.1875 124.531 30.2695L124.534 30.2668Z"
              fill="url(#logoGold)"
            />
          </svg>

          {/* Hide text on very small screens */}
          {!isMobile && (
            <span style={{
              position: 'relative',
              zIndex: 1,
              fontWeight: 900,
              fontSize: '15px',
              letterSpacing: '0.08em',
              color: '#ffffff',
              fontFamily: 'Inter, sans-serif',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}>
              MIGHTY{' '}
              <span style={{
                background: 'linear-gradient(90deg, #FFD85A 0%, #FFB800 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                LUCK
              </span>
            </span>
          )}

          {/* Show text on mobile too but smaller */}
          {isMobile && (
            <span style={{
              position: 'relative',
              zIndex: 1,
              fontWeight: 900,
              fontSize: '12px',
              letterSpacing: '0.06em',
              color: '#ffffff',
              fontFamily: 'Inter, sans-serif',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}>
              MIGHTY{' '}
              <span style={{
                background: 'linear-gradient(90deg, #FFD85A 0%, #FFB800 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                LUCK
              </span>
            </span>
          )}
        </div>

        {/* Search — hidden on mobile, shown as icon instead */}
        {!isMobile && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: '#112F82',
            borderRadius: '8px',
            padding: '0 16px',
            height: '40px',
            width: '280px',
            flexShrink: 0,
          }}>
            <svg width="16" height="16" viewBox="359 21 17 17" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M365.561 22.0388C364.172 22.2143 362.858 22.8596 361.862 23.8563C359.976 25.7423 359.467 28.6013 360.592 30.9876C361.522 32.9595 363.377 34.3239 365.508 34.6031C367.088 34.8102 368.707 34.4042 369.999 33.4765C370.152 33.3662 370.289 33.276 370.302 33.276C370.316 33.276 371.361 34.3092 372.625 35.572C375.047 37.992 375.05 37.9943 375.329 37.9952C375.467 37.9956 375.737 37.8822 375.82 37.7891C375.91 37.6875 376 37.4552 376 37.3241C376 37.0449 375.998 37.0423 373.577 34.6196C372.314 33.3557 371.281 32.312 371.281 32.3003C371.281 32.2886 371.372 32.15 371.484 31.9922C372.261 30.8948 372.654 29.6705 372.656 28.3463C372.658 26.6335 372.001 25.049 370.789 23.8445C369.835 22.8959 368.657 22.2947 367.311 22.0692C366.887 21.9981 366.004 21.9828 365.561 22.0388ZM367.061 23.3833C368.487 23.6123 369.704 24.3828 370.476 25.5458C371.051 26.4108 371.315 27.2757 371.318 28.3057C371.32 28.8016 371.284 29.1022 371.171 29.5569C370.731 31.3153 369.32 32.7253 367.562 33.1654C367.107 33.2792 366.807 33.3146 366.311 33.3129C365.281 33.3094 364.416 33.0455 363.551 32.4709C362.171 31.5538 361.341 29.9996 361.341 28.3288C361.34 27.4883 361.513 26.784 361.904 26.027C362.536 24.804 363.659 23.8936 365.014 23.5049C365.585 23.3411 366.47 23.2884 367.061 23.3833Z"
                fill="white"
                opacity="0.5"
              />
            </svg>
            <input
              type="text"
              placeholder="What are you looking for?"
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#BBCAF3',
                fontSize: '13px',
                width: '100%',
                fontFamily: 'Inter, sans-serif',
              }}
            />
          </div>
        )}
      </div>

      {/* RIGHT */}
      <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '6px' : '9px' }}>

        {/* Search icon on mobile */}
        {isMobile && (
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            style={{
              background: '#112F82',
              border: 'none',
              borderRadius: '8px',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <svg width="16" height="16" viewBox="359 21 17 17" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M365.561 22.0388C364.172 22.2143 362.858 22.8596 361.862 23.8563C359.976 25.7423 359.467 28.6013 360.592 30.9876C361.522 32.9595 363.377 34.3239 365.508 34.6031C367.088 34.8102 368.707 34.4042 369.999 33.4765C370.152 33.3662 370.289 33.276 370.302 33.276C370.316 33.276 371.361 34.3092 372.625 35.572C375.047 37.992 375.05 37.9943 375.329 37.9952C375.467 37.9956 375.737 37.8822 375.82 37.7891C375.91 37.6875 376 37.4552 376 37.3241C376 37.0449 375.998 37.0423 373.577 34.6196C372.314 33.3557 371.281 32.312 371.281 32.3003C371.281 32.2886 371.372 32.15 371.484 31.9922C372.261 30.8948 372.654 29.6705 372.656 28.3463C372.658 26.6335 372.001 25.049 370.789 23.8445C369.835 22.8959 368.657 22.2947 367.311 22.0692C366.887 21.9981 366.004 21.9828 365.561 22.0388ZM367.061 23.3833C368.487 23.6123 369.704 24.3828 370.476 25.5458C371.051 26.4108 371.315 27.2757 371.318 28.3057C371.32 28.8016 371.284 29.1022 371.171 29.5569C370.731 31.3153 369.32 32.7253 367.562 33.1654C367.107 33.2792 366.807 33.3146 366.311 33.3129C365.281 33.3094 364.416 33.0455 363.551 32.4709C362.171 31.5538 361.341 29.9996 361.341 28.3288C361.34 27.4883 361.513 26.784 361.904 26.027C362.536 24.804 363.659 23.8936 365.014 23.5049C365.585 23.3411 366.47 23.2884 367.061 23.3833Z"
                fill="white"
                opacity="0.7"
              />
            </svg>
          </button>
        )}

        {/* Login */}
        <button style={{
          backgroundColor: '#1463FF',
          color: '#ffffff',
          border: 'none',
          borderRadius: '8px',
          width: isMobile ? '64px' : '99px',
          height: isMobile ? '36px' : '40px',
          fontSize: isMobile ? '12px' : '14px',
          fontWeight: 700,
          cursor: 'pointer',
          fontFamily: 'Inter, sans-serif',
          flexShrink: 0,
        }}>
          Login
        </button>

        {/* Join */}
        <button style={{
          backgroundColor: '#FFC83D',
          color: '#1A1404',
          border: 'none',
          borderRadius: '8px',
          width: isMobile ? '54px' : '90px',
          height: isMobile ? '36px' : '40px',
          fontSize: isMobile ? '12px' : '14px',
          fontWeight: 700,
          cursor: 'pointer',
          fontFamily: 'Inter, sans-serif',
          flexShrink: 0,
        }}>
          Join
        </button>
      </div>

      {/* Mobile search dropdown */}
      {isMobile && searchOpen && (
        <div style={{
          position: 'absolute',
          top: '60px',
          left: 0,
          right: 0,
          backgroundColor: '#0C1F56',
          padding: '10px 12px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          zIndex: 49,
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: '#112F82',
            borderRadius: '8px',
            padding: '0 16px',
            height: '40px',
            width: '100%',
            boxSizing: 'border-box',
          }}>
            <svg width="16" height="16" viewBox="359 21 17 17" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M365.561 22.0388C364.172 22.2143 362.858 22.8596 361.862 23.8563C359.976 25.7423 359.467 28.6013 360.592 30.9876C361.522 32.9595 363.377 34.3239 365.508 34.6031C367.088 34.8102 368.707 34.4042 369.999 33.4765C370.152 33.3662 370.289 33.276 370.302 33.276C370.316 33.276 371.361 34.3092 372.625 35.572C375.047 37.992 375.05 37.9943 375.329 37.9952C375.467 37.9956 375.737 37.8822 375.82 37.7891C375.91 37.6875 376 37.4552 376 37.3241C376 37.0449 375.998 37.0423 373.577 34.6196C372.314 33.3557 371.281 32.312 371.281 32.3003C371.281 32.2886 371.372 32.15 371.484 31.9922C372.261 30.8948 372.654 29.6705 372.656 28.3463C372.658 26.6335 372.001 25.049 370.789 23.8445C369.835 22.8959 368.657 22.2947 367.311 22.0692C366.887 21.9981 366.004 21.9828 365.561 22.0388ZM367.061 23.3833C368.487 23.6123 369.704 24.3828 370.476 25.5458C371.051 26.4108 371.315 27.2757 371.318 28.3057C371.32 28.8016 371.284 29.1022 371.171 29.5569C370.731 31.3153 369.32 32.7253 367.562 33.1654C367.107 33.2792 366.807 33.3146 366.311 33.3129C365.281 33.3094 364.416 33.0455 363.551 32.4709C362.171 31.5538 361.341 29.9996 361.341 28.3288C361.34 27.4883 361.513 26.784 361.904 26.027C362.536 24.804 363.659 23.8936 365.014 23.5049C365.585 23.3411 366.47 23.2884 367.061 23.3833Z"
                fill="white"
                opacity="0.5"
              />
            </svg>
            <input
              type="text"
              placeholder="What are you looking for?"
              autoFocus
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#BBCAF3',
                fontSize: '13px',
                width: '100%',
                fontFamily: 'Inter, sans-serif',
              }}
            />
          </div>
        </div>
      )}

    </header>
  );
}