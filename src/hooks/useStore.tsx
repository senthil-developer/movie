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
  removeItem: (id: string) => void;
}

const useFav = create<StoreState>((set) => ({
  data: [],
  getData: () => {
    const data = localStorage.getItem("data");
    return { data: data ? JSON.parse(data) : [] };
  },
  addItem: (item) =>
    set((state) => {
      const oldData = JSON.parse(localStorage.getItem("data")!);
      if (!state.getItem(item.id)) {
        const newData = [...state.data, item];
        localStorage.setItem("data", JSON.stringify(newData));
        return { data: newData };
      }
      return { data: oldData };
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
  removeItem: (id) => {
    const data = localStorage.getItem("data");
    const newData =
      data && JSON.parse(data).filter((item: FavCardType) => item.favId !== id);
    localStorage.setItem("data", JSON.stringify(newData));
  },
}));

export default useFav;
