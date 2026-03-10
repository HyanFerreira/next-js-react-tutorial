import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import CardUser from "@/components/cardUser";

import Image from "next/image";

const nome = "mundo";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="flex bg-gray-50 text-white">
        <Sidebar />
        <div className="p-8">
          <div className="grid grid-cols-2 gap-6">
            <CardUser
              name="Hyan Ferreira"
              email="hyanferreira.dev@gmail.com"
              avatar="https://avatars.githubusercontent.com/u/114369661?v=4"
            />

            <CardUser
              name="Hyan Ferreira"
              email="hyanferreira.dev@gmail.com"
              avatar="https://avatars.githubusercontent.com/u/114369661?v=4"
            />

            <CardUser
              name="Hyan Ferreira"
              email="hyanferreira.dev@gmail.com"
              avatar="https://avatars.githubusercontent.com/u/114369661?v=4"
            />
            
            <CardUser
              name="Hyan Ferreira"
              email="hyanferreira.dev@gmail.com"
              avatar="https://avatars.githubusercontent.com/u/114369661?v=4"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
