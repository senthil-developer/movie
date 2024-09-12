import { create } from "zustand";
import { CardType } from "../../types";

export interface FavCardType extends Omit<CardType, "id"> {
  favId: string | null;
  id: string;
  type: "movie" | "series" | "person";
}
interface StoreState {
  data: FavCardType[] | [];
  getData: () => { data: FavCardType[] | [] };
  addItem: (item: FavCardType) => void;
  clearData: () => void;
  getItem: (id: string) => boolean;
}

const useFav = create<StoreState>((set) => ({
  data: [],
  getData: () => {
    const data = localStorage.getItem("data");
    return { data: data ? JSON.parse(data) : [] };
  },
  addItem: (item) =>
    set((state) => {
      const newData = [...state.data, item];
      localStorage.setItem("data", JSON.stringify(newData));
      return { data: newData };
    }),
  clearData: () => {
    localStorage.removeItem("data");
    set({ data: [] });
  },
  getItem: (id) => {
    const data = localStorage.getItem("data");

    return (
      data && JSON.parse(data).find((item: FavCardType) => item.favId === id)
    );
  },
}));

export default useFav;
