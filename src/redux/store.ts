import { createStore } from "@reduxjs/toolkit";
import profileReducer from "./slicers/profileSlicer";

const store = createStore({
   reducer: {
      profile: profileReducer,
   },
});

export default store;