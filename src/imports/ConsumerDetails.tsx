import svgPaths from "./svg-4v2iqew1d8";

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[128.963px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-[64.5px] not-italic text-[#314158] text-[16px] text-center text-nowrap top-[2px] translate-x-[-50%]">Back to Overview</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[41.6px] relative rounded-[10px] shrink-0 w-[186.563px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pl-[16.8px] pr-[0.8px] py-[0.8px] relative size-full">
        <Icon />
        <Text />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3c797180} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ac0b600} id="Vector_2" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[36px] left-0 not-italic text-[#0f172b] text-[24px] text-nowrap top-[2.6px]">High-Usage Consumers</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Circular_Std:Book',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[2.2px]">Consumers with high API request volume</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[56px] relative shrink-0 w-[263.888px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#fff7ed] h-[73.6px] relative rounded-[10px] shrink-0 w-[329.488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffd6a7] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pl-[16.8px] pr-[0.8px] py-[0.8px] relative size-full">
        <Icon1 />
        <Container />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[73.6px] items-center left-0 top-0 w-[532.05px]" data-name="Container">
      <Button />
      <Container1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Circular_Std:Book',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[2.2px]">Total Consumers</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Circular_Std:Bold',sans-serif] leading-[36px] left-0 not-italic text-[#0f172b] text-[30px] text-nowrap top-[4.2px]">13</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[113.6px] items-start left-0 pb-[0.8px] pt-[24.8px] px-[24.8px] rounded-[20px] top-0 w-[393.325px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Circular_Std:Book',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[2.2px]">Total Requests</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Circular_Std:Bold',sans-serif] leading-[36px] left-0 not-italic text-[#0f172b] text-[30px] text-nowrap top-[4.2px]">2,486,898</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[113.6px] items-start left-[409.33px] pb-[0.8px] pt-[24.8px] px-[24.8px] rounded-[20px] top-0 w-[393.337px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Circular_Std:Book',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[2.2px]">Avg Success Rate</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Circular_Std:Bold',sans-serif] leading-[36px] left-0 not-italic text-[#00a63e] text-[30px] top-[4.2px] w-[87px]">98.4%</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[113.6px] items-start left-[818.66px] pb-[0.8px] pt-[24.8px] px-[24.8px] rounded-[20px] top-0 w-[393.325px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[113.6px] left-0 top-[97.6px] w-[1212px]" data-name="Container">
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[27px] left-0 top-[6.5px] w-[246.95px]" data-name="Heading 3">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[27px] left-0 not-italic text-[#0f172b] text-[18px] top-[2px] w-[247px]">High-Usage Consumer Details</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-white h-[40px] left-0 rounded-[10px] top-0 w-[320px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[40px] pr-[16px] py-0 relative rounded-[inherit] size-full">
        <p className="font-['Circular_Std:Book',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#90a1b9] text-[14px] text-nowrap">Search consumers...</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[40px] left-[823.2px] top-0 w-[320px]" data-name="Container">
      <TextInput />
      <Icon2 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return <div className="absolute h-[15.988px] left-[20px] top-[8px] w-[40px]" data-name="Container" />;
}

function Container10() {
  return (
    <div className="absolute h-[15.988px] left-[76px] top-[8px] w-[302.513px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#62748e] text-[12px] text-nowrap top-[1.6px]">Consumer Name</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[15.988px] left-[394.51px] top-[8px] w-[151.262px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#62748e] text-[12px] text-nowrap top-[1.6px]">Type</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[15.988px] left-[561.77px] top-[8px] w-[151.262px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[16px] left-[151.31px] not-italic text-[#62748e] text-[12px] text-nowrap text-right top-[1.6px] translate-x-[-100%]">Total Requests</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[15.988px] left-[729.04px] top-[8px] w-[151.262px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[16px] left-[151.35px] not-italic text-[#62748e] text-[12px] text-nowrap text-right top-[1.6px] translate-x-[-100%]">Success Rate</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[15.988px] left-[896.3px] top-[8px] w-[226.9px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#62748e] text-[12px] text-nowrap top-[1.6px]">Last Access</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 5.33333">
            <path d={svgPaths.p32098840} id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16px] items-start left-0 pl-0 pr-[24px] py-0 top-[4px] w-[40px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[24px] left-[56px] top-0 w-[301.288px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[2px]">Ministry of Interior</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-[#fefce8] content-stretch flex h-[20px] items-start left-[373.29px] px-[12px] py-[4px] rounded-[2.68435e+07px] top-[3.2px] w-[58.025px]" data-name="Text">
      <p className="font-['Circular_Std:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a65f00] text-[12px] text-nowrap">Public</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[24px] left-[539.94px] top-0 w-[150.637px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-[150.79px] not-italic text-[#0f172b] text-[16px] text-nowrap text-right top-[2px] translate-x-[-100%]">304,825</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[24px] left-[706.58px] top-0 w-[150.65px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-[150.82px] not-italic text-[#00a63e] text-[16px] text-right top-[2px] translate-x-[-100%] w-[45px]">99.5%</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[79.638px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Circular_Std:Book',sans-serif] leading-[24px] left-0 not-italic text-[#45556c] text-[16px] text-nowrap top-[2px]">2025-12-23</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[873.22px] top-0 w-[225.975px]" data-name="Container">
      <Icon4 />
      <Text2 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container17 />
      <Text1 />
      <Container18 />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white h-[56px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_4px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pl-[24px] pr-[20px] pt-[16px] relative size-full">
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 5.33333">
            <path d={svgPaths.p32098840} id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16px] items-start left-0 pl-0 pr-[24px] py-0 top-[4px] w-[40px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[24px] left-[56px] top-0 w-[301.288px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[2px]">Department of Commerce</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-[#fefce8] content-stretch flex h-[20px] items-start left-[373.29px] px-[12px] py-[4px] rounded-[2.68435e+07px] top-[3.2px] w-[58.025px]" data-name="Text">
      <p className="font-['Circular_Std:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a65f00] text-[12px] text-nowrap">Public</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[24px] left-[539.94px] top-0 w-[150.637px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-[151.25px] not-italic text-[#0f172b] text-[16px] text-nowrap text-right top-[2px] translate-x-[-100%]">352,893</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[24px] left-[706.58px] top-0 w-[150.65px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-[151.46px] not-italic text-[#00a63e] text-[16px] text-right top-[2px] translate-x-[-100%] w-[46px]">98.8%</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[79.975px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Circular_Std:Book',sans-serif] leading-[24px] left-0 not-italic text-[#45556c] text-[16px] text-nowrap top-[2px]">2025-12-24</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[873.22px] top-0 w-[225.975px]" data-name="Container">
      <Icon6 />
      <Text4 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container24 />
      <Text3 />
      <Container25 />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-white h-[56px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_4px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pl-[24px] pr-[20px] pt-[16px] relative size-full">
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 5.33333">
            <path d={svgPaths.p32098840} id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16px] items-start left-0 pl-0 pr-[24px] py-0 top-[4px] w-[40px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[24px] left-[56px] top-0 w-[301.288px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[2px]">Tax Authority</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute bg-[#fefce8] content-stretch flex h-[20px] items-start left-[373.29px] px-[12px] py-[4px] rounded-[2.68435e+07px] top-[3.2px] w-[58.025px]" data-name="Text">
      <p className="font-['Circular_Std:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a65f00] text-[12px] text-nowrap">Public</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[24px] left-[539.94px] top-0 w-[150.637px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-[151.41px] not-italic text-[#0f172b] text-[16px] text-nowrap text-right top-[2px] translate-x-[-100%]">388,379</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[24px] left-[706.58px] top-0 w-[150.65px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-[150.94px] not-italic text-[#00a63e] text-[16px] text-right top-[2px] translate-x-[-100%] w-[45px]">99.2%</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[79.6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Circular_Std:Book',sans-serif] leading-[24px] left-0 not-italic text-[#45556c] text-[16px] text-nowrap top-[2px]">2025-12-25</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[873.22px] top-0 w-[225.975px]" data-name="Container">
      <Icon8 />
      <Text6 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container31 />
      <Text5 />
      <Container32 />
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-white h-[56px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_4px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pl-[24px] pr-[20px] pt-[16px] relative size-full">
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 5.33333">
            <path d={svgPaths.p32098840} id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16px] items-start left-0 pl-0 pr-[24px] py-0 top-[4px] w-[40px]" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[24px] left-[56px] top-0 w-[301.288px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[2px]">Health Services Bureau</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute bg-[#fefce8] content-stretch flex h-[20px] items-start left-[373.29px] px-[12px] py-[4px] rounded-[2.68435e+07px] top-[3.2px] w-[58.025px]" data-name="Text">
      <p className="font-['Circular_Std:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a65f00] text-[12px] text-nowrap">Public</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[24px] left-[539.94px] top-0 w-[150.637px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-[151.08px] not-italic text-[#0f172b] text-[16px] text-nowrap text-right top-[2px] translate-x-[-100%]">304,995</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[24px] left-[706.58px] top-0 w-[150.65px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-[151.24px] not-italic text-[#00a63e] text-[16px] text-right top-[2px] translate-x-[-100%] w-[43px]">97.6%</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[79.6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Circular_Std:Book',sans-serif] leading-[24px] left-0 not-italic text-[#45556c] text-[16px] text-nowrap top-[2px]">2025-12-25</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[873.22px] top-0 w-[225.975px]" data-name="Container">
      <Icon10 />
      <Text8 />
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container38 />
      <Text7 />
      <Container39 />
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-white h-[56px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_4px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pl-[24px] pr-[20px] pt-[16px] relative size-full">
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 5.33333">
            <path d={svgPaths.p32098840} id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16px] items-start left-0 pl-0 pr-[24px] py-0 top-[4px] w-[40px]" data-name="Container">
      <Icon11 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[24px] left-[56px] top-0 w-[301.288px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[2px]">Education Department</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-[#fefce8] content-stretch flex h-[20px] items-start left-[373.29px] px-[12px] py-[4px] rounded-[2.68435e+07px] top-[3.2px] w-[58.025px]" data-name="Text">
      <p className="font-['Circular_Std:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a65f00] text-[12px] text-nowrap">Public</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[24px] left-[539.94px] top-0 w-[150.637px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-[151.44px] not-italic text-[#0f172b] text-[16px] text-nowrap text-right top-[2px] translate-x-[-100%]">162,441</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[24px] left-[706.58px] top-0 w-[150.65px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-[150.65px] not-italic text-[#00a63e] text-[16px] text-right top-[2px] translate-x-[-100%] w-[45px]">98.3%</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[79.388px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Circular_Std:Book',sans-serif] leading-[24px] left-0 not-italic text-[#45556c] text-[16px] text-nowrap top-[2px]">2025-12-22</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[873.22px] top-0 w-[225.975px]" data-name="Container">
      <Icon12 />
      <Text10 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <Container45 />
      <Text9 />
      <Container46 />
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-white h-[56px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_4px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pl-[24px] pr-[20px] pt-[16px] relative size-full">
          <Container49 />
        </div>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 5.33333">
            <path d={svgPaths.p32098840} id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16px] items-start left-0 pl-0 pr-[24px] py-0 top-[4px] w-[40px]" data-name="Container">
      <Icon13 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[24px] left-[56px] top-0 w-[301.288px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[2px]">Emirates National Bank</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute bg-[#ecfeff] content-stretch flex h-[20px] items-start left-[373.29px] px-[12px] py-[4px] rounded-[2.68435e+07px] top-[3.2px] w-[91.138px]" data-name="Text">
      <p className="font-['Circular_Std:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#007595] text-[12px] text-nowrap">Commercial</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[24px] left-[539.94px] top-0 w-[150.637px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-[151.42px] not-italic text-[#0f172b] text-[16px] text-nowrap text-right top-[2px] translate-x-[-100%]">205,313</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[24px] left-[706.58px] top-0 w-[150.65px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-[150.85px] not-italic text-[#00a63e] text-[16px] text-right top-[2px] translate-x-[-100%] w-[41px]">99.1%</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[79.6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Circular_Std:Book',sans-serif] leading-[24px] left-0 not-italic text-[#45556c] text-[16px] text-nowrap top-[2px]">2025-12-25</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[873.22px] top-0 w-[225.975px]" data-name="Container">
      <Icon14 />
      <Text12 />
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Container51 />
      <Container52 />
      <Text11 />
      <Container53 />
      <Container54 />
      <Container55 />
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-white h-[56px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_4px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pl-[24px] pr-[20px] pt-[16px] relative size-full">
          <Container56 />
        </div>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 5.33333">
            <path d={svgPaths.p32098840} id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16px] items-start left-0 pl-0 pr-[24px] py-0 top-[4px] w-[40px]" data-name="Container">
      <Icon15 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute h-[24px] left-[56px] top-0 w-[301.288px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[2px]">Dubai University</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute bg-[#faf5ff] content-stretch flex h-[20px] items-start left-[373.29px] px-[12px] py-[4px] rounded-[2.68435e+07px] top-[3.2px] w-[79.2px]" data-name="Text">
      <p className="font-['Circular_Std:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8200db] text-[12px] text-nowrap">Academic</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute h-[24px] left-[539.94px] top-0 w-[150.637px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-[151.09px] not-italic text-[#0f172b] text-[16px] text-nowrap text-right top-[2px] translate-x-[-100%]">142,807</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute h-[24px] left-[706.58px] top-0 w-[150.65px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-[151.46px] not-italic text-[#00a63e] text-[16px] text-right top-[2px] translate-x-[-100%] w-[46px]">98.9%</p>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[79.6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Circular_Std:Book',sans-serif] leading-[24px] left-0 not-italic text-[#45556c] text-[16px] text-nowrap top-[2px]">2025-12-25</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[873.22px] top-0 w-[225.975px]" data-name="Container">
      <Icon16 />
      <Text14 />
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Container58 />
      <Container59 />
      <Text13 />
      <Container60 />
      <Container61 />
      <Container62 />
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-white h-[56px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_4px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pl-[24px] pr-[20px] pt-[16px] relative size-full">
          <Container63 />
        </div>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 5.33333">
            <path d={svgPaths.p32098840} id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16px] items-start left-0 pl-0 pr-[24px] py-0 top-[4px] w-[40px]" data-name="Container">
      <Icon17 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute h-[24px] left-[56px] top-0 w-[301.288px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[2px]">Al Maktoum Trading Co.</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute bg-[#ecfeff] content-stretch flex h-[20px] items-start left-[373.29px] px-[12px] py-[4px] rounded-[2.68435e+07px] top-[3.2px] w-[91.138px]" data-name="Text">
      <p className="font-['Circular_Std:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#007595] text-[12px] text-nowrap">Commercial</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute h-[24px] left-[539.94px] top-0 w-[150.637px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-[151.29px] not-italic text-[#0f172b] text-[16px] text-nowrap text-right top-[2px] translate-x-[-100%]">114,687</p>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute h-[24px] left-[706.58px] top-0 w-[150.65px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-[151.34px] not-italic text-[#00a63e] text-[16px] text-right top-[2px] translate-x-[-100%] w-[43px]">97.8%</p>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[24px] relative shrink-0 w-[79.975px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Circular_Std:Book',sans-serif] leading-[24px] left-0 not-italic text-[#45556c] text-[16px] text-nowrap top-[2px]">2025-12-24</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[873.22px] top-0 w-[225.975px]" data-name="Container">
      <Icon18 />
      <Text16 />
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Container65 />
      <Container66 />
      <Text15 />
      <Container67 />
      <Container68 />
      <Container69 />
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-white h-[56px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_4px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pl-[24px] pr-[20px] pt-[16px] relative size-full">
          <Container70 />
        </div>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 5.33333">
            <path d={svgPaths.p32098840} id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16px] items-start left-0 pl-0 pr-[24px] py-0 top-[4px] w-[40px]" data-name="Container">
      <Icon19 />
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute h-[24px] left-[56px] top-0 w-[301.288px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[2px]">Abu Dhabi Polytechnic</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute bg-[#faf5ff] content-stretch flex h-[20px] items-start left-[373.29px] px-[12px] py-[4px] rounded-[2.68435e+07px] top-[3.2px] w-[79.2px]" data-name="Text">
      <p className="font-['Circular_Std:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8200db] text-[12px] text-nowrap">Academic</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute h-[24px] left-[539.94px] top-0 w-[150.637px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-[151.13px] not-italic text-[#0f172b] text-[16px] text-nowrap text-right top-[2px] translate-x-[-100%]">155,377</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute h-[24px] left-[706.58px] top-0 w-[150.65px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-[150.65px] not-italic text-[#00a63e] text-[16px] text-right top-[2px] translate-x-[-100%] w-[45px]">98.5%</p>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[24px] relative shrink-0 w-[79.6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Circular_Std:Book',sans-serif] leading-[24px] left-0 not-italic text-[#45556c] text-[16px] text-nowrap top-[2px]">2025-12-25</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[873.22px] top-0 w-[225.975px]" data-name="Container">
      <Icon20 />
      <Text18 />
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Container72 />
      <Container73 />
      <Text17 />
      <Container74 />
      <Container75 />
      <Container76 />
    </div>
  );
}

function Container78() {
  return (
    <div className="bg-white h-[56px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_4px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pl-[24px] pr-[20px] pt-[16px] relative size-full">
          <Container77 />
        </div>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 5.33333">
            <path d={svgPaths.p32098840} id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16px] items-start left-0 pl-0 pr-[24px] py-0 top-[4px] w-[40px]" data-name="Container">
      <Icon21 />
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute h-[24px] left-[56px] top-0 w-[301.288px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[2px]">Emirates Healthcare Group</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute bg-[#ecfeff] content-stretch flex h-[20px] items-start left-[373.29px] px-[12px] py-[4px] rounded-[2.68435e+07px] top-[3.2px] w-[91.138px]" data-name="Text">
      <p className="font-['Circular_Std:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#007595] text-[12px] text-nowrap">Commercial</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute h-[24px] left-[539.94px] top-0 w-[150.637px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-[151.21px] not-italic text-[#0f172b] text-[16px] text-nowrap text-right top-[2px] translate-x-[-100%]">85,179</p>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute h-[24px] left-[706.58px] top-0 w-[150.65px]" data-name="Container">
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[24px] left-[151.17px] not-italic text-[#00a63e] text-[16px] text-right top-[2px] translate-x-[-100%] w-[46px]">96.9%</p>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[24px] relative shrink-0 w-[79.6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Circular_Std:Book',sans-serif] leading-[24px] left-0 not-italic text-[#45556c] text-[16px] text-nowrap top-[2px]">2025-12-25</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[873.22px] top-0 w-[225.975px]" data-name="Container">
      <Icon22 />
      <Text20 />
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Container79 />
      <Container80 />
      <Text19 />
      <Container81 />
      <Container82 />
      <Container83 />
    </div>
  );
}

function Container85() {
  return (
    <div className="bg-white h-[56px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_4px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pl-[24px] pr-[20px] pt-[16px] relative size-full">
          <Container84 />
        </div>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[632px] items-start relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container29 />
      <Container36 />
      <Container43 />
      <Container50 />
      <Container57 />
      <Container64 />
      <Container71 />
      <Container78 />
      <Container85 />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[671.987px] items-start relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container86 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[189.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Circular_Std:Book',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] top-[2.2px] w-[190px]">Showing 1-10 of 13 consumers</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[32px] opacity-50 relative rounded-[10px] shrink-0 w-[78.662px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[20px] left-[39.5px] not-italic text-[#45556c] text-[14px] text-center text-nowrap top-[8.2px] translate-x-[-50%]">Previous</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#9810fa] h-[32px] relative rounded-[10px] shrink-0 w-[29.275px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[20px] left-[15px] not-italic text-[14px] text-center text-nowrap text-white top-[8.2px] translate-x-[-50%]">1</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[32px] relative rounded-[10px] shrink-0 w-[31.525px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[20px] left-[16px] not-italic text-[#45556c] text-[14px] text-center text-nowrap top-[8.2px] translate-x-[-50%]">2</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[32px] relative rounded-[10px] shrink-0 w-[54.65px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[20px] left-[27.5px] not-italic text-[#45556c] text-[14px] text-center text-nowrap top-[8.2px] translate-x-[-50%]">Next</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="h-[32px] relative shrink-0 w-[218.113px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[48.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-0 pt-[0.8px] px-0 relative size-full">
          <Paragraph7 />
          <Container88 />
        </div>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#fcfcfc] from-[1.81%] gap-[24px] h-[869.588px] items-start left-0 pb-[10.4px] pt-[34.4px] px-[34.4px] rounded-[30px] to-[#f6f2fe] to-[156.04%] top-[235.2px] via-[#fcfcfc] via-[59.65%] w-[1212px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[10.4px] border-solid border-white inset-0 pointer-events-none rounded-[30px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container8 />
      <Container87 />
      <Container89 />
    </div>
  );
}

export default function ConsumerDetails() {
  return (
    <div className="bg-white relative size-full" data-name="ConsumerDetails">
      <Container2 />
      <Container6 />
      <Container90 />
    </div>
  );
}