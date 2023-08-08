import { Batsman } from "../interface/batsman";

export const createNewBatsman = () : Batsman => {
    return {
        id: 0,
        name: '',
        runs: 0,
        balls: 0,
        fours: 0,
        sixes: 0,
        innings: [],
        strikeRate: 0,
    }
}