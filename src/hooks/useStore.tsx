import create from "zustand";

// Define a type for the individual data objects
interface DataItem {
  id: string; // or number, depending on your use case
}

// Define types for the state
interface StoreState {
  data: DataItem[];
  loadData: () => void;
  addItem: (item: DataItem) => void;
  clearData: () => void;
  getItem: (id: string) => string | null;
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

    return data
      ? JSON.parse(data).find((item: DataItem) => item.id === id)
      : null;
  },
}));

export default useFav;
