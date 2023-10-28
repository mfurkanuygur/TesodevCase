import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // allDatas: (sessionStorage.getItem("syncData")) && JSON.parse(sessionStorage.getItem("syncData")),
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
            // console.log("filterli", state.filteredDatas)
        },
        setSearchInputValue: (state, action) => {
            state.searchInputValue=action.payload
        }
    },
});

export const { setAllDataFromStorage, setFilteredDatas,setSearchInputValue } = searchSlice.actions;

export default searchSlice.reducer;