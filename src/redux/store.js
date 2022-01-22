import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "./hotelSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    hotel: hotelReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
