import CardProduct from "@/components/CardProduct";
import ColorSelector from "@/components/ColorSelector";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Produtos() {
  return (
    <div>
      <Header />

      <main className="flex bg-gray-50 text-white">
        <Sidebar />
        <div className="p-8">
          <div className="grid grid-cols-2 gap-6">
            <CardProduct
              image="https://images3.kabum.com.br/produtos/fotos/463543/placa-de-video-rx-7600-series-graphics-cards-xfx-amd-radeon-8gb-gddr6-rx-76pqickby_1689273145_gg.jpg"
              title="Placa de Vídeo RX 7600 Series Graphics Cards XFX AMD Radeon, 8GB GDDR6 - RX-76PQICKBY"
              original_price={1899.99}
              discounted_price={1599.99}
              installments={10}
            />

            <ColorSelector />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
