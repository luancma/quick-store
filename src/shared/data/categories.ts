'use server'
export async function getCategories(): Promise<string[]> {
  const res = await fetch('https://dummyjson.com/products/category-list?delay=2000', {
    next: {
      revalidate: 60 * 60,
      tags: ['categories']
    }
  })
  const categories = await res.json();
  return categories
}