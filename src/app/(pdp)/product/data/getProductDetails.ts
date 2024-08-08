import { ProductProps } from "@/shared/data/product";

export const getProductDetails = async ({
  id,
}: {
  id: number;
}): Promise<ProductProps> => {
  const resposne = await fetch(`https://dummyjson.com/products/${id}`);

  if (!resposne.ok) {
    throw new Error("Failed to fetch product details");
  }

  return resposne.json();
};
