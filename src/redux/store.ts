import { configureStore } from "@reduxjs/toolkit";
import contactReduer from "./slices/contactSlice";

export const store = configureStore({
  reducer: {
    contacts: contactReduer,
  },
});
