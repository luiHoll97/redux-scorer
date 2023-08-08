import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addBatsmanName, addRunsToBatsman, selectBat, selectBat2, changeStrike } from "./batsmanSlice";
import { addBowlerName, addBallToBowler, addRunsToBowler, selectBowler } from "../bowler/bowlerSlice";
import { Button, Input, Table, TableCaption, Thead, Tr, Th, Tbody, SimpleGrid, Divider, HStack, Box, Center, Text, Heading} from "@chakra-ui/react";


export const Batsman = () => {
    const batsman = useAppSelector(selectBat);
    const batsman2 = useAppSelector(selectBat2);
    const bowler = useAppSelector(selectBowler);
    const dispatch = useAppDispatch();
    const [batsmanName, setBatsmanName] = useState("");
    const [bowlerName, setBowlerName] = useState("");


    const addBatsman = () => {
        dispatch(addBatsmanName(batsmanName));
        setBatsmanName("");
    };

    const addBowler = () => {
        dispatch(addBowlerName(bowlerName));
        setBowlerName("");
    };

    const batsmen = [batsman, batsman2];

    const addRuns = (runs: number) => {
        dispatch(addBallToBowler());
        dispatch(addRunsToBowler(runs));
        dispatch(addRunsToBatsman(runs));
        if (runs % 2 !== 0) {
            dispatch(changeStrike());
        }
    };

    return (
        <Box m={5}>
            <Box>
                <Center>
                    <Heading size='3xl' fontFamily='mono' m={5}>Redux Scorer</Heading>
                    <Text fontSize='xl' fontFamily='mono' mr={5}>Hey, welcome to redux-scorer. This app is just to get a feel for how I can use redux for a larger application I am working on.
                        This app uses no databse to track scores, so I will need to adjust my reducers with thunks to allow for async functionality between the app and firebase (my chosen databse)
                    </Text>

                </Center>
            </Box>
            <div>
                <HStack spacing={4}>
                    <Input
                        aria-label="Set batsman name"
                        value={batsmanName}
                        onChange={(e) => setBatsmanName(e.target.value)}
                        maxW={200}
                    />
                    <Button onClick={addBatsman}>
                        Add Batsman
                    </Button>
                </HStack>
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
                {batsmen.map((batsman) => (
                    <Tbody>
                        <Tr>
                            <Th>{batsman.name}</Th>
                            <Th>{batsman.runs}</Th>
                            <Th>{batsman.balls}</Th>
                            <Th>{batsman.fours}</Th>
                            <Th>{batsman.sixes}</Th>
                            <Th>{((batsman.runs / batsman.balls) * 100).toFixed(2)}</Th>
                        </Tr>
                    </Tbody>
                ))}
            </Table>
            <br />
            <Divider />
            <Table variant={'striped'} colorScheme="linkedin">
                <TableCaption>Bowler</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Bowler</Th>
                        <Th>Overs</Th>
                        <Th>Runs</Th>
                        <Th>Wickets</Th>
                        <Th>Economy</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Th>{bowler.name}</Th>
                        <Th>{bowler.overs}</Th>
                        <Th>{bowler.runs}</Th>
                        <Th>{bowler.wickets}</Th>
                        <Th>{(bowler.runs / ((bowler.overs * 6) + bowler.balls) * 6).toFixed(2)}</Th>
                    </Tr>
                </Tbody>
            </Table>
            <br />
            <HStack spacing={5}>
                <Input maxW={200} aria-label="Set bowler name" value={bowlerName} onChange={(e) => setBowlerName(e.target.value)} />
                <Button onClick={() => addBowler()}>
                    Add Bowler
                </Button>
            </HStack>
            <div>
                <SimpleGrid columns={3} spacing={5} mt={10}>
                    {[1, 2, 3, 4, 5, 6].map((value) => (
                        <Button key={value} onClick={() => addRuns(value)}>
                            {value}
                        </Button>
                    ))}
                    <Button onClick={() => addRuns(0)}>
                        Dot Ball
                    </Button>
                    <Button onClick={() => alert(batsman.innings)}>
                        Innings For Current Batsman
                    </Button>
                </SimpleGrid>
                <br />

            </div>
        </Box>
    );
}

