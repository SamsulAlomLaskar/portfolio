import { configureStore } from "@reduxjs/toolkit"
import themeSlice from "./slices/themeSlice"
import portfolioSlice from "./slices/portfolioSlice"

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    portfolio: portfolioSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
