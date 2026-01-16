import imgImageWithFallback2 from "figma:asset/909a7f60284cdc6965b098f6e0ace0d70152fd00.png";

function ImageWithFallback() {
  return (
    <div className="h-[39.987px] relative shrink-0 w-[182.2px]" data-name="ImageWithFallback2">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[78px] opacity-80 relative shrink-0 w-[378.4px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[26px] left-0 not-italic text-[#e6f0fa] text-[16px] top-[-2.4px] w-[353px]">{`Empowering Abu Dhabi's government with spatial data insights and analytics for smarter decision-making.`}</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[247px] items-start left-0 top-0 w-[378.4px]" data-name="Container">
      <ImageWithFallback />
      <Paragraph />
    </div>
  );
}

function Heading() {
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

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[247px] items-start left-[426px] top-0 w-[134px]" data-name="Container">
      <Heading />
      <List />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[237px] relative shrink-0 w-[613px]" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[21px] opacity-70 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[calc(50%+12.97px)] not-italic text-[#e6f0fa] text-[14px] text-center text-nowrap top-[-1.2px] translate-x-[-50%]">© 2025 SDI Service Analytics. Abu Dhabi Spatial Data Infrastructure.</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-[53.8px] items-start pb-0 pt-[32.8px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-[rgba(230,240,250,0.2)] border-solid inset-0 pointer-events-none" />
      <Paragraph1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-center relative shrink-0 w-full">
      <Container />
      <Container3 />
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[#0b1f33] content-stretch flex flex-col items-center pb-0 pl-[50px] pr-[24px] pt-[64px] relative size-full" data-name="Footer">
      <Frame />
    </div>
  );
}