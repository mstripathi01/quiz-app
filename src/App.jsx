

import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "What are LCD, LED, plasma with reference to television?",
      answers: [
        {
          text: "Display screens",
          correct: true,
        },
        {
          text: "Set top boxes",
          correct: false,
        },
        {
          text: "Remotes",
          correct: false,
        },
        {
          text: "Lens",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Who was the first Indian to set foot on Antarctica?",
      answers: [
        {
          text: "Ram Das Katari",
          correct: false,
        },
        {
          text: "Ram Charan",
          correct: true,
        },
        {
          text: "Sayed Zahoor Quasim",
          correct: false,
        },
        {
          text: "V K Raina",
          correct: false,
        },
      ],
    },

    {
      id: 6,
      question: "Which of these means a person with conservative mindset?",
      answers: [
        {
          text: "Kanjoos",
          correct: false,
        },
        {
          text: "Daquianoos",
          correct: true,
        },
        {
          text: "Chaploos",
          correct: false,
        },
        {
          text: "Manhoos",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Of what is a kilobyte a unit",
      answers: [
        {
          text: "Speed of light",
          correct: false,
        },
        {
          text: "Intensity of earthquake",
          correct: false,
        },
        {
          text: "speed of bullet trains",
          correct: false,
        },
        {
          text: "Computer memory or data",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "When an umpire makes a T signal with his hand during a T20 match, what is he signalling?",
      answers: [
        {
          text: "No ball",
          correct: false,
        },
        {
          text: "Free hit",
          correct: false,
        },
        {
          text: "Time out",
          correct: true,
        },
        {
          text: "Hit wicket",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "The 2014 Nobel prize for physics was awarded for the invention of what?",
      answers: [
        {
          text: "CCD Sensor",
          correct: false,
        },
        {
          text: "Blue light emitting diodes",
          correct: true,
        },
        {
          text: "Robotic exoskeleton",
          correct: false,
        },
        {
          text: "Graphene",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Who is the head of the National Disaster Management Authority of India?",
      answers: [
        {
          text: "Home minister",
          correct: true,
        },
        {
          text: "Union environment minister",
          correct: false,
        },
        {
          text: "President",
          correct: false,
        },
        {
          text: "Prime minister",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "he ruler of which of these kingdoms was called Rana or Maharana?",
      answers: [
        {
          text: "Kashmir",
          correct: true,
        },
        {
          text: "Srinagar",
          correct: false,
        },
        {
          text: "Mewar",
          correct: true,
        },
        {
          text: "Ahmedabad",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "he ruler of which of these kingdoms was called Rana or Maharana?",
      answers: [
        {
          text: "Kashmir",
          correct: true,
        },
        {
          text: "Srinagar",
          correct: false,
        },
        {
          text: "Mewar",
          correct: true,
        },
        {
          text: "Ahmedabad",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
