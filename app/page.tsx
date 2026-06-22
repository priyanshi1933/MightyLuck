// 'use client';
// import Navbar from '@/components/layout/Navbar';
// import Sidebar from '@/components/layout/Sidebar';
// import HeroBanner from '@/components/sections/HeroBanner';
// import DepositStrip from '@/components/sections/DepositStrip';
// import SlotsSection from '@/components/sections/SlotsSection';
// import { useAppSelector } from '@/app/store/hooks';

// export default function Home() {
//   const sidebarOpen = useAppSelector((s) => s.ui.sidebarOpen);

//   return (
//     <div style={{ backgroundColor: '#091741', minHeight: '100vh', width: '100vw', overflowX: 'hidden' }}>
//       <Navbar />
//       <Sidebar />
//       <main
//         className="transition-all duration-300"
//         style={{ 
//           marginLeft: sidebarOpen ? '240px' : '0px', // Matches your custom sidebar layout width perfectly
//           paddingTop: '60px', // Replaces marginTop to safely contain inner absolute objects
//           boxSizing: 'border-box',
          
//         }}
//       >
//         <div style={{ padding: '16px 16px 0', boxSizing: 'border-box' }}>
//           <HeroBanner />
//         </div>
//         <div style={{ marginTop: '12px',padding: '16px 16px 0', boxSizing: 'border-box'}}>
//           <DepositStrip />
//         </div>
//         <div style={{ padding: '0 16px 24px' }}>
//           <SlotsSection />
//         </div>
//       </main>
//     </div>
//   );
// }

'use client';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import HeroBanner from '@/components/sections/HeroBanner';
import DepositStrip from '@/components/sections/DepositStrip';
import SlotsSection from '@/components/sections/SlotsSection';
import { useAppSelector } from '@/app/store/hooks';
import { useEffect, useState } from 'react';

export default function Home() {
  const sidebarOpen = useAppSelector((s) => s.ui.sidebarOpen);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div style={{ backgroundColor: '#091741', minHeight: '100vh', width: '100vw', overflowX: 'hidden' }}>
      <Navbar />
      <Sidebar />
      <main
        className="transition-all duration-300"
        style={{
          // On mobile: no sidebar margin, on desktop: push right when sidebar open
          marginLeft: isMobile ? '0px' : sidebarOpen ? '240px' : '0px',
          paddingTop: '60px',
          boxSizing: 'border-box',
        }}
      >
        {/* Hero Banner */}
        <div style={{
          padding: isMobile ? '10px 10px 0' : '16px 16px 0',
          boxSizing: 'border-box',
        }}>
          <HeroBanner />
        </div>

        {/* Deposit Strip */}
        <div style={{
          marginTop: '12px',
          padding: isMobile ? '0 10px' : '0',
          boxSizing: 'border-box',
          margin:'20px'
        }}>
          <DepositStrip />
        </div>

        {/* Slots Section */}
        <div style={{
          padding: isMobile ? '0 10px 24px' : '0 16px 24px',
          boxSizing: 'border-box',
        }}>
          <SlotsSection />
        </div>
      </main>
    </div>
  );
}