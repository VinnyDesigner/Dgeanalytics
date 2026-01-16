import svgPaths from "./svg-t5chkx893h";

function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[28px] left-0 not-italic text-[#101828] text-[18px] text-nowrap top-[-1.4px]">Error Type Distribution</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[-1.2px]">Error breakdown by type</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[52px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[16.67%_31.48%_19.12%_31.48%]" data-name="Group">
      <div className="absolute inset-[-0.26%_-0.25%_-0.34%_-0.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 201 193.78">
          <g id="Group">
            <path d={svgPaths.p5302100} fill="var(--fill-0, #F59E0B)" id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[50.7%_31.49%_16.67%_43.62%]" data-name="Group">
      <div className="absolute inset-[-0.53%_-0.38%_-0.51%_-0.48%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135.524 98.9232">
          <g id="Group">
            <path d={svgPaths.p2af97980} fill="var(--fill-0, #EF4444)" id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[16.67%_31.48%]" data-name="Group">
      <Group2 />
      <Group3 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[16.67%_31.48%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function Surface() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip top-0 w-[540px]" data-name="Surface">
      <Group />
    </div>
  );
}

function PieChart() {
  return (
    <div className="h-[300px] relative shrink-0 w-full" data-name="PieChart">
      <Surface />
    </div>
  );
}

function Container5() {
  return <div className="bg-[#f59e0b] rounded-[2.68435e+07px] shrink-0 size-[12px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[-1.2px]">Client Errors (4xx)</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[127.787px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container5 />
        <Text />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[21.225px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#1e2939] text-[14px] text-nowrap top-[-1.2px]">612</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[540px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container4 />
        <Text1 />
      </div>
    </div>
  );
}

function Container8() {
  return <div className="bg-[#ef4444] rounded-[2.68435e+07px] shrink-0 size-[12px]" data-name="Container" />;
}

function Text2() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[-1.2px]">Server Errors (5xx)</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[130.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container8 />
        <Text2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[23.1px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#1e2939] text-[14px] text-nowrap top-[-1.2px]">267</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[540px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container7 />
        <Text3 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container6 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#f8f8f8] content-stretch flex flex-col gap-[16px] items-start pb-[4px] pt-[28px] px-[28px] relative rounded-[14px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(229,231,235,0.5),0px_4px_6px_-4px_rgba(229,231,235,0.5)]" />
      <Container1 />
      <PieChart />
      <Container2 />
    </div>
  );
}