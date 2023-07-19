import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState} from '../../app/store';

import { Batsman } from "./interface/batsman";
import { createNewBatsman } from "./helpers/createNewBatsman";

export interface BatsmanState {
    onStrikeBatsmen: Batsman;
    offStrikeBatsman: Batsman;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: BatsmanState = {
    onStrikeBatsmen: createNewBatsman(),
    offStrikeBatsman: createNewBatsman(),
    status: 'idle',
};

export const batsmanSlice = createSlice({
    name: 'batsman',
    initialState,
    reducers: {
        addBatsmanName: (state, action: PayloadAction<string>) => {
            if (state.onStrikeBatsmen.name === '') {
                state.onStrikeBatsmen.name = action.payload;
                return;
            }
            else state.offStrikeBatsman.name = action.payload;
        },
        addRunsToBatsman: (state, action: PayloadAction<number>) => {
            const currentbatsman = state.onStrikeBatsmen;
            currentbatsman.runs += action.payload;
            currentbatsman.balls += 1;
            if (action.payload === 4) {
                currentbatsman.fours += 1;
            }
            if (action.payload === 6) {
                currentbatsman.sixes += 1;
            }
            currentbatsman.innings.push(action.payload);
        },
        changeStrike: (state) => {
            const temp = state.onStrikeBatsmen;
            state.onStrikeBatsmen = state.offStrikeBatsman;
            state.offStrikeBatsman = temp;
        },
    }
});

export const { addBatsmanName, addRunsToBatsman, changeStrike } = batsmanSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectBat = (state: RootState) => state.batsman.onStrikeBatsmen;
export const selectBat2 = (state: RootState) => state.batsman.offStrikeBatsman;

export default batsmanSlice.reducer;






