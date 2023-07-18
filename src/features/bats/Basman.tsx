import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addBatsmanName, addRunsToBatsman, selectBat, selectBat2, changeStrike } from "./batsmanSlice";
import styles from "./Batsman.module.css";

export const Batsman = () => {
    const batsman = useAppSelector(selectBat);
    const batsman2 = useAppSelector(selectBat2);
    const dispatch = useAppDispatch();
    const [batsmanName, setBatsmanName] = useState("");
    const [runs, setRuns] = useState(0);

    const addBatsman = () => {
        dispatch(addBatsmanName(batsmanName));
        setBatsmanName("");
    };

    const addRuns = () => {
        dispatch(addRunsToBatsman(runs));
        if (runs % 2 !== 0) {
            dispatch(changeStrike());
        }
        setRuns(0);
    };

    return (
        <div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set batsman name"
                    value={batsmanName}
                    onChange={(e) => setBatsmanName(e.target.value)}
                />
                <button className={styles.button} onClick={addBatsman}>
                    Add Batsman
                </button>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set runs"
                    value={runs}
                    onChange={(e) => setRuns(Number(e.target.value))}
                />
                <button className={styles.button} onClick={addRuns}>
                    Add Runs
                </button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Batsman Name</th>
                        <th>Runs</th>
                        <th>Balls</th>
                        <th>4s</th>
                        <th>6s</th>
                        <th>Strike Rate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{batsman.name}</td>
                    <td>{batsman.runs}</td>
                    <td>{batsman.balls}</td>
                    <td>{batsman.fours}</td>
                    <td>{batsman.sixes}</td>
                    <td>{((batsman.runs / batsman.balls) *100).toFixed(2)}</td>
                    </tr>
                    <tr>
                    <td>{batsman2.name}</td>
                    <td>{batsman2.runs}</td>
                    <td>{batsman2.balls}</td>
                    <td>{batsman2.fours}</td>
                    <td>{batsman2.sixes}</td>
                    <td>{((batsman2.runs / batsman2.balls) *100).toFixed(2)}</td>
                    </tr>
                </tbody>
                
            </table>
            <div>
                <button className={styles.button} onClick={() => alert(batsman.innings)}>
                    Innings
                </button>
            </div>
        </div>
    );
}

