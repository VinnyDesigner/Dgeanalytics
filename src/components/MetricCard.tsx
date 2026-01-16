import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';
import svgPaths from '../imports/svg-k4vxzggg93';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon?: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
  gradient?: string;
  subtitle?: string;
  onClick?: () => void;
  theme?: 'dark' | 'light';
  customBorder?: string;
  borderColor?: string;
}

export function MetricCard({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  gradient = 'from-blue-600 to-cyan-600',
  subtitle,
  onClick,
  theme = 'dark',
  customBorder,
  borderColor
}: MetricCardProps) {
  const cardBorderColor = borderColor || '#128eac';

  // Premium stroke effect styles
  const strokeStyles = theme === 'light' 
    ? {
        border: '4px solid #FFF',
        boxShadow: '0 10px 15px -3px rgba(229, 231, 235, 0.50), 0 4px 6px -4px rgba(229, 231, 235, 0.50)'
      }
    : {
        border: '1px solid rgba(6, 51, 96, 0.3)',
        boxShadow: '0 8px 32px -8px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(6, 51, 96, 0.15) inset'
      };

  return (
    <div 
      className={`bg-white overflow-clip relative rounded-[14px] w-full h-[120px] transition-all duration-300 ${ 
        onClick ? 'cursor-pointer hover:shadow-2xl hover:-translate-y-1' : ''
      }`}
      onClick={onClick}
      style={strokeStyles}
    >
      {/* Main content container */}
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[37px] top-1/2 translate-y-[-50%] z-10 max-w-[calc(100%-80px)]">
        {/* Title */}
        <div className="content-stretch flex h-auto items-start relative shrink-0 w-full max-w-[180px]">
          <p className="basis-0 font-['Arimo',sans-serif] font-bold grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#797979] text-[12px] z-10 line-clamp-2">
            {title}
          </p>
        </div>

        {/* Value with decorative SVG */}
        <div className="h-[32px] relative shrink-0 w-full max-w-[180px]">
          <p className="absolute font-['Arimo',sans-serif] font-bold leading-[32px] left-[-0.11px] text-[28px] text-black text-nowrap top-[-2.89px] tracking-[-0.75px] z-10 truncate max-w-full">
            {value}
          </p>
          <div className="absolute flex h-[1074.425px] items-center justify-center right-[-59.47px] top-[-487px] w-[672.467px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[57.958deg] skew-x-[23.608deg]">
              <div className="relative size-[633.759px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 633.759 633.759">
                  <g filter="url(#filter0_i_2003_85)" id="Rectangle 23" opacity="0.05">
                    <path d={svgPaths.p3fef7400} stroke={cardBorderColor} strokeWidth="61" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="637.759" id="filter0_i_2003_85" width="633.759" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="17" />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                      <feBlend in2="shape" mode="normal" result="effect1_innerShadow_2003_85" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left vertical bar */}
      <div 
        className="absolute h-[93px] left-[4px] rounded-br-[80px] rounded-tr-[80px] top-[calc(50%-0.5px)] translate-y-[-50%] w-[11px]"
        style={{ backgroundColor: cardBorderColor }}
      />

      {/* Rotated square decoration with semi-transparent background */}
      <div className="absolute flex items-center justify-center right-[-133px] size-[237.5px] top-[-30px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[45deg]">
          <div 
            className="h-[195.869px] relative rounded-[30px] w-[140.007px]"
            style={{ backgroundColor: `${cardBorderColor}33` }}
          >
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_4px_110px_0px_white]" />
          </div>
        </div>
      </div>
    </div>
  );
}