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
    <footer className="bg-[#0b1f33] content-stretch flex flex-col items-center pb-0 px-4 sm:px-6 md:pl-[50px] md:pr-[24px] pt-8 md:pt-[64px] relative w-full" data-name="Footer">
      <div className="content-stretch flex flex-col gap-6 md:gap-[27px] items-center relative shrink-0 w-full">
        {/* Main Content Container */}
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-0 justify-between max-w-[1200px]">
          {/* Logo and Description */}
          <div className="flex flex-col gap-4 items-start w-full md:w-auto">
            <div className="h-[32px] sm:h-[39.987px] relative shrink-0 w-[146px] sm:w-[182.2px]">
              <img alt="SDI Analytics Logo" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLogo} />
            </div>
            <div className="opacity-80 relative w-full md:w-[378.4px]">
              <p className="font-['Arial:Regular',sans-serif] leading-[22px] sm:leading-[26px] not-italic text-[#e6f0fa] text-[14px] sm:text-[16px]">{`Empowering Abu Dhabi's government with spatial data insights and analytics for smarter decision-making.`}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3 md:gap-[16px] items-start w-full md:w-auto">
            <div className="relative">
              <p className="font-['Arial:Bold',sans-serif] leading-[24px] sm:leading-[27px] not-italic text-[16px] sm:text-[18px] text-nowrap text-white">Quick Links</p>
            </div>
            <div className="flex flex-col gap-2 md:gap-[12px] items-start w-full">
              <div className="relative">
                <div className="flex items-start opacity-80 hover:opacity-100 transition-opacity">
                  <p className="font-['Arial:Regular',sans-serif] leading-[20px] sm:leading-[24px] not-italic text-[#e6f0fa] text-[14px] sm:text-[16px] text-nowrap cursor-pointer" onClick={() => onNavigate?.('home')}>Home</p>
                </div>
              </div>
              <div className="relative">
                <div className="flex items-start opacity-80 hover:opacity-100 transition-opacity">
                  <p className="font-['Arial:Regular',sans-serif] leading-[20px] sm:leading-[24px] not-italic text-[#e6f0fa] text-[14px] sm:text-[16px] text-nowrap cursor-pointer" onClick={() => onNavigate?.('service')}>Service Analytics</p>
                </div>
              </div>
              <div className="relative">
                <div className="flex items-start opacity-80 hover:opacity-100 transition-opacity">
                  <p className="font-['Arial:Regular',sans-serif] leading-[20px] sm:leading-[24px] not-italic text-[#e6f0fa] text-[14px] sm:text-[16px] text-nowrap cursor-pointer" onClick={() => onNavigate?.('consumer')}>Consumer Insights</p>
                </div>
              </div>
              <div className="relative">
                <div className="flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity cursor-pointer" onClick={handleSDIPortalClick}>
                  <p className="font-['Arial:Regular',sans-serif] leading-[20px] sm:leading-[24px] not-italic text-[#e6f0fa] text-[14px] sm:text-[16px] text-nowrap">SDI Portal</p>
                  <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4 text-[#e6f0fa]" />
                </div>
              </div>
              <div className="relative">
                <div className="flex items-start opacity-80 hover:opacity-100 transition-opacity">
                  <p className="font-['Arial:Regular',sans-serif] leading-[20px] sm:leading-[24px] not-italic text-[#e6f0fa] text-[14px] sm:text-[16px] text-nowrap cursor-pointer" onClick={() => onNavigate?.('aboutUs')}>About Us</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="content-stretch flex flex-col items-start py-3 md:py-[16.4px] px-0 relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-[rgba(230,240,250,0.2)] border-solid inset-0 pointer-events-none" />
          <div className="opacity-70 relative shrink-0 w-full flex items-center justify-center py-2">
            <p className="font-['Arial:Regular',sans-serif] leading-[18px] sm:leading-[21px] not-italic text-[#e6f0fa] text-[12px] sm:text-[14px] text-center px-4">© 2025 SDI Service Analytics. Abu Dhabi Spatial Data Infrastructure.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}