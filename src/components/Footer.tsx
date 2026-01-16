import imgLogo from "figma:asset/909a7f60284cdc6965b098f6e0ace0d70152fd00.png";
import { ExternalLink } from 'lucide-react';

interface FooterProps {
  theme?: 'dark' | 'light';
  onNavigate?: (view: 'home' | 'service' | 'consumer' | 'aboutUs') => void;
}

export function Footer({ theme, onNavigate }: FooterProps) {
  const handleSDIPortalClick = () => {
    window.open('https://sdi.abudhabi.ae', '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-[#0b1f33] content-stretch flex flex-col items-center pb-0 pl-[50px] pr-[24px] pt-[64px] relative w-full" data-name="Footer">
      <div className="content-stretch flex flex-col gap-[27px] items-center relative shrink-0 w-full">
        {/* Main Content Container */}
        <div className="h-[237px] relative shrink-0 w-full max-w-[613px]">
          {/* Logo and Description */}
          <div className="absolute content-stretch flex flex-col gap-[16px] h-[247px] items-start left-0 top-0 w-[378.4px]">
            <div className="h-[39.987px] relative shrink-0 w-[182.2px]">
              <img alt="SDI Analytics Logo" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLogo} />
            </div>
            <div className="h-[78px] opacity-80 relative shrink-0 w-[378.4px]">
              <p className="absolute font-['Arial:Regular',sans-serif] leading-[26px] left-0 not-italic text-[#e6f0fa] text-[16px] top-[-2.4px] w-[353px]">{`Empowering Abu Dhabi's government with spatial data insights and analytics for smarter decision-making.`}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="absolute content-stretch flex flex-col gap-[16px] h-[247px] items-start left-[426px] top-0 w-[134px]">
            <div className="h-[27px] relative shrink-0 w-full">
              <p className="absolute font-['Arial:Bold',sans-serif] leading-[27px] left-0 not-italic text-[18px] text-nowrap text-white top-[-2.2px]">Quick Links</p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] h-[204px] items-start relative shrink-0 w-full">
              <div className="h-[24px] relative shrink-0 w-full">
                <div className="absolute content-stretch flex h-[21.6px] items-start left-0 opacity-80 top-[0.8px] w-[42.888px] hover:opacity-100 transition-opacity">
                  <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#e6f0fa] text-[16px] text-nowrap cursor-pointer" onClick={() => onNavigate?.('home')}>Home</p>
                </div>
              </div>
              <div className="h-[24px] relative shrink-0 w-full">
                <div className="absolute content-stretch flex h-[21.6px] items-start left-0 opacity-80 top-[0.8px] w-[116.725px] hover:opacity-100 transition-opacity">
                  <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#e6f0fa] text-[16px] text-nowrap cursor-pointer" onClick={() => onNavigate?.('service')}>Service Analytics</p>
                </div>
              </div>
              <div className="h-[24px] relative shrink-0 w-full">
                <div className="absolute content-stretch flex h-[21.6px] items-start left-0 opacity-80 top-[0.8px] w-[65.75px] hover:opacity-100 transition-opacity">
                  <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#e6f0fa] text-[16px] text-nowrap cursor-pointer" onClick={() => onNavigate?.('consumer')}>Consumer Insights</p>
                </div>
              </div>
              <div className="h-[24px] relative shrink-0 w-full">
                <div className="absolute content-stretch flex h-[21.6px] items-center gap-1 left-0 opacity-80 top-[0.8px] hover:opacity-100 transition-opacity cursor-pointer" onClick={handleSDIPortalClick}>
                  <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#e6f0fa] text-[16px] text-nowrap">SDI Portal</p>
                  <ExternalLink className="w-4 h-4 text-[#e6f0fa]" />
                </div>
              </div>
              <div className="h-[24px] relative shrink-0 w-full">
                <div className="absolute content-stretch flex h-[21.6px] items-start left-0 opacity-80 top-[0.8px] w-[65.75px] hover:opacity-100 transition-opacity">
                  <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#e6f0fa] text-[16px] text-nowrap cursor-pointer" onClick={() => onNavigate?.('aboutUs')}>About Us</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="content-stretch flex flex-col h-[53.8px] items-start py-[16.4px] px-0 relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-[rgba(230,240,250,0.2)] border-solid inset-0 pointer-events-none" />
          <div className="h-[21px] opacity-70 relative shrink-0 w-full flex items-center justify-center">
            <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic text-[#e6f0fa] text-[14px] text-center text-nowrap">© 2025 SDI Service Analytics. Abu Dhabi Spatial Data Infrastructure.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}