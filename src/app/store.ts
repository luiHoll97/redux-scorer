import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import batsmanReducer from '../features/bats/batsmanSlice';
import bowlerReducer from '../features/bowler/bowlerSlice';

export const store = configureStore({
  reducer: {
    batsman: batsmanReducer,
    bowler: bowlerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
