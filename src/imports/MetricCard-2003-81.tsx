import svgPaths from "./svg-k4vxzggg93";

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-[203px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#797979] text-[14px]">Total Consumers</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[203px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-[-0.11px] text-[34px] text-black text-nowrap top-[-2.89px] tracking-[-0.75px]">847</p>
      <div className="absolute flex h-[1074.425px] items-center justify-center right-[-59.47px] top-[-487px] w-[672.467px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[57.958deg] skew-x-[23.608deg]">
          <div className="relative size-[633.759px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 633.759 633.759">
              <g filter="url(#filter0_i_2003_85)" id="Rectangle 23" opacity="0.05">
                <path d={svgPaths.p3fef7400} stroke="var(--stroke-0, #0085A6)" strokeWidth="61" />
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
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[37px] top-1/2 translate-y-[-50%]">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Frame() {
  return <div className="absolute bg-[#128eac] h-[93px] left-[4px] rounded-br-[80px] rounded-tr-[80px] top-[calc(50%-0.5px)] translate-y-[-50%] w-[11px]" />;
}

export default function MetricCard() {
  return (
    <div className="bg-white overflow-clip relative rounded-[14px] size-full" data-name="MetricCard">
      <Frame1 />
      <Frame />
      <div className="absolute flex items-center justify-center right-[-133px] size-[237.5px] top-[-30px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[45deg]">
          <div className="bg-[rgba(18,142,172,0.2)] h-[195.869px] relative rounded-[30px] w-[140.007px]">
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_4px_110px_0px_white]" />
          </div>
        </div>
      </div>
    </div>
  );
}