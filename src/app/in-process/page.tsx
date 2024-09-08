import Image from "next/image";
export default function Page() {
  return (
    <div className="w-full h-[25rem] flex items-center justify-center">
      <div className="flex flex-col gap-5 items-center justify-center">
        <span className="font-bold text-md">Maaf fitur masih dalam pengerjaan</span>
        <Image
          src={"/images/hehe.webp"}
          width={100}
          height={100}
          alt="in process"
        />
      </div>
    </div>
  );
}
