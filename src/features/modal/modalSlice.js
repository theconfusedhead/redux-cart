import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};
export const createModal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});
export const { open, close } = createModal.actions;

export default createModal.reducer;
