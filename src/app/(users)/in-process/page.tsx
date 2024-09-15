import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <div className="w-full h-[25rem] flex items-center justify-center">
      <div className="flex flex-col gap-5 items-center justify-center">
        <span className="font-bold text-md">Fitur masih dalam pengerjaan</span>
        <Image
          src={"/images/hehe.webp"}
          width={100}
          height={100}
          alt="in process"
        />
        <Link className="border-[1px] mt-5 px-3 py-2 rounded-2xl text-white font-medium" href={'/'}>Kembali</Link>
      </div>
    </div>
  );
}
