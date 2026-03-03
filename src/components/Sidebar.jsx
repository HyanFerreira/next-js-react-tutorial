import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-[calc(100vh-108px)] bg-gray-600 p-2 font-bold">
      <ul className="space-y-2">
        <li>
          <Link href="/" className="block px-3 py-2 rounded hover:bg-gray-500 transition">
            Início
          </Link>
        </li>
        <li>
          <Link
            href="/quem-somos"
            className="block px-3 py-2 rounded hover:bg-gray-500 transition"
          >
            Quem somos
          </Link>
        </li>
      </ul>
    </aside>
  );
}
