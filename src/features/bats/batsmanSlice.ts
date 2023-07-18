import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState} from '../../app/store';

import { Batsman } from "./interface/batsman";
import { createNewBatsman } from "./helpers/createNewBatsman";

export interface BatsmanState {
    batsmen: Batsman;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: BatsmanState = {
    batsmen: createNewBatsman(),
    status: 'idle',
};

export const batsmanSlice = createSlice({
    name: 'batsman',
    initialState,
    reducers: {
        addBatsmanName: (state, action: PayloadAction<string>) => {
            state.batsmen.name = action.payload;
        },
        addRunsToBatsman: (state, action: PayloadAction<number>) => {
            state.batsmen.runs += action.payload;
            state.batsmen.balls += 1;
            if (action.payload === 4) {
                state.batsmen.fours += 1;
            }
            if (action.payload === 6) {
                state.batsmen.sixes += 1;
            }
            state.batsmen.innings.push(action.payload);
        }
    }
});

export const { addBatsmanName, addRunsToBatsman } = batsmanSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectBat = (state: RootState) => state.batsman.batsmen;

export default batsmanSlice.reducer;






