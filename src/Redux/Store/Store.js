import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { SignInSlice } from "../Api/User_SIgn";

export const Store = configureStore({
    reducer: {
        [SignInSlice.reducerPath]: SignInSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(SignInSlice.middleware),
});

setupListeners(Store.dispatch);
