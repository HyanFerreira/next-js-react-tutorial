import Image from "next/image";
import Link from "next/link";

import { IoLogoGithub } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export default function cardUser(props) {
  return (
    <div className="bg-gray-900 w-96 flex gap-4 p-4 rounded-lg">
      <div className="bg-white rounded-full w-27 h-27">
        <Image
          src={props.avatar}
          width={108}
          height={108}
          alt="Imagem do usuário"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold">{props.name}</h1>
          <span className="text-gray-300">{props.email}</span>
        </div>
        <div className="flex gap-2">
          <Link
            href="https://github.com/HyanFerreira"
            className="px-2 py-1 rounded-md hover:bg-white hover:text-gray-900 font-bold cursor-pointer transition border-2 flex items-center gap-2 hover:border-white"
            target="_blank"
          >
            <IoLogoGithub className="size-5" />
            GitHub
          </Link>
          <Link
            href="https://hyanferreira.netlify.app"
            className="px-2 py-1 rounded-md hover:bg-white hover:text-gray-900 font-bold cursor-pointer transition border-2 flex items-center gap-2 hover:border-white"
            target="_blank"
          >
            <FaExternalLinkAlt className="size-4" />
            Portfólio
          </Link>
        </div>
      </div>
    </div>
  );
}
