import { supabase } from "./supabase";

export async function getAllReviews() {
  try {
    const { data, error } = await supabase.from("Reviews Table").select("*");
    if (error) throw new Error("This is an error");
    return data;
  } catch {
    throw new Error("This is an error");
  }
}