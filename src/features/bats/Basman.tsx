import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addBatsmanName, addRunsToBatsman, selectBat, selectBat2, changeStrike } from "./batsmanSlice";
import { Button, EditableInput, Input, Table, TableCaption, Thead, Tr, Th, Tbody } from "@chakra-ui/react";


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
            <div>
                <Input
                    aria-label="Set batsman name"
                    value={batsmanName}
                    onChange={(e) => setBatsmanName(e.target.value)}
                />
                <Button onClick={addBatsman}>
                    Add Batsman
                </Button>
            </div>
            <div >
                <Input
                    aria-label="Set runs"
                    value={runs}
                    onChange={(e) => setRuns(Number(e.target.value))}
                />
                <Button onClick={addRuns}>
                    Add Runs
                </Button>
            </div>
            <Table variant={'striped'} colorScheme="linkedin">
                <TableCaption>Scorecard</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Batsman</Th>
                        <Th>Runs</Th>
                        <Th>Balls</Th>
                        <Th>4s</Th>
                        <Th>6s</Th>
                        <Th>Strike Rate</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Th>{batsman.name}</Th>
                        <Th>{batsman.runs}</Th>
                        <Th>{batsman.balls}</Th>
                        <Th>{batsman.fours}</Th>
                        <Th>{batsman.sixes}</Th>
                        <Th>{((batsman.runs / batsman.balls) * 100).toFixed(2)}</Th>
                    </Tr>
                    <Tr>
                        <Th>{batsman2.name}</Th>
                        <Th>{batsman2.runs}</Th>
                        <Th>{batsman2.balls}</Th>
                        <Th>{batsman2.fours}</Th>
                        <Th>{batsman2.sixes}</Th>
                        <Th>{((batsman2.runs / batsman2.balls) * 100).toFixed(2)}</Th>
                    </Tr>
                </Tbody>
            </Table>
            <div>
                <Button onClick={() => alert(batsman.innings)}>
                    Innings
                </Button>
            </div>
        </div>
    );
}

