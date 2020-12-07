import { createStore } from "redux";
import reducer from "./reducer"
import initial from "./initial"

const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const render = () => {
    let state = store.getState();


}
store.subscribe(render);
render();

export default store;