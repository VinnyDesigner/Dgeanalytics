function Text() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] content-stretch flex h-[58px] items-center justify-center relative rounded-[4px] shrink-0 w-[87px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#096] text-[20px] text-nowrap">45%</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.2px]">Query</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[-1.2px]">5.6M requests</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-[44px] items-start relative shrink-0 w-[86.85px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center left-0 top-0">
      <Text />
      <Container />
    </div>
  );
}

function Container1() {
  return <div className="bg-gradient-to-r from-[#10b981] h-[8px] rounded-[2.68435e+07px] shrink-0 to-[#34d399] w-full" data-name="Container" />;
}

function Container2() {
  return (
    <div className="absolute bg-[#e5e7eb] content-stretch flex flex-col h-[8px] items-start left-0 overflow-clip pl-0 pr-[275px] py-0 rounded-[2.68435e+07px] top-[65.59px] w-[500px]" data-name="Container">
      <Container1 />
    </div>
  );
}

export default function Container3() {
  return (
    <div className="relative size-full" data-name="Container">
      <Frame />
      <Container2 />
    </div>
  );
}