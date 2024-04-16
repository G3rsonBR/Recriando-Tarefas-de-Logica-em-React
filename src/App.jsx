import { Button } from "./components/Button";
import { exercisesFaccat, exercisesManzano } from "./assets/exercicesBtnNames";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [showFaccat, setShowFaccat] = useState(false);
  const [showManzano, setShowManzano] = useState(false);

  return (
    <>
      <h1 className="title">Exercícios</h1>
      <div className="buttons">
        <button className="btn" onClick={() => {
          setShowManzano(false)
          setShowFaccat(!showFaccat)
          }}>
          Faccat
        </button>
        <button className="btn" onClick={() => {
          setShowFaccat(false)
          setShowManzano(!showManzano)
          }}>
          Manzano
        </button>
      </div>

      {showFaccat ? (
        <div className="faccat exercises">
          {exercisesFaccat.map((exercise, index) => (
            <Button
              className="btn btn-exercise"
              key={index}
              name={exercise}
              functionName={() => alert(exercise)}
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
              name={exercise}
              functionName={() => alert(exercise)}
            />
          ))}
        </div>
      ) : null}
    </>
  );
}
