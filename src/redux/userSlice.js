import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    username: "user",
    email: "user@gmail.com",
    password: "user123",
    loggedIn: false,
    favourite: [],
    history: [],
    userProfile: {
      fullname: null,
      email: null,
      address: null,
    },
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserProfileFullname: (state, action) => {
      state.userData.userProfile.fullname = action.payload;
    },
    setUserProfileEmail: (state, action) => {
      state.userData.userProfile.email = action.payload;
    },
    setUserProfileAddress: (state, action) => {
      state.userData.userProfile.address = action.payload;
    },
    setUserIsLoggedIn: (state, action) => {
      state.userData.loggedIn = action.payload;
    },
    addToHistory: (state, action) => {
      console.log(action.payload);
      state.userData.history.push(action.payload);
    },
    saveToFavourite: (state, action) => {
      console.log(action.payload);
      const dataToFind = state.userData.favourite.find(
        (item) => item.hotel.hotelId === action.payload.hotel.hotelId
      );
      if (dataToFind) {
        const filtered = state.userData.favourite.filter(
          (item) => item.hotel.hotelId !== dataToFind.hotel.hotelId
        );
        state.userData.favourite = filtered;
      } else {
        state.userData.favourite.push(action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUserProfileFullname,
  setUserProfileEmail,
  setUserProfileAddress,
  setUserIsLoggedIn,
  saveToFavourite,
  addToHistory,
} = userSlice.actions;

export default userSlice.reducer;
