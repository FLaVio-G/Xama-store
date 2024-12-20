import axios from "axios";

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

fetchProducts()
  .then((products) => {
    const formattedProducts = products.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      category: product.category,
      description: product.description,
      image: product.image,
    }));

    console.log(formattedProducts);
  })
  .catch((error) => {
    console.error("Erro ao processar os produtos:", error.message);
  });
