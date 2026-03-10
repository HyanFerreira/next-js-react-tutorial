import Link from "next/link";

import { FaHome,FaUsers } from "react-icons/fa";

export default function Header() {
  return (
    <header className="px-4 py-2 bg-gray-900 text-white">
      <nav className="flex items-center justify-between px-4 py-2 m-1">
        <div className="flex items-center justify-center gap-6">
          <Link href="/">
            <h1 className="text-white text-bold text-2xl font-bold">hfstack</h1>
          </Link>
          <div className="w-0.5 h-8 bg-white rounded-md"></div>
          <ul className="flex gap-2">
            <li>
              <Link
                className="hover:bg-white hover:text-gray-900 font-bold px-3 py-1.5 rounded-md transition flex items-center justify-center gap-2"
                href="/"
              >
                <FaHome className="size-6" />
                Início
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-white hover:text-gray-900 font-bold px-3 py-1.5 rounded-md transition flex items-center justify-center gap-2"
                href="/quem-somos"
              >
                <FaUsers className="size-6" />
                Quem somos
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="relative">
            {/** biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white absolute top-[50%] left-5 translate-[-50%]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="search"
              placeholder="Pesquisar..."
              className="border-2 border-white rounded-md pl-9 pr-2 py-1 w-60 focus:outline-0"
            />
          </div>
          <button
            type="button"
            className="rounded-md px-2 py-1 border-2 border-white cursor-pointer text-white font-bold transition hover:bg-white hover:text-gray-900"
          >
            Entrar
          </button>
          <button
            type="button"
            className="rounded-md px-2 py-1.5 bg-white cursor-pointer text-gray-900 font-bold"
          >
            Cadastrar
          </button>
        </div>
      </nav>
    </header>
  );
}
