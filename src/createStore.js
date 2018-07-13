export default function createStore(reducer) {
  let state;

  let store = {
    getState,
    dispatch
  };

  function getState() {
    return state;
  };

  function dispatch(action){
    state = reducer(state, action);
    render();
  }

  dispatch({ type: "@@INIT" });

  return store;
}

function render() {
  const container = document.getElementById('container');
}
