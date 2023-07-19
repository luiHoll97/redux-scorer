import { Bowler } from "./interface/bowler";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createNewBowler } from "./helpers/createNewBowler";

export interface BowlerState {
    currentBowler: Bowler;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: BowlerState = {
    currentBowler: createNewBowler(),
    status: 'idle',
};

export const bowlerSlice = createSlice({
    name: 'bowler',
    initialState,
    reducers: {
        addBowlerName: (state, action: PayloadAction<string>) => {
            state.currentBowler.name = action.payload;
        },
        addRunsToBowler: (state, action: PayloadAction<number>) => {
            const currentBowler = state.currentBowler;
            currentBowler.runs += action.payload;
        },
        addWicketToBowler: (state) => {
            const currentBowler = state.currentBowler;
            currentBowler.wickets += 1;
        },
        addBallToBowler: (state) => {
            const currentBowler = state.currentBowler;
            currentBowler.balls += 1;
        },
        addOverToBowler: (state) => {
            const currentBowler = state.currentBowler;
            currentBowler.overs += 1;
        }
    },
});

export const { addBowlerName, addRunsToBowler, addWicketToBowler, addBallToBowler, addOverToBowler } = bowlerSlice.actions;

export const selectBowler = (state: any) => state.bowler.currentBowler;

export default bowlerSlice.reducer;
