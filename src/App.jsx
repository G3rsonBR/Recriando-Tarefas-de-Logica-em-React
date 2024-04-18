import { Button } from "./components/Button";
import { Div } from "./components/Div";
import { exercisesManzano } from "./assets/exercisesManzano";
import { exercisesFaccat } from "./assets/exercisesFaccat";
import { useState, createElement } from "react";
import "./App.css";

export default function App() {
  const [showFaccat, setShowFaccat] = useState(false);
  const [showManzano, setShowManzano] = useState(false);

  return (
    <>
      <h1 className="title">Exercícios</h1>
      <div className="buttons">
        <Button
          className="btn"
          name="Faccat"
          functionName={() => {
            setShowManzano(false);
            setShowFaccat(!showFaccat);
          }}
        />
        <Button
          className="btn"
          name="Mazano"
          functionName={() => {
            setShowFaccat(false);
            setShowManzano(!showManzano);
          }}
        />
      </div>

      {showFaccat ? (
        <Div
          className="faccat exercises"
          content={exercisesManzano.map((exercise, index) => (
            <Button
              className="btn btn-exercise"
              key={index}
              name={exercise.name}
              functionName={exercise.func}
            />
          ))}
          contentText="(Alguns exercícios pulam em números específicos. Não é porque faltou, é porque eram testes de mesa, e não tinha necessidade de trazer para esse tipo de exercício.)"
        />
      ) : null}

      {showManzano ? (
        <div className="manzano">
          <Div
            className="exercises"
            content={exercisesFaccat.map((exercise, index) => {
              if (index < 13) {
                return (
                  <Button
                    className="btn btn-exercise"
                    key={index}
                    name={exercise.name}
                    functionName={exercise.func}
                  />
                );
              }
            })}
            contentText="Exercícios Páginas 25 e 26"
          />
 <Div
            className="exercises"
            content={exercisesFaccat.map((exercise, index) => {
              if (index >= 13 && index < 25) {
                return (
                  <Button
                    className="btn btn-exercise"
                    key={index}
                    name={exercise.name}
                    functionName={exercise.func}
                  />
                );
              }
            })}
            contentText="Exercícios da página 41 e 42"
          />
<Div
            className="exercises"
            content={exercisesFaccat.map((exercise, index) => {
              if (index >= 25 && index < 37) {
                return (
                  <Button
                    className="btn btn-exercise"
                    key={index}
                    name={exercise.name}
                    functionName={exercise.func}
                  />
                );
              }
            })}
            contentText="Exercícios da página 46 e 47"
          />
<Div
            className="exercises"
            content={exercisesFaccat.map((exercise, index) => {
              if (index >= 37 && index < 46) {
                return (
                  <Button
                    className="btn btn-exercise"
                    key={index}
                    name={exercise.name}
                    functionName={exercise.func}
                  />
                );
              }
            })}
            contentText="Exercícios da página 50"
          />
<Div
            className="exercises"
            content={exercisesFaccat.map((exercise, index) => {
              if (index >= 46 && index < 57) {
                return (
                  <Button
                    className="btn btn-exercise"
                    key={index}
                    name={exercise.name}
                    functionName={exercise.func}
                  />
                );
              }
            })}
            contentText="Exercícios da página 66"
          />
        </div>
      ) : null}
    </>
  );
}