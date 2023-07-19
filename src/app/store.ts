import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import batsmanReducer from '../features/bats/batsmanSlice';
import bowlerReducer from '../features/bowler/bowlerSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
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
