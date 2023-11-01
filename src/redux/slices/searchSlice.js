import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allDatas: [],
    filteredDatas: [],
    searchInputValue: ""
};

export const searchSlice = createSlice({
    name: "searchSlice",
    initialState,
    reducers: {
        setAllDataFromStorage: (state, action) => {
            state.allDatas = action.payload
        },
        setFilteredDatas: (state, action) => {
            state.filteredDatas = action.payload;
        },
        setSearchInputValue: (state, action) => {
            state.searchInputValue=action.payload
        }
    },
});

export const { setAllDataFromStorage, setFilteredDatas,setSearchInputValue } = searchSlice.actions;

export default searchSlice.reducer;