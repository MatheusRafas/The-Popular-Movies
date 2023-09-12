import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
    name: "favorite",
    initialState: {
        movies: []
    },
    reducers: {
        addMovie: (state, action) => {
            //Add um novo filme á lista de filmes favoritos
            state.movies = state.movies.concat(action.payload) //action.payload => component MovieItem
        },

        removeMovie: (state, action) => {
            //Removendo um filme da lista de filmes favoritos
            state.movies = state.movies.filter(movie => movie.id !== action.payload.id)
        }
    }
});

export const { addMovie, removeMovie } = favoritesSlice.actions;
export default favoritesSlice.reducer;
