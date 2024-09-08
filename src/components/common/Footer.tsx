import { footer } from "framer-motion/client";

export default function Footer() {
  return (
    <footer className="font-medium w-full text-zinc-200 text-sm flex items-center justify-center py-5 fixed bottom-0 z-[-1]">
      <p className="text-center mx-auto">Copyright &copy; daffarian.js 2024</p>
    </footer>
  );
}
