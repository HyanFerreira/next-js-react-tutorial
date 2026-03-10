import Link from "next/link";

import { FaHome, FaUsers } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-54 h-[calc(100vh-112px)] bg-gray-700 p-2 font-bold">
      <ul className="space-y-2">
        <li>
          <Link
            href="/"
            className="px-3 py-2 rounded hover:bg-gray-500 transition flex items-center gap-2"
          >
            <FaHome className="size-6" />
            Início
          </Link>
        </li>
        <li>
          <Link
            href="/quem-somos"
            className="px-3 py-2 rounded hover:bg-gray-500 transition flex items-center gap-2"
          >
            <FaUsers className="size-6" />
            Quem somos
          </Link>
        </li>
      </ul>
    </aside>
  );
}
