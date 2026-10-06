import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./slicers/profileSlicer";

const store = configureStore({
   reducer: {
      profile: profileReducer,
   },
});

export default store;