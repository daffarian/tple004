import Image from "next/image";
export default function Home() {
  return (
    <section className="pt-56">
      <div className="container h-[50rem] relative py-5 bg-zinc-900 text-zinc-300 rounded-3xl shadow-xl">
        <div className="flex flex-col gap-4 mt-10">
          <div className=" w-full h-14 border-[1px] border-zinc-300 font-semibold p-3 flex flex-row justify-center items-center rounded-full">
            <span>Jadwal E-Learning</span>
          </div>
          <div className=" w-full h-14 border-[1px] border-zinc-300 font-semibold p-3 flex flex-row justify-center items-center rounded-full">
            <span>Jadwal Lengkap</span>
          </div>
          <div className=" w-full h-14 border-[1px] border-zinc-300 font-semibold p-3 flex flex-row justify-center items-center rounded-full">
            <span>Jadwal Pembayaran</span>
          </div>
          <div className=" w-full h-14 border-[1px] border-zinc-300 font-semibold p-3 flex flex-row justify-center items-center rounded-full">
            <span>Info Tugas</span>
          </div>
          <div className=" w-full h-14 border-[1px] border-zinc-300 font-semibold p-3 flex flex-row justify-center items-center rounded-full">
            <span>Kontak Dosen</span>
          </div>
        </div>
      </div>
    </section>
  );
}
