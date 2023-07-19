import { Bowler } from "../interface/bowler";

export const createNewBowler = () : Bowler => {
    return {
        id: '',
        name: '',
        overs: 0,
        balls: 0,
        runs: 0,
        wickets: 0,
        maidens: 0,
    };
}