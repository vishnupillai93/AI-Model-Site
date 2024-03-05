import { createSlice } from "@reduxjs/toolkit";

export const modelSlice = createSlice({
  name: "model",
  initialState: {
    value: [],
  },
  reducers: {
    setmodel: (state, action) => {
      state.value = action.payload;
    },
    changelikes: (state, action) => {
      state.value = state.value.map((item) =>
        item.id == action.payload.id ? action.payload : item
      );
    },
    addmodel: (state, action) => {
      state.value = [...state.value, action.payload];
      console.log(state.value);
    },
  },
});

export const { setmodel, changelikes, addmodel } = modelSlice.actions;

export default modelSlice.reducer;
