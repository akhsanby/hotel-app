import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiURL = "https://sandbox.impala.travel/v1/hotels";
const apiParameter = "?size=10";
const apiKey = "sandb_zxWQLviOwbflodFtRfxPI8ZndRhunTrnftXOh0wd";

export const fetchAllHotelData = createAsyncThunk(
  "hotel/fetchAllHotelData",
  async () => {
    try {
      const result = await fetch(`${apiURL}${apiParameter}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `${apiKey}`,
        },
      }).then((response) => response.json());
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const fetchHotelByKeyword = createAsyncThunk(
  "hotel/fetchHotelByKeyword",
  async (keyword, thunkAPI) => {
    try {
      const result = await fetch(`${apiURL}?name[like]=${keyword}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `${apiKey}`,
        },
      }).then((response) => response.json());
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

const initialState = {
  data: null,
  searchResult: [],
  searchTextValue: "",
  loading: null,
  error: null,
};

export const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchTextValue = action.payload;
    },
  },
  extraReducers: {
    [fetchAllHotelData.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchAllHotelData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [fetchAllHotelData.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    [fetchHotelByKeyword.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchHotelByKeyword.fulfilled]: (state, action) => {
      state.searchResult = action.payload;
      state.loading = false;
    },
    [fetchHotelByKeyword.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchValue } = hotelSlice.actions;

export default hotelSlice.reducer;
