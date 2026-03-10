import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function QuemSomos() {
  return (
    <div>
      <Header />

      <main className="flex bg-gray-50 text-white">
        <Sidebar />
        <div>
          <h1 className="text-2xl font-bold p-8 text-gray-900">Quem somos</h1>
        </div>
      </main>

      <Footer />
    </div>
  );
}
