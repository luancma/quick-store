'use server'
import { revalidateTag } from 'next/cache'
import { redirect } from "next/navigation";

export const revalidateCategories = async () => {
  await revalidateTag("categories");
  redirect("/");
};
