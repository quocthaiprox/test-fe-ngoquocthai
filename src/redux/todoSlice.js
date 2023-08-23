import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userId: "",
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    selectUser: (state, action) => {
      state.userId = action.payload;
    },
  },
});
export const { selectUser, searchFilterChange } = todoSlice.actions;
export default todoSlice.reducer;
