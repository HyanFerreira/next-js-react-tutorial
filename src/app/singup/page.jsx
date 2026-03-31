"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [avatar, setAvatar] = useState("");
  const [github, setGithub] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const response = await fetch("http://localhost:3333/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, pass, avatar, github, portfolio }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);
      } else {
        console.error("Erro ao criar conta", data);
      }
    } catch (error) {
      console.error("Erro inesperado ao criar conta:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="min-h-[calc(100vh-36px)] flex bg-linear-to-br from-gray-900 via-gray-800 to-gray-700">
        <section className="flex flex-1 items-center justify-center px-4 py-10 sm:px-8 lg:px-12">
          <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="hidden lg:flex flex-col justify-between bg-gray-900 p-10 text-white">
                <div>
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium">
                    Crie sua conta
                  </span>

                  <h1 className="mt-6 text-4xl font-bold leading-tight">
                    Bem-vindo ao seu novo espaço digital.
                  </h1>

                  <p className="mt-4 max-w-md text-sm leading-6 text-gray-300">
                    Cadastre-se para montar seu perfil, compartilhar seus links
                    e começar a organizar sua presença profissional de forma
                    simples e elegante.
                  </p>
                </div>

                <div className="mt-10 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-gray-800/70 p-4">
                    <p className="text-sm text-gray-300">
                      Preencha seus dados principais e, se quiser, adicione
                      avatar, GitHub e portfólio para deixar seu perfil ainda
                      mais completo.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <div className="h-2 w-16 rounded-full bg-white" />
                    <div className="h-2 w-10 rounded-full bg-gray-500" />
                    <div className="h-2 w-6 rounded-full bg-gray-700" />
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 md:p-10">
                <div className="mb-8 lg:hidden">
                  <span className="inline-flex items-center rounded-full bg-gray-900 px-4 py-1 text-sm font-medium text-white">
                    Crie sua conta
                  </span>

                  <h1 className="mt-4 text-3xl font-bold text-gray-900">
                    Cadastre-se
                  </h1>

                  <p className="mt-2 text-sm text-gray-600">
                    Preencha o formulário abaixo para criar sua conta.
                  </p>
                </div>

                <div className="mb-8 hidden lg:block">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Cadastre-se
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">
                    Preencha o formulário abaixo para criar sua conta.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="md:col-span-2">
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-gray-900"
                      >
                        Nome
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Digite seu nome completo"
                        className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/10"
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-gray-900"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Digite seu email"
                        className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/10"
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label
                        htmlFor="password"
                        className="mb-2 block text-sm font-semibold text-gray-900"
                      >
                        Senha
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="pass"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        placeholder="Digite sua senha"
                        className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/10"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="avatar"
                        className="mb-2 block text-sm font-semibold text-gray-900"
                      >
                        Avatar
                      </label>
                      <input
                        type="text"
                        id="avatar"
                        name="avatar"
                        value={avatar}
                        onChange={(e) => setAvatar(e.target.value)}
                        placeholder="URL da imagem"
                        className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="github"
                        className="mb-2 block text-sm font-semibold text-gray-900"
                      >
                        GitHub
                      </label>
                      <input
                        type="text"
                        id="github"
                        name="github"
                        value={github}
                        onChange={(e) => setGithub(e.target.value)}
                        placeholder="Seu usuário ou link do GitHub"
                        className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/10"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label
                        htmlFor="portfolio"
                        className="mb-2 block text-sm font-semibold text-gray-900"
                      >
                        Portfólio
                      </label>
                      <input
                        type="text"
                        id="portfolio"
                        name="portfolio"
                        value={portfolio}
                        onChange={(e) => setPortfolio(e.target.value)}
                        placeholder="Link do seu portfólio"
                        className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/10"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full rounded-2xl bg-gray-900 px-4 py-3 font-semibold text-white cursor-pointer shadow-md transition hover:bg-gray-900/96 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isLoading ? "Cadastrando..." : "Cadastrar"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
