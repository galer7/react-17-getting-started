import { useState } from "react";
import NumberButton, { colors } from "../components/NumberButton";
import * as utils from "../utils";

function StarGame() {
  const MAX_STARS = 9;

  const [stars, setStars] = useState(utils.getRandomIntBetween(1, 9));
  const [candidateNums, setCandidateNums] = useState<number[]>([]);
  const [availableNums, setAvailableNums] = useState(
    utils.iterate(MAX_STARS).map((n) => n + 1)
  );

  const areCandidateNumsWrong =
    candidateNums.reduce((n, acc) => n + acc) > stars;

  const getNumberStatus = (nr: number) => {
    if (!availableNums.includes(nr)) return colors.used;
    if (!candidateNums.includes(nr)) return colors.available;

    return areCandidateNumsWrong ? colors.wrong : colors.candidate;
  };

  const setGameState = (newCandidateNums: number[]) => {
    if (utils.sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(
        (n) => !newCandidateNums.includes(n)
      );
      setStars(utils.randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  };

  const onNumberClick = (
    number: number,
    currentStatus: keyof typeof colors
  ) => {
    if (currentStatus === "used") {
      return;
    }

    const newCandidateNums =
      currentStatus === "available"
        ? candidateNums.concat(number)
        : candidateNums.filter((cn) => cn !== number);

    setGameState(newCandidateNums);
  };

  return (
    <div>
      <div className="left"></div>
      <div className="right">
        {utils.iterate(MAX_STARS).map((nr) => {
          const actualNr = nr + 1;
          return (
            <NumberButton
              number={actualNr}
              status={getNumberStatus(actualNr)}
              onClick={() => setCandidateNums([...candidateNums, actualNr])}
            />
          );
        })}
      </div>
    </div>
  );
}

export default StarGame;
