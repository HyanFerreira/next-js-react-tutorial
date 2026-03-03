import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const nome = "mundo";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="flex bg-gray-400 text-white">
        <Sidebar />
        <div>
          <h1 className="text-2xl font-bold p-2">Olá, {nome}!</h1>
        </div>
      </main>

      <Footer />
    </div>
  );
}
