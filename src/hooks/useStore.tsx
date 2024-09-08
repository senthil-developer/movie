import create from "zustand";

interface DataItem {
  id: string;
}

interface StoreState {
  data: DataItem[];
  loadData: () => void;
  addItem: (item: DataItem) => void;
  clearData: () => void;
  getItem: (id: string) => boolean;
}

const useFav = create<StoreState>((set) => ({
  data: [],
  loadData: () => {
    const data = localStorage.getItem("data");
    set({ data: data ? JSON.parse(data) : [] });
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

    return data && JSON.parse(data).find((item: DataItem) => item.id === id);
  },
}));

export default useFav;
