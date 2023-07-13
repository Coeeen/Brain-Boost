import "./styles.css";
import questions from "./questions";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);
  const [flashcards, setFlashcards] = useState(questions);
  const [questionInput, setQuestionInput] = useState("");
  const [answerInput, setAnswerInput] = useState("");

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  function ClearFlashcards(e) {
    e.preventDefault();
    setFlashcards([]);
  }
  function AddFlashcards(e) {
    e.preventDefault();

    if (questionInput === "" || answerInput === "") {
      return;
    }

    setFlashcards((prevFlashcards) => [...prevFlashcards, newFlashcard]);
    setQuestionInput("");
    setAnswerInput("");

    const newFlashcard = {
      id: Date.now(),
      question: questionInput,
      answer: answerInput,
    };
  }
  return (
    <div>
      <form className="Form">
        <input
          type="text"
          placeholder="QUESTION"
          value={questionInput}
          onChange={(e) => setQuestionInput(e.target.value)}
        ></input>

        <input
          type="text"
          placeholder="ANSWER"
          value={answerInput}
          onChange={(e) => setAnswerInput(e.target.value)}
        ></input>
        <button onClick={AddFlashcards}>Add</button>
        <button onClick={ClearFlashcards}>Clear</button>
      </form>
      <div className="flashcards">
        {flashcards.map((question) => (
          <div
            key={question.id}
            onClick={() => handleClick(question.id)}
            className={question.id === selectedId ? "selected" : ""}
          >
            <p>
              {question.id === selectedId ? question.answer : question.question}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
