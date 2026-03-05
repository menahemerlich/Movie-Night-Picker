import { create } from "zustand";

export const useStore = create((set) => ({
    movies: [],
    seats:[],
    searchQuery: "",

    fetchMovies: async () => {
        try {
            const response = await fetch("http://localhost:3030/data");
            const result = await response.json();
            set({ movies: result })
        } catch (error) {
            console.error(error);
        };
    },

    fetchSeats: async () => {
        try {
            const response = await fetch("http://localhost:3030/seats");
            const result = await response.json();
            set({ seats: result })
        } catch (error) {
            console.error(error);
        };
    },
    setSearchQuery: (value) => set({searchQuery: value})
}))