import { configureStore } from "@reduxjs/toolkit";
import modelReducer from "./modelSlice";

const appStore = configureStore({
  reducer: {
    model: modelReducer,
  },
});

export default appStore;
