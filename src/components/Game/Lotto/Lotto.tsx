import React, { useEffect, useState } from "react";
import "./Lotto.scss";
import NumberGenerator from "./NumberGenerator/NumberGenerator";
const Lotto = () => {
  const [numberList, setNumberList] = useState(new Array(7).fill(0));
  const [myNumbers, setMyNumbers] = useState(new Array(6).fill(""));
  const [isValidNums, setIsValidNums] = useState(false);
  const [checking, setChecking] = useState(false);
  const [matches, setMatches] = useState([]);
  const [money, setMoney] = useState(0);

  const loadGameMoney = () => {
    const gameMoney = localStorage.getItem("gameMoney");
    if (gameMoney) return Number(gameMoney);
    else return null;
  };
  const saveGameMoney = (num: number) =>
    localStorage.setItem("gameMoney", num.toString());

  useEffect(() => {
    const gm = loadGameMoney();
    if (!gm) {
      saveGameMoney(1000);
      setMoney(1000);
    } else {
      setMoney(gm);
    }
  }, []);

  useEffect(() => {
    saveGameMoney(money);
  }, [money]);

  useEffect(() => {
    setIsValidNums(validNumbers());
  }, [myNumbers]);

  const validNumbers = () => {
    return myNumbers.every((num) => !isNaN(num) && num > 0 && num < 46);
  };

  useEffect(() => {
    if (!validNumbers()) return; //초기 실행 방지
    setTimeout(() => {
      setChecking(true);
    }, 800);
  }, [numberList]);

  useEffect(() => {
    if (!checking) return; //초기 실행 방지
    const myNumSet = new Set(myNumbers);
    const matchNums = numberList.filter((num) => myNumSet.has(num));
    const bonusMatch = myNumSet.has(numberList[6]);
    let rank = 0;
    if (matchNums.length === 6 && !bonusMatch) rank = 1;
    else if (matchNums.length === 6 && bonusMatch) rank = 2;
    else if (matchNums.length === 5) rank = 3;
    else if (matchNums.length === 4) rank = 4;
    else if (matchNums.length === 3) rank = 5;
    else if (matchNums.length === 2) rank = 6;
    let prize = 0;
    if (rank === 1) prize = 100000000 + Math.floor(Math.random() * 10000000);
    else if (rank === 2) prize = 10000000 + Math.floor(Math.random() * 1000000);
    else if (rank === 3) prize = 1000000 + Math.floor(Math.random() * 100000);
    else if (rank === 4) prize = 100000 + Math.floor(Math.random() * 10000);
    else if (rank === 5) prize = 10000 + Math.floor(Math.random() * 1000);
    else if (rank === 6) prize = 1000 + Math.floor(Math.random() * 100);

    setMoney((money) => money + prize - 100);
    setChecking(false);
    alert(
      `결과 : ${
        rank > 0 ? `${rank}등 ${matchNums.length}개 (${matchNums})` : "꽝"
      }  당첨금: ${prize}CG`
    );
  }, [checking]);

  return (
    <div className="lottoContainer">
      <div>GameMoney: {money}CG</div>
      <h5>lotto</h5>
      <NumberGenerator
        setNumberList={setNumberList}
        isValidNums={isValidNums}
      />
      <div className="lottoPaper">
        {myNumbers.map((myNum, index) => {
          return (
            <input
              type="number"
              onChange={(e) => {
                const num = Number(e.target.value);
                // if (!isNaN(num)) return;
                // if (num < 1 || num > 46) return;
                setMyNumbers((myNumbers) =>
                  myNumbers
                    .slice(0, index)
                    .concat(num)
                    .concat(myNumbers.slice(index + 1))
                );
              }}
              value={myNumbers[index]}
            />
          );
        })}
      </div>
      <button
        className="randomGenBtn"
        onClick={() => {
          const s = new Set();
          let i = 0;
          while (i < 6) {
            while (true) {
              const randomNum = (Math.floor(Math.random() * 1000) % 45) + 1;
              if (!s.has(randomNum)) {
                s.add(randomNum);
                break;
              }
            }
            i++;
          }
          setMyNumbers(Array.from(s));
        }}
      >
        random
      </button>
    </div>
  );
};

export default Lotto;
