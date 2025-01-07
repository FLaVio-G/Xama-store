import { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>(
      "https://fakestoreapi.com/products",
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os produtos:", error);
    throw error;
  }
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="mb-2 mt-10 flex w-full flex-col items-center justify-center">
        <div className="flex w-[900px] flex-row justify-around gap-4">
          <div>
            <select className="select w-full max-w-xs">
              <option disabled selected>
                Eletrônicos
              </option>
              <option>Joias</option>
              <option>Roupas masculinas</option>
              <option>Roupas femininas</option>
            </select>
          </div>
          <div>
            <select className="select w-full max-w-xs">
              <option disabled selected>
                Menores preços
              </option>
              <option>Maiores preços</option>
              <option>Ordem alfabética</option>
            </select>
          </div>

          <div>
            <label className="flex h-[1.44rem] w-full max-w-[45rem] items-center gap-2 border-b border-gray-400 bg-white">
              <input
                type="text"
                className="w-full bg-transparent text-sm outline-none"
                placeholder="O que você está procurando"
              />
              <img
                src="/magnifying-glass1.svg"
                alt="Search Icon"
                className="h-[1.125rem] w-[1.125rem]"
              />
            </label>
          </div>
        </div>
        <div className="grid w-[900px] grid-cols-3 gap-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex h-[400px] w-full flex-col items-center justify-center rounded-lg bg-white"
            >
              <div className="mt-2">
                <img
                  className="h-[150px] w-[150px]"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="mt-2 flex h-[150px] w-[200px] flex-col items-center justify-center bg-[#E6E8EA]">
                <h2 className="mt-2 line-clamp-1 text-[12px] font-bold text-[#7A7A7A]">
                  {product.title.split(" ").slice(0, 3).join(" ")}
                </h2>
                <p className="m-2 mt-2 line-clamp-2 text-[10px] font-semibold">
                  {product.description}
                </p>
                <p className="text-[18px] font-bold">
                  R$ {product.price.toFixed(2).replace(".", ",")}
                </p>
                <div className="">
                  <button className="h-[32px] w-[125px] rounded-lg bg-black text-white">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
