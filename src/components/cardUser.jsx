"use client";

import Image from "next/image";
import Link from "next/link";

import { IoLogoGithub } from "react-icons/io5";
import { FaExternalLinkAlt, FaTrashAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useState } from "react";

export default function CardUser(props) {
  const [isEditing, setIsEditing] = useState(false);

  const [nameUser, setNameUser] = useState(props.name);
  const [emailUser, setEmailUser] = useState(props.email);
  const [passwordUser, setPasswordUser] = useState("");
  const [avatarUser, setAvatarUser] = useState(props.avatar);
  const [githubUser, setGithubUser] = useState(props.github);
  const [portfolioUser, setPortfolioUser] = useState(props.portfolio);

  const handleEdit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3333/user/${props.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameUser,
        email: emailUser,
        pass: passwordUser,
        avatar: avatarUser,
        github: githubUser,
        portfolio: portfolioUser,
      }),
    });

    const data = (await response?.json()) || {};
    console.log(data);

    if (response.ok) {
      console.log("Usuário atualizado com sucesso!");
      setIsEditing(false);
    } else {
      console.error("Falha ao atualizar usuário");
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja deletar este usuário?",
    );
    if (!confirmDelete) return;

    const response = await fetch(`http://localhost:3333/user/${props.id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log("Usuário deletado com sucesso!");
    } else {
      console.error("Falha ao deletar usuário");
    }
  };

  return (
    <div className="bg-gray-900 w-96 flex gap-4 p-4 rounded-lg relative">
      <div className="absolute top-3 right-3 flex gap-3">
        <MdEdit
          onClick={() => setIsEditing(true)}
          className="size-5 text-gray-300 cursor-pointer hover:text-white transition"
        />
        <FaTrashAlt
          onClick={handleDelete}
          className="size-5 text-gray-300 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="bg-white rounded-full w-27 h-27 p-0.5">
        {props.avatar ? (
          <Image
            src={props.avatar}
            width={108}
            height={108}
            alt="Imagem do usuário"
            className="rounded-full"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FaUser className="size-10 text-gray-500" />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold">{props.name}</h1>
          <span className="text-gray-300">{props.email}</span>
        </div>
        <div className="flex gap-2">
          <Link
            href={props.github ? props.github : "#"}
            className="px-2 py-1 rounded-md hover:bg-white hover:text-gray-900 font-bold cursor-pointer transition border-2 flex items-center gap-2 hover:border-white"
            target="_blank"
          >
            <IoLogoGithub className="size-5" />
            GitHub
          </Link>
          <Link
            href={props.portfolio ? props.portfolio : "#"}
            className="px-2 py-1 rounded-md hover:bg-white hover:text-gray-900 font-bold cursor-pointer transition border-2 flex items-center gap-2 hover:border-white"
            target="_blank"
          >
            <FaExternalLinkAlt className="size-4" />
            Portfólio
          </Link>
        </div>
      </div>

      {isEditing && (
        <div className="absolute top-38 left-1/2 -translate-x-1/2 z-50 bg-gray-800 bg-opacity-90 flex items-center justify-center rounded-lg">
          <form
            onSubmit={handleEdit}
            className="bg-gray-900 p-6 rounded-lg flex flex-col gap-4 w-80"
          >
            <h2 className="text-xl font-bold text-white">Editar Usuário</h2>
            <input
              type="text"
              value={nameUser}
              onChange={(e) => setNameUser(e.target.value)}
              placeholder="Nome"
              className="p-2 rounded-md bg-gray-700 text-white focus:outline-none"
            />
            <input
              type="email"
              value={emailUser}
              onChange={(e) => setEmailUser(e.target.value)}
              placeholder="Email"
              className="p-2 rounded-md bg-gray-700 text-white focus:outline-none"
            />
            <input
              type="text"
              value={passwordUser}
              onChange={(e) => setPasswordUser(e.target.value)}
              placeholder="Senha"
              className="p-2 rounded-md bg-gray-700 text-white focus:outline-none"
            />
            <input
              type="text"
              value={avatarUser}
              onChange={(e) => setAvatarUser(e.target.value)}
              placeholder="URL do Avatar"
              className="p-2 rounded-md bg-gray-700 text-white focus:outline-none"
            />
            <input
              type="text"
              value={githubUser}
              onChange={(e) => setGithubUser(e.target.value)}
              placeholder="URL do GitHub"
              className="p-2 rounded-md bg-gray-700 text-white focus:outline-none"
            />
            <input
              type="text"
              value={portfolioUser}
              onChange={(e) => setPortfolioUser(e.target.value)}
              placeholder="URL do Portfólio"
              className="p-2 rounded-md bg-gray-700 text-white focus:outline-none"
            />
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 rounded-md cursor-pointer font-semibold hover:bg-gray-700 transition"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-md cursor-pointer font-semibold bg-white hover:bg-white/95 text-gray-900 transition"
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
