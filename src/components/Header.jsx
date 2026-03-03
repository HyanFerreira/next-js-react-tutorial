import Link from "next/link";

export default function Header() {
  return (
    <header className="px-4 py-2 bg-gray-800 text-white">
      <nav className="flex items-center justify-between px-4 py-2 m-1">
        <div>
          <h1 className="text-[#46C001] text-bold text-2xl font-bold">
            HFSTACK
          </h1>
        </div>
        <div>
          <ul className="flex gap-8">
            <li>
              <Link
                className="hover:bg-[#46C001] hover:text-gray-800 font-bold p-2 rounded-md transition"
                href="/"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-[#46C001] hover:text-gray-800 font-bold p-2 rounded-md transition"
                href="/quem-somos"
              >
                Quem somos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
