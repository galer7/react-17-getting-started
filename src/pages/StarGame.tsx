import "./StarGame.css";
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

  const areCandidateNumsWrong = utils.sum(candidateNums) > stars;

  const getNumberStatus = (nr: number): keyof typeof colors => {
    if (!availableNums.includes(nr)) return "used";
    if (!candidateNums.includes(nr)) return "available";

    return areCandidateNumsWrong ? "wrong" : "candidate";
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

  const gameStatus = availableNums.length === 0 ? "won" : "active";

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
    <div className="game">
      <div className="left">
        {gameStatus === "active"
          ? utils.iterate(stars).map((index) => (
              <div key={index} style={{ height: 32, width: 32 }}>
                ⭐
              </div>
            ))
          : gameStatus === "won"
          ? "Nice!"
          : "Try again"}
      </div>
      <div className="right">
        {utils.iterate(MAX_STARS).map((nr) => {
          const actualNr = nr + 1;
          return (
            <NumberButton
              key={nr}
              number={actualNr}
              status={getNumberStatus(actualNr)}
              onClick={onNumberClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default StarGame;
