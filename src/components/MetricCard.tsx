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
      className={`bg-white overflow-clip relative rounded-[14px] w-full h-[100px] sm:h-[110px] md:h-[120px] transition-all duration-300 ${ 
        onClick ? 'cursor-pointer hover:shadow-2xl hover:-translate-y-1' : ''
      }`}
      onClick={onClick}
      style={strokeStyles}
    >
      {/* Main content container */}
      <div className="absolute content-stretch flex flex-col gap-[6px] md:gap-[8px] items-start left-[20px] sm:left-[28px] md:left-[37px] top-1/2 translate-y-[-50%] z-10 max-w-[calc(100%-60px)] sm:max-w-[calc(100%-70px)] md:max-w-[calc(100%-80px)]">
        {/* Title */}
        <div className="content-stretch flex h-auto items-start relative shrink-0 w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px]">
          <p className="basis-0 font-['Arimo',sans-serif] font-bold grow leading-[14px] sm:leading-[15px] md:leading-[16px] min-h-px min-w-px relative shrink-0 text-[#797979] text-[11px] sm:text-[11.5px] md:text-[12px] z-10 line-clamp-2">
            {title}
          </p>
        </div>

        {/* Value with decorative SVG */}
        <div className="h-[26px] sm:h-[29px] md:h-[32px] relative shrink-0 w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px]">
          <p className="absolute font-['Arimo',sans-serif] font-bold leading-[26px] sm:leading-[29px] md:leading-[32px] left-[-0.11px] text-[22px] sm:text-[25px] md:text-[28px] text-black text-nowrap top-[-2.89px] tracking-[-0.75px] z-10 truncate max-w-full">
            {value}
          </p>
          <div className="absolute flex h-[900px] md:h-[1074.425px] items-center justify-center right-[-50px] sm:right-[-55px] md:right-[-59.47px] top-[-400px] md:top-[-487px] w-[560px] md:w-[672.467px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[57.958deg] skew-x-[23.608deg]">
              <div className="relative size-[530px] md:size-[633.759px]">
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
        className="absolute h-[70px] sm:h-[80px] md:h-[93px] left-[3px] md:left-[4px] rounded-br-[80px] rounded-tr-[80px] top-[calc(50%-0.5px)] translate-y-[-50%] w-[8px] sm:w-[9px] md:w-[11px]"
        style={{ backgroundColor: cardBorderColor }}
      />

      {/* Rotated square decoration with semi-transparent background */}
      <div className="absolute flex items-center justify-center right-[-100px] sm:right-[-115px] md:right-[-133px] size-[190px] sm:size-[210px] md:size-[237.5px] top-[-25px] md:top-[-30px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[45deg]">
          <div 
            className="h-[156px] sm:h-[176px] md:h-[195.869px] relative rounded-[24px] sm:rounded-[27px] md:rounded-[30px] w-[112px] sm:w-[126px] md:w-[140.007px]"
            style={{ backgroundColor: `${cardBorderColor}33` }}
          >
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_4px_110px_0px_white]" />
          </div>
        </div>
      </div>
    </div>
  );
}