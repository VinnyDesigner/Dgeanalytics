import svgPaths from "./svg-vleoraqv4b";

function Group() {
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

function Icon() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] size-[24px] top-[12px]" data-name="Container">
      <Icon />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[10px] size-full" data-name="Container">
      <Container1 />
    </div>
  );
}