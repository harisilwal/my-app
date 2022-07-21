// useReducer: simple Counter

import * as React from "react";

const ACTIONS = {
  INCREMENT: "increment",
};
function countReducer(state, action) {
  const { type, step } = action;
  console.log(`step ${step}`);

  switch (type) {
    case ACTIONS.INCREMENT:
      return { ...state, count: state.count + step };
    default: {
      return state;
    }
  }
}

function Counter({ initialCount = 0, step = 2 }) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  });

  function increment() {
    console.log(`state ${state.count}`);
    dispatch({ type: ACTIONS.INCREMENT, step });
  }
  return <button onClick={increment}>{state.count}</button>;
}

function App() {
  return <Counter />;
}

export default App;
