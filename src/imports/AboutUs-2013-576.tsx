import svgPaths from "./svg-8hm2a9c35i";
import imgImage from "figma:asset/99a0387c45b1ff19877b19fee367364d69de21d0.png";
import imgImageWithFallback2 from "figma:asset/909a7f60284cdc6965b098f6e0ace0d70152fd00.png";
import imgGreatModernInfrastructureMegapolis1 from "figma:asset/d0b1fae3c3bf0c48586aada8a5a99b1d28a509d7.png";
import imgImage47 from "figma:asset/f422c911ec06450953a867d6206398135341a3ad.png";

function Container() {
  return <div className="absolute bg-[rgba(255,255,255,0)] border-[0px_0px_0.8px] border-black border-solid h-[80px] left-0 shadow-[0px_44px_84px_0px_#e4d4fc] top-0 w-[1920px]" data-name="Container" />;
}

function Image() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute content-stretch flex flex-col h-[48px] items-start left-0 overflow-clip pl-0 pr-[-172.425px] py-0 top-0 w-[34px]" data-name="ImageWithFallback">
      <Image />
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[60.8px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[38px] items-start left-[46px] overflow-clip pb-0 pl-[-52.362px] pr-[0.75px] pt-[-11.4px] top-[5px] w-[212px]" data-name="ImageWithFallback1">
      <Image1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[48px] left-[32px] top-[15.4px] w-[258px]" data-name="Frame">
      <ImageWithFallback />
      <ImageWithFallback1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[17.475px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[4.76%_5%]" data-name="Vector">
        <div className="absolute inset-[-5.26%_-5.55%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6495 17.4753">
            <path d={svgPaths.p2865a100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66462" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[17.475px] items-start left-[1.66px] top-[0.84px] w-[16.65px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[9.15px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[9.09%_12.49%_9.09%_12.51%]" data-name="Vector">
        <div className="absolute inset-[-11.11%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.65057 9.14944">
            <path d={svgPaths.p3f621f80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66307" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[9.15px] items-start left-[6.66px] top-[9.16px] w-[6.65px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[16.66px] overflow-clip size-[19.975px] top-[12.66px]" data-name="Icon">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[24px] left-[44.79px] top-[10.06px] w-[42.688px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[21.5px] text-[16px] text-center text-nowrap text-white top-[0.2px] translate-x-[-50%]">Home</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[45.325px] left-0 overflow-clip rounded-[10px] top-0 w-[103.975px]" data-name="Container1">
      <Icon />
      <Text />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[18.3px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[4.55%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3 18.3">
            <path d={svgPaths.p16b65300} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66365" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col h-[18.3px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16.66px] overflow-clip pb-0 pl-[0.838px] pr-[0.837px] pt-[0.838px] size-[19.975px] top-[12.66px]" data-name="Icon1">
      <Container4 />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[24px] left-[44.67px] top-[10.06px] w-[120.938px]" data-name="Text1">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[60.5px] text-[#d1d5dc] text-[16px] text-center text-nowrap top-[0.2px] translate-x-[-50%]">Service Analytics</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[45.325px] left-[111.96px] overflow-clip rounded-[10px] top-0 w-[182.225px]" data-name="Container5">
      <Icon3 />
      <Text1 />
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0.2)] h-[45.325px] left-0 rounded-[10px] to-1/2 top-0 w-[127.125px]" data-name="Container" />;
}

function Container7() {
  return <div className="absolute border-[0.8px] border-[rgba(56,189,248,0.3)] border-solid h-[45.325px] left-0 rounded-[10px] top-0 w-[127.125px]" data-name="Container" />;
}

function Icon6() {
  return (
    <div className="h-[18.3px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[4.55%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3 18.3">
            <path d={svgPaths.p34322900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66365" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col h-[18.3px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon6 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16.66px] overflow-clip pb-0 pl-[0.837px] pr-[0.838px] pt-[0.838px] size-[19.975px] top-[12.66px]" data-name="Icon2">
      <Container10 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[24px] left-[44.73px] top-[10.06px] w-[65.813px]" data-name="Text2">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[33px] text-[16px] text-center text-nowrap text-white top-[0.2px] translate-x-[-50%]">About Us</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[45.325px] left-0 top-0 w-[127.125px]" data-name="Container7">
      <Icon5 />
      <Text2 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[45.325px] left-[302.19px] overflow-clip rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[127.125px]" data-name="Button2" style={{ backgroundImage: "linear-gradient(177.688deg, rgba(56, 189, 248, 0.4) 11.452%, rgba(14, 165, 233, 0.3) 88.548%)" }}>
      <Container6 />
      <Container7 />
      <Container9 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[45.325px] left-[calc(50%+40.16px)] top-[16.74px] translate-x-[-50%] w-[429.313px]" data-name="Container8">
      <Container1 />
      <Container5 />
      <Button2 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute h-[39.987px] left-[1064.21px] top-[19.4px] w-[182.2px]" data-name="ImageWithFallback2">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function TopNavBar() {
  return (
    <div className="absolute bg-gradient-to-b from-[#063360] h-[80px] left-0 to-[#0c69c6] top-0 w-[1279px]" data-name="TopNavBar">
      <Container />
      <Frame />
      <Container8 />
      <ImageWithFallback2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[104px] items-start left-[32px] top-[178px] w-[318px]" data-name="Text">
      <div className="font-['Arial:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-nowrap text-white">
        <p className="leading-[52px] mb-0 text-[50px]">{`About `}</p>
        <p className="leading-[72px] text-[#93c9ff] text-[60px]">SDI Analytics</p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[32px] top-[178px]">
      <Text3 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[29.25px] left-[32px] not-italic text-[18px] text-white top-[317px] w-[638px]">{`A collaborative initiative bringing together Abu Dhabi's leading government technology organizations to provide seamless access to healthcare and education services across the UAE.`}</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[771px]" data-name="Paragraph">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36.48px] not-italic relative shrink-0 text-[40px] text-black text-nowrap">Department of Government Enablement</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[888px]">
      <Paragraph />
      <p className="font-['Arial:Regular',sans-serif] leading-[26px] min-w-full not-italic relative shrink-0 text-[#364153] text-[16px] w-[min-content]">The Department of Government Enablement (DGE) is a centralized government enabler delivering high-quality services to Abu Dhabi government entities, employees, citizens, residents, and customers. As the team behind the teams, DGE drives the emirate’s transformation into a future-ready, digitally advanced government by building shared platforms and capabilities. DGE leads the Abu Dhabi Government Digital Strategy 2025–2027, enabling 100% digitalization and automation of government services and positioning Abu Dhabi as a global digital government leader.</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Group">
      <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22.0034">
            <path d={svgPaths.p38022300} id="Vector" stroke="var(--stroke-0, #2B5876)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] size-[24px] top-[12px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#eff6ff] left-[54px] rounded-[10px] size-[48px] top-[30px]" data-name="Container">
      <Container13 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[54px] not-italic top-[94px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21.6px] left-[54px] text-[18px] text-black top-[94px] w-[217px]">Centralized Government Enabler</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[23px] left-[54px] text-[#38383d] text-[16px] top-[155px] w-[246px]">Delivers quality services to the Abu Dhabi government employees, entities, citizens, and residents.</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#fbfdff] h-[289px] relative rounded-[10px] shrink-0 w-[330px]" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container12 />
        <Group7 />
        <div className="absolute left-[133px] size-[88px] top-[224px]">
          <div className="absolute inset-[-152.27%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 356 356">
              <g filter="url(#filter0_f_2013_613)" id="Ellipse 23">
                <circle cx="178" cy="178" fill="var(--fill-0, #0B62B8)" r="44" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="356" id="filter0_f_2013_613" width="356" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_2013_613" stdDeviation="67" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute bg-[#094a8c] h-[44px] left-[30px] top-[98px] w-[4px]" />
      </div>
      <div aria-hidden="true" className="absolute border-[6px] border-solid border-white inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[8.32%_12.49%_8.33%_12.48%]" data-name="Group">
      <div className="absolute inset-[8.32%_12.49%_8.33%_12.48%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.55%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0068 22.0052">
            <path d={svgPaths.p3008ebc0} id="Vector" stroke="var(--stroke-0, #2B5876)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group1 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] size-[24px] top-[12px]" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[#eff6ff] left-[54px] rounded-[10px] size-[48px] top-[30px]" data-name="Container">
      <Container16 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[54px] not-italic top-[94px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21.6px] left-[54px] text-[18px] text-black top-[94px] w-[118px]">Smart Digital Government</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] left-[54px] text-[#38383d] text-[16px] top-[155px] w-[236px]">Tackles the implementation of Abu Dhabi Government Digital Strategy 2025-2027, driving digital transformation and automation.</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#fbfdff] h-[289px] relative rounded-[10px] shrink-0 w-[330px]" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container15 />
        <Group8 />
        <div className="absolute left-[133px] size-[88px] top-[224px]">
          <div className="absolute inset-[-152.27%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 356 356">
              <g filter="url(#filter0_f_2013_607)" id="Ellipse 23">
                <circle cx="178" cy="178" fill="var(--fill-0, #B8AC0B)" r="44" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="356" id="filter0_f_2013_607" width="356" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_2013_607" stdDeviation="67" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute bg-[#d9d374] h-[44px] left-[30px] top-[98px] w-[4px]" />
      </div>
      <div aria-hidden="true" className="absolute border-[6px] border-solid border-white inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Group">
      <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22.0034">
            <path d={svgPaths.p38022300} id="Vector" stroke="var(--stroke-0, #2B5876)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group2 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] size-[24px] top-[12px]" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-[#eff6ff] left-[54px] rounded-[10px] size-[48px] top-[30px]" data-name="Container">
      <Container19 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[52px] not-italic top-[94px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21.6px] left-[54px] text-[18px] text-black top-[94px] w-[150px]">Team Behind The Teams</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] left-[52px] text-[#38383d] text-[16px] top-[155px] w-[246px]">{`The unified engine powering Abu Dhabi's transformation into a future-ready, digitally advanced government.`}</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#fbfdff] h-[289px] relative rounded-[10px] shrink-0 w-[330px]" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container18 />
        <Group9 />
        <div className="absolute left-[133px] size-[88px] top-[224px]">
          <div className="absolute inset-[-152.27%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 356 356">
              <g filter="url(#filter0_f_2013_603)" id="Ellipse 23">
                <circle cx="178" cy="178" fill="var(--fill-0, #0BB811)" r="44" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="356" id="filter0_f_2013_603" width="356" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_2013_603" stdDeviation="67" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute bg-[#0bb811] h-[44px] left-[30px] top-[98px] w-[4px]" />
      </div>
      <div aria-hidden="true" className="absolute border-[6px] border-solid border-white inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[26px] items-center relative shrink-0 w-full">
      <Container11 />
      <Container14 />
      <Container17 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[30px] items-start left-[118px] top-[583px] w-[1042px]">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 w-[530px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[49.5px] relative shrink-0 text-[40px] text-black w-[475px]">Abu Dhabi Spatial Data Infrastructure</p>
      <p className="font-['Arial:Regular',sans-serif] leading-[26px] min-w-full relative shrink-0 text-[#364153] text-[16px] w-[min-content]">Abu Dhabi Spatial Data Infrastructure (AD SDI) is a government-wide network administered by the Abu Dhabi Digital Authority that enables the secure sharing and exchange of geospatial data among government entities and stakeholders. Through AD SDI, the Abu Dhabi Spatial Data Information Centre (AD SDIC) has earned international recognition for its collaborative approach with 9 government stakeholder entities, providing open, timely, and accurate geographic information. The program supports spatially enabled e-government services by enabling seamless discovery, integration, and use of spatial data across the emirate.</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full">
      <Frame4 />
      <div className="h-[336px] relative rounded-[10px] shrink-0 w-[448px]" data-name="great-modern-infrastructure-megapolis 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgGreatModernInfrastructureMegapolis1} />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[13.48%_12.5%]" data-name="Group">
      <div className="absolute inset-[13.48%_12.5%_13.49%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.7%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.5288">
            <path d={svgPaths.pe6775e0} id="Vector" stroke="var(--stroke-0, #2B5876)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[24.02%_37.5%_13.48%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-6.67%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 17">
            <path d="M1 1V16" id="Vector" stroke="var(--stroke-0, #2B5876)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.48%_62.5%_24.02%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-6.67%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 17">
            <path d="M1 1V16" id="Vector" stroke="var(--stroke-0, #2B5876)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group3 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] size-[24px] top-[12px]" data-name="Container">
      <Icon10 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[#eff6ff] left-[54px] rounded-[10px] size-[48px] top-[30px]" data-name="Container">
      <Container22 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[54px] not-italic top-[98px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21.6px] left-[57px] text-[18px] text-black top-[98px] w-[142px]">Geospatial Data Viewer</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] left-[54px] text-[#38383d] text-[16px] top-[163px] w-[246px]">Easy access to view maps and analyze spatial data across Abu Dhabi.</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#fbfdff] h-[289px] relative rounded-[10px] shrink-0 w-[330px]" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container21 />
        <Group10 />
        <div className="absolute left-[133px] size-[88px] top-[224px]">
          <div className="absolute inset-[-152.27%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 356 356">
              <g filter="url(#filter0_f_2013_613)" id="Ellipse 23">
                <circle cx="178" cy="178" fill="var(--fill-0, #0B62B8)" r="44" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="356" id="filter0_f_2013_613" width="356" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_2013_613" stdDeviation="67" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute bg-[#094a8c] h-[44px] left-[30px] top-[98px] w-[4px]" />
      </div>
      <div aria-hidden="true" className="absolute border-[6px] border-solid border-white inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[8.33%_12.5%_66.67%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 8">
            <path d={svgPaths.p3dbdf300} id="Vector" stroke="var(--stroke-0, #2B5876)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_12.5%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.88%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
            <path d={svgPaths.p33169800} id="Vector" stroke="var(--stroke-0, #2B5876)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[37.5%] left-[12.5%] right-[12.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-33.33%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 5">
            <path d={svgPaths.p1951d400} id="Vector" stroke="var(--stroke-0, #2B5876)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group4 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] size-[24px] top-[12px]" data-name="Container">
      <Icon11 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-[#eff6ff] left-[54px] rounded-[10px] size-[48px] top-[30px]" data-name="Container">
      <Container25 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[54px] not-italic top-[94px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21.6px] left-[54px] text-[18px] text-black top-[94px] w-[118px]">Open Data Sharing</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] left-[54px] text-[#38383d] text-[16px] top-[163px] w-[236px]">Facilitating the sharing and exchange of geospatial data among government agencies and stakeholders.</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#fbfdff] h-[289px] relative rounded-[10px] shrink-0 w-[330px]" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container24 />
        <Group11 />
        <div className="absolute left-[133px] size-[88px] top-[224px]">
          <div className="absolute inset-[-152.27%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 356 356">
              <g filter="url(#filter0_f_2013_607)" id="Ellipse 23">
                <circle cx="178" cy="178" fill="var(--fill-0, #B8AC0B)" r="44" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="356" id="filter0_f_2013_607" width="356" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_2013_607" stdDeviation="67" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute bg-[#d9d374] h-[44px] left-[30px] top-[98px] w-[4px]" />
      </div>
      <div aria-hidden="true" className="absolute border-[6px] border-solid border-white inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Group">
      <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22.0034">
            <path d={svgPaths.p38022300} id="Vector" stroke="var(--stroke-0, #2B5876)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group5 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] size-[24px] top-[12px]" data-name="Container">
      <Icon12 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[#eff6ff] left-[54px] rounded-[10px] size-[48px] top-[30px]" data-name="Container">
      <Container28 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[52px] not-italic top-[94px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21.6px] left-[54px] text-[18px] text-black top-[94px] w-[150px]">Spatially Enabled Services</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] left-[52px] text-[#38383d] text-[16px] top-[163px] w-[246px]">GIS features standardized and locked with open and timely access to highly accurate data.</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#fbfdff] h-[289px] relative rounded-[10px] shrink-0 w-[330px]" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container27 />
        <Group12 />
        <div className="absolute left-[133px] size-[88px] top-[224px]">
          <div className="absolute inset-[-152.27%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 356 356">
              <g filter="url(#filter0_f_2013_603)" id="Ellipse 23">
                <circle cx="178" cy="178" fill="var(--fill-0, #0BB811)" r="44" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="356" id="filter0_f_2013_603" width="356" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_2013_603" stdDeviation="67" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute bg-[#0bb811] h-[44px] left-[30px] top-[98px] w-[4px]" />
      </div>
      <div aria-hidden="true" className="absolute border-[6px] border-solid border-white inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[26px] items-center relative shrink-0 w-full">
      <Container20 />
      <Container23 />
      <Container26 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[111px] top-[1169px] w-[1049px]">
      <Frame5 />
      <Frame3 />
    </div>
  );
}

function Container29() {
  return <div className="absolute h-[389.2px] left-0 opacity-5 top-0 w-[1279.2px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1279.2 389.2\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -66.855 -66.855 0 639.6 194.6)\\\'><stop stop-color=\\\'rgba(255,255,255,1)\\\' offset=\\\'0.00078174\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.00078174\\\'/></radialGradient></defs></svg>')" }} />;
}

function Heading() {
  return (
    <div className="absolute h-[52px] left-[24px] top-0 w-[1231.2px]" data-name="Heading 2">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[52px] left-[615.55px] not-italic text-[40px] text-center text-nowrap text-white top-[-3.8px] translate-x-[-50%]">{`Explore Abu Dhabi's Spatial Data Ecosystem`}</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[54px] left-[303.6px] top-[76px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[27px] left-[336.14px] not-italic text-[#e6f0fa] text-[18px] text-center top-[-2.2px] translate-x-[-50%] w-[618px]">Discover how spatial data is transforming government services and enhancing decision-making across the emirate</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[32px] size-[20px] top-[19.6px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M12.5 2.5H17.5V7.5" id="Vector" stroke="var(--stroke-0, #0F3D68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33398 11.6667L17.5007 2.5" id="Vector_2" stroke="var(--stroke-0, #0F3D68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p387614c0} id="Vector_3" stroke="var(--stroke-0, #0F3D68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white h-[59.2px] left-[371.22px] rounded-[10px] top-0 w-[226.637px]" data-name="Button">
      <Icon13 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[127px] not-italic text-[#0f3d68] text-[16px] text-center text-nowrap top-[15.4px] translate-x-[-50%]">Visit AD SDI Portal</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[32px] size-[20px] top-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p140c1100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M15 14.1667V7.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10.834 14.1665V4.1665" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66602 14.1665V11.6665" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute border-[1.6px] border-solid border-white h-[59.2px] left-[613.86px] rounded-[10px] top-0 w-[246.113px]" data-name="Button">
      <Icon14 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[135.5px] not-italic text-[16px] text-center text-nowrap text-white top-[13.8px] translate-x-[-50%]">SDI Service Analytics</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[59.2px] left-[24px] top-[170px] w-[1231.2px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[229.2px] left-0 top-[80px] w-[1279.2px]" data-name="Container">
      <Heading />
      <Paragraph1 />
      <Container31 />
    </div>
  );
}

function CtaSection() {
  return (
    <div className="absolute h-[389.2px] left-0 overflow-clip top-[1931.15px] w-[1279.2px]" data-name="CTASection" style={{ backgroundImage: "linear-gradient(163.077deg, rgb(11, 31, 51) 0%, rgb(15, 61, 104) 100%)" }}>
      <Container29 />
      <Container30 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="h-[39.987px] relative shrink-0 w-[182.2px]" data-name="ImageWithFallback2">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[78px] opacity-80 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[26px] left-0 not-italic text-[#e6f0fa] text-[16px] top-[-2.4px] w-[353px]">{`Empowering Abu Dhabi's government with spatial data insights and analytics for smarter decision-making.`}</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[247px] items-start left-0 top-0 w-[378.4px]" data-name="Container">
      <ImageWithFallback3 />
      <Paragraph2 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[27px] left-0 not-italic text-[18px] text-nowrap text-white top-[-2.2px]">Quick Links</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex h-[21.6px] items-start left-0 opacity-80 top-[0.8px] w-[42.888px]" data-name="Link">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#e6f0fa] text-[16px] text-nowrap">Home</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex h-[21.6px] items-start left-0 opacity-80 top-[0.8px] w-[116.725px]" data-name="Link">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#e6f0fa] text-[16px] text-nowrap">Service Analytics</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex h-[21.6px] items-start left-0 opacity-80 top-[0.8px] w-[65.75px]" data-name="Link">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#e6f0fa] text-[16px] text-nowrap">Consumer Insights</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link2 />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute content-stretch flex h-[21.6px] items-start left-0 opacity-80 top-[0.8px] w-[65.75px]" data-name="Link">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#e6f0fa] text-[16px] text-nowrap">SDI Portal Link</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link3 />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute content-stretch flex h-[21.6px] items-start left-0 opacity-80 top-[0.8px] w-[65.75px]" data-name="Link">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#e6f0fa] text-[16px] text-nowrap">About Us</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link4 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[204px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[247px] items-start left-[426.4px] top-0 w-[378.4px]" data-name="Container">
      <Heading1 />
      <List />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[237px] relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[21px] opacity-70 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[615.97px] not-italic text-[#e6f0fa] text-[14px] text-center text-nowrap top-[-1.2px] translate-x-[-50%]">© 2025 SDI Service Analytics. Abu Dhabi Spatial Data Infrastructure.</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col h-[53.8px] items-start pb-0 pt-[32.8px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-[rgba(230,240,250,0.2)] border-solid inset-0 pointer-events-none" />
      <Paragraph3 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#0b1f33] bottom-0 content-stretch flex flex-col gap-[27px] h-[426px] items-start left-0 pb-0 pl-[50px] pr-[24px] pt-[64px] w-[1279px]" data-name="Footer">
      <Container32 />
      <Container35 />
    </div>
  );
}

export default function AboutUs() {
  return (
    <div className="bg-[#f5f5f5] relative size-full" data-name="AboutUs">
      <TopNavBar />
      <div className="absolute flex h-[423px] items-center justify-center left-0 top-[80px] w-[1279px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[423px] relative w-[1279px]" data-name="image 47">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" className="absolute h-[113.39%] left-0 max-w-none top-0 w-full" src={imgImage47} />
              </div>
              <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(89.4815deg, rgba(7, 57, 107, 0) 1.1618%, rgb(7, 57, 107) 98.767%)" }} />
            </div>
          </div>
        </div>
      </div>
      <Group6 />
      <Frame6 />
      <Frame7 />
      <CtaSection />
      <Footer />
    </div>
  );
}