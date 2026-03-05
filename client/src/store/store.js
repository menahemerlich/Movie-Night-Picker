import { create } from "zustand";

export const useStore = create((set) => ({
    movies: [],


    fetchMovies: async () => {
        try {
            const response = await fetch("http://localhost:3030/data");
            const result = await response.json();
            set({movies: result})
        } catch (error) {
            console.error(error);
        };
    }
}))