import { useState } from "react";
import "./styles.css";

const allValues = ["Kosher", "No Celery(inc celeriac)", "no Egg"];

export default function App() {
  const [selected, setSelected] = useState([]);

  const checkHelper = (e) => {
    if (e.target.id === "all") {
      setSelected(e.target.checked ? [...allValues] : []);
    } else {
      setSelected(
        e.target.checked
          ? selected.indexOf(e.target.id) !== -1
            ? [...selected]
            : [e.target.id, ...selected]
          : selected.filter((item) => e.target.id !== item)
      );
    }
  };

  return (
    <div className="App">
      <h1 className="values__selected">
        value selected: {selected.join(", ")}
      </h1>
      <ul className="values__checkbox">
        {allValues.length ? (
          <>
            <input
              id={"all"}
              type={"checkbox"}
              checked={selected.length === allValues.length}
              onChange={checkHelper}
            ></input>
            <label htmlFor={"all"}>Select All</label>
          </>
        ) : null}

        {allValues.map((item) => {
          return (
            <li key={item}>
              <input
                id={item}
                type={"checkbox"}
                checked={
                  selected.length !== allValues.length &&
                  selected.indexOf(item) >= 0
                }
                onChange={checkHelper}
              ></input>
              <label htmlFor={item}>{item}</label>
            </li>
          );
        })}
      </ul>
      <button
        className="values__button"
        onClick={() => {
          setSelected([]);
        }}
      >
        Clear All
      </button>
    </div>
  );
}
