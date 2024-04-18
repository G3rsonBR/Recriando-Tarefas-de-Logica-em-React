import { Button } from "./components/Button";
import { exercisesManzano } from "./assets/exercisesManzano";
import { exercisesFaccat } from "./assets/exercisesFaccat";
import { useState, createElement } from "react";
import "./App.css";

export default function App() {
  const [showFaccat, setShowFaccat] = useState(false);
  const [showManzano, setShowManzano] = useState(false);

  function createElementExercises({ text }) {
    return createElement(
      "div",
      { className: "exercises" },
      createElement("p", null, text)
    );
  }

  return (
    <>
      <h1 className="title">Exercícios</h1>
      <div className="buttons">
        <button
          className="btn"
          onClick={() => {
            setShowManzano(false);
            setShowFaccat(!showFaccat);
          }}
        >
          Faccat
        </button>
        <button
          className="btn"
          onClick={() => {
            setShowFaccat(false);
            setShowManzano(!showManzano);
          }}
        >
          Manzano
        </button>
      </div>

      {showFaccat ? (
        <div className="faccat exercises">
          <p className="firstChildExercises">
            (Alguns exercícios pulam em números específicos. Não é porque
            faltou, é porque eram testes de mesa, e não tinha necessidade de
            trazer para esse tipo de exercício.)
          </p>
          {exercisesFaccat.map((exercise, index) => (
            <Button
              className="btn btn-exercise"
              key={index}
              name={exercise.name}
              functionName={exercise.func}
            />
          ))}
        </div>
      ) : null}

      {showManzano ? (
        <div className="manzano exercises">
          {exercisesManzano.map((exercise, index) => (
            <Button
              className="btn btn-exercise"
              key={index}
              name={exercise.name}
              functionName={exercise.func}
            />
          ))}
        </div>
      ) : null}
    </>
  );
}
