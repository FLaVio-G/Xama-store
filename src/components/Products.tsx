import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";
import { useNavigate } from "react-router-dom";

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
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/all-products");
  };

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch(() => setError("Erro ao carregar produtos"));
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={100}
        slidesPerView={4}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[353px] w-[1248px] lg:mb-16 lg:mt-[25px]"
      >
        {error && <p>{error}</p>}
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="flex h-[353px] w-full flex-col items-center">
              <img
                className="h-[200px] w-[200px]"
                src={product.image}
                alt={product.title}
              />
              <div className="mt-2 flex h-[150px] flex-col items-center justify-center bg-[#E6E8EA]">
                <h2 className="mt-2 line-clamp-1 text-[12px] font-bold text-[#7A7A7A]">
                  {product.title.split(" ").slice(0, 3).join(" ")}
                </h2>
                <p className="m-2 mt-2 line-clamp-2 text-[10px] font-semibold">
                  {product.description}
                </p>
                <p className="text-[18px] font-bold">
                  R$ {product.price.toFixed(2).replace(".", ",")}
                </p>
                <button className="mb-[14px] mt-2 h-[32px] w-[125px] rounded-lg bg-black text-white">
                  Comprar
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-center">
        <button
          onClick={handleRedirect}
          className="mb-[14px] mt-2 h-[32px] w-[250px] rounded-lg bg-black text-white"
        >
          Ver todos os produtos
        </button>
      </div>
    </>
  );
};

export default Products;
