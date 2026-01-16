import svgPaths from "./svg-mehpbz66a0";

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#797979] text-[14px]">Total Consumers</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[32px] text-black text-nowrap top-[-2.78px] tracking-[-0.75px]">847</p>
      <div className="absolute flex h-[1074.425px] items-center justify-center right-[-59.58px] top-[-486.89px] w-[672.467px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[57.958deg] skew-x-[23.608deg]">
          <div className="relative size-[633.759px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 633.759 633.759">
              <g filter="url(#filter0_i_265_1618)" id="Rectangle 23" opacity="0.12">
                <path d={svgPaths.p3fef7400} stroke="var(--stroke-0, #0085A6)" strokeWidth="61" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="637.759" id="filter0_i_265_1618" width="633.759" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="17" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                  <feBlend in2="shape" mode="normal" result="effect1_innerShadow_265_1618" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[15.986px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#797979] text-[12px]">Active entities</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[83.986px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Text() {
  return <div className="absolute h-[18.667px] left-0 top-[19.55px] w-[47.597px]" data-name="Text" />;
}

function Text1() {
  return (
    <div className="content-stretch flex h-[16px] items-start pb-[4px] pt-0 px-0 relative shrink-0 w-[70.097px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#797979] text-[12px] text-nowrap">vs last period</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[19px] items-center left-0 top-[17.55px]">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#00d492] text-[14px] text-nowrap">↑ 12.5%</p>
      <Text1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[41px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.889px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Text />
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[27px] items-start left-[33.89px] top-[20.89px] w-[203px]">
      <Container />
      <Container1 />
    </div>
  );
}

function Frame1() {
  return <div className="absolute bg-[#128eac] h-[93px] left-0 rounded-br-[80px] rounded-tr-[80px] top-1/2 translate-y-[-50%] w-[11px]" />;
}

export default function MetricCard() {
  return (
    <div className="bg-white border-4 border-solid border-white overflow-clip relative rounded-[14px] size-full" data-name="MetricCard">
      <Frame2 />
      <Frame1 />
      <div className="absolute flex items-center justify-center right-[-137px] size-[237.5px] top-[-14px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[45deg]">
          <div className="bg-[rgba(18,142,172,0.35)] h-[195.869px] relative rounded-[30px] w-[140.007px]">
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_4px_110px_0px_white]" />
          </div>
        </div>
      </div>
    </div>
  );
}