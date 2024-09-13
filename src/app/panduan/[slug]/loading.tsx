export default function Loading() {
  return (
    <div>
      <div>
        <div className="-translate-y-14 w-32 h-5 bg-zinc-600 mx-auto animate-pulse rounded-xl"></div>
        <div className="w-full h-5 bg-zinc-800 rounded-xl animate-pulse mt-5 container"></div>
      </div>
      <div>
        <div className="w-full h-32 mt-10 bg-zinc-800 rounded-xl animate-pulse container"></div>
        <div className="flex mt-5 flex-row gap-5">
          <div className="w-1/3 h-32 bg-zinc-800 rounded-xl animate-pulse container"></div>
          <div className="w-2/3 h-32 bg-zinc-800 rounded-xl animate-pulse container"></div>
        </div>
        <div className="w-full h-32 mt-5 bg-zinc-800 rounded-xl animate-pulse container"></div>
      </div>
    </div>
  );
}
