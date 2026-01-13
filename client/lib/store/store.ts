// Redux Store Configuration
import { configureStore } from "@reduxjs/toolkit";
import departmentReducer from "./slices/departmentSlice";

export const store = configureStore({
    reducer: {  
        departments: departmentReducer,  // u have state and control it with dr
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;







