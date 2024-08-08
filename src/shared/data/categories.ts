'use server'
export async function getCategories(): Promise<string[]> {
  const res = await fetch('https://dummyjson.com/products/category-list?delay=2000')
  const categories = await res.json();
  return categories
}