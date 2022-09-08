const { createSlice } = require("@reduxjs/toolkit");

const ToolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    isAuth: false,
    user: {},
  },
  reducers: {
    setAuth(state, action) {
      state.isAuth = action.payload;
    },
    setRealUser(state, action) {
      state.user = action.payload;
    },
  },
});

export default ToolkitSlice.reducer;
export const { setAuth, setRealUser } = ToolkitSlice.actions;
