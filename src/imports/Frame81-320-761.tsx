import imgImage64 from "figma:asset/78563d5e6d9bddb29c348aa823332bc72a9072f9.png";
import imgImage63 from "figma:asset/347d318c00986e488e5e95be846e16f005b73f91.png";

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[741px] left-0 top-0 w-[1404px]" data-name="image 64">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage64} />
      </div>
      <div className="absolute h-[710px] left-0 top-[702px] w-[1404px]" data-name="image 63">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage63} />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Group />
    </div>
  );
}