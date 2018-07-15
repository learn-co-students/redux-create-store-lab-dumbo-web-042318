export default function createStore(reducer) {
  let state;

  const store = { dispatch, getState }

  function dispatch(action) {
    state = reducer(state, action);
    render(store);
  };

  function getState() {
    return state;
  }

  dispatch({ type: '@@INIT' })

  return store
};

function render() {
  const container = document.getElementById('container');
}
