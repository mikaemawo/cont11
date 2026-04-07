import { create } from "zustand";
import { products } from "./data";

export const useStore = create((set) => ({
  products: products,
  selectedCategory: "all",

  setCategory: (category) => set({ selectedCategory: category }),

  getFilteredProducts: (state) => {
    if (state.selectedCategory === "all") return state.products;
    return state.products.filter(
      (item) => item.category === state.selectedCategory
    );
  },
}));