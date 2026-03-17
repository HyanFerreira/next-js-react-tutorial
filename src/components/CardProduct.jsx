"use client";

import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

export default function CardProduct(props) {
  function parseNumber(value) {
    const number = Number(value);
    return Number.isFinite(number) ? number : 0;
  }

  function formatCurrency(value) {
    return value.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  const originalPrice = parseNumber(props.original_price);
  const discountedPrice = parseNumber(props.discounted_price);
  const installments = parseNumber(props.installments);

  const installmentValue =
    installments > 0 ? discountedPrice / installments : 0;

  const [favorite, setFavorite] = useState(false);

  const favorited = (
    <button
      type="button"
      onClick={() => {
        setFavorite(!favorite);
      }}
      className="absolute top-2 right-2 z-10 cursor-pointer"
    >
      <FaHeart
        className={`size-6 ${favorite ? "fill-red-500" : "fill-gray-900"}`}
      />
    </button>
  );

  return (
    <div className="bg-gray-900 w-86 flex flex-col gap-4 p-3 rounded-lg">
      <div className="bg-white w-full h-56 rounded-md flex items-center justify-center relative">
        <Image
          src={props.image}
          width={200}
          height={144}
          alt="Imagem do produto"
        />
        {favorited}
      </div>
      <div>
        <h1 className="text-md font-semibold">{props.title}</h1>
      </div>

      <div className="flex flex-col">
        <span className="text-gray-300 line-through">
          R$ {formatCurrency(originalPrice)}
        </span>

        <span className="text-2xl font-bold">
          R$ {formatCurrency(discountedPrice)}
        </span>

        <span className="text-gray-300">À vista no PIX</span>

        <span className="text-gray-300">
          ou até{" "}
          <span className="font-bold">
            {installments}x de R$ {formatCurrency(installmentValue)}
          </span>
        </span>
      </div>

      <div>
        <button
          type="button"
          className="w-full p-2 bg-white rounded-md text-gray-900 font-bold uppercase flex items-center justify-center gap-2 cursor-pointer hover:bg-white/80 transition"
        >
          <FaCartShopping className="size-5" /> Comprar
        </button>
      </div>
    </div>
  );
}
