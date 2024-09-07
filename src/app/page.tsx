import Image from "next/image";
export default function Home() {
  return (
    <section className="pt-40">
      <div className="container relative py-5 border-[1px] bg-white text-zinc-500 rounded-3xl shadow-xl">
        <div className="flex flex-col gap-4">
          <div className="w-full h-10 border-2 font-semibold p-2 rounded-full">
            <span>Jadwal E-Learning</span>
          </div>
          <div className="w-full h-10 border-2 font-semibold p-2 rounded-full">
            <span>Jadwal Lengkap</span>
          </div>
          <div className="w-full h-10 border-2 font-semibold p-2 rounded-full">
            <span>Jadwal Pembayaran</span>
          </div>
          <div className="w-full h-10 border-2 font-semibold p-2 rounded-full">
            <span>Info Tugas</span>
          </div>
          <div className="w-full h-10 border-2 font-semibold p-2 rounded-full">
            <span>Kontak Dosen</span>
          </div>
        </div>
      </div>
    </section>
  );
}
