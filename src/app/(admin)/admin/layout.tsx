export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return(
    <main className="mt-20">
      {children}
    </main>
  )
}