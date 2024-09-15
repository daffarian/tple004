export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return(
    <main className="pt-28 mb-14 rounded-b-3xl bg-zinc-900 min-h-svh">
      {children}
    </main>
  )
}