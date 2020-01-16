import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { inc, dec, toggleAuth, getData } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const auth = useSelector(state => state.auth);
  const articles = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();
  const incButton = useRef(null);

  useEffect(() => {
    dispatch(getData());
    incButton.current.classList.add("NewClass")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <div className="App">
      <h1>Redux Using Hooks</h1>
      <p>
        Increase and decrease counter by <strong>5</strong>
      </p>
      <button onClick={() => dispatch(inc(5))} ref={incButton}>
        +
      </button>
      <button onClick={() => dispatch(dec(5))}>-</button>
      <button onClick={() => dispatch(toggleAuth())}>
        Authenticated: <strong>{auth.loggedIn ? "Yes" : "No"}</strong>
      </button>
      <h3>Counter: {counter}</h3>
      <div>
        <ul>
          {articles.map(el => (
            <li key={el.id}>{el.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
