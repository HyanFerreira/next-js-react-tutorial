"use client";

import { useEffect, useState } from "react";
import CardUser from "@/components/CardUser";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("http://localhost:3333/user");
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setUsers(data.users);
      } else {
        console.error("Falha ao realizar fetch users");
      }
    };

    getUsers();
    setIsLoading(false);
  }, []);

  return (
    <div>
      <Header />

      <main className="flex bg-gray-50 text-white">
        <Sidebar />
        <div className="p-8">
          <div className="grid grid-cols-2 gap-6">
            {isLoading ? (
              <p>Carregando...</p>
            ) : (
              users.map((user) => (
                <CardUser
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  email={user.email}
                  avatar={user.avatar}
                />
              ))
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
